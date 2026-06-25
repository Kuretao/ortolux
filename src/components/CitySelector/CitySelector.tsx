"use client";

import { MapPin, Navigation, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { cityDelivery } from "@/src/data/shop";

const STORAGE_KEY = "ortolux-city";
const popularCities = ["Москва", "Санкт-Петербург", "Тосно", "Саратов"];

export function CitySelector() {
  const [city, setCity] = useState("Москва");
  const [isOpen, setIsOpen] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    const savedCity = window.localStorage.getItem(STORAGE_KEY);

    if (savedCity) {
      window.queueMicrotask(() => setCity(savedCity));
    }
  }, []);

  const delivery = useMemo(
    () => cityDelivery.find((item) => item.city === city) ?? cityDelivery[0],
    [city],
  );

  const selectCity = (value: string) => {
    setCity(value);
    window.localStorage.setItem(STORAGE_KEY, value);
    setIsOpen(false);
  };

  const detectCity = () => {
    setIsDetecting(true);

    if (!navigator.geolocation) {
      selectCity("Москва");
      setIsDetecting(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await fetch("/api/location/detect", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            }),
          });
          const result = (await response.json()) as { city?: string };
          selectCity(result.city ?? "Москва");
        } finally {
          setIsDetecting(false);
        }
      },
      () => {
        selectCity("Москва");
        setIsDetecting(false);
      },
      { timeout: 6000 },
    );
  };

  const modal = isOpen ? (
    <div
      className="fixed inset-0 z-[1000] flex items-start justify-center bg-[rgb(15_23_42/0.54)] px-4 pb-8 pt-[15vh] backdrop-blur-[2px] max-sm:pt-[10vh]"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-[min(100%,620px)] overflow-hidden rounded-[22px] bg-white shadow-[0_30px_110px_rgb(15_23_42/0.28)]">
        <button
          className="absolute right-4 top-4 z-[2] inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/90 text-[var(--color-ink)] shadow-[var(--shadow-soft)] transition duration-200 hover:bg-[#f4f6f8]"
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        <div className="bg-[linear-gradient(135deg,#ffffff_0%,#f4f7fb_100%)] px-7 pb-6 pt-7">
          <span className="text-[12px] font-black uppercase tracking-[0.1em] text-[var(--color-accent)]">
            город доставки
          </span>
          <h2 className="mb-2 mt-3 max-w-[420px] text-[clamp(30px,5vw,42px)] leading-[1.02] text-[var(--color-ink)]">
            Выберите город
          </h2>
          <p className="m-0 max-w-[520px] text-[15px] leading-[1.55] text-[var(--color-muted)]">
            От города зависят сроки, доступные способы получения и расчет
            доставки крупногабаритных товаров.
          </p>

          <button
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border-0 bg-[var(--color-primary)] px-5 font-black text-white shadow-[0_12px_28px_rgb(15_23_42/0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)]"
            type="button"
            onClick={detectCity}
          >
            <Navigation size={18} />
            {isDetecting ? "Определяем..." : "Определить автоматически"}
          </button>
        </div>

        <div className="grid gap-3 bg-white p-4 sm:grid-cols-2 sm:p-5">
          {popularCities.map((item) => {
            const cityInfo = cityDelivery.find(
              (deliveryItem) => deliveryItem.city === item,
            );
            const isActive = item === city;

            return (
              <button
                className={`group relative grid min-h-[116px] overflow-hidden rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] ${
                  isActive
                    ? "border-[var(--color-primary)] bg-[#111316] text-white"
                    : "border-[var(--color-line)] bg-[#f8fafc] text-[var(--color-ink)] hover:border-[#cbd5e1] hover:bg-white"
                }`}
                key={item}
                type="button"
                onClick={() => selectCity(item)}
              >
                <span
                  className={`absolute right-4 top-4 h-2.5 w-2.5 rounded-full ${
                    isActive ? "bg-[#ff7433]" : "bg-[#cbd5e1]"
                  }`}
                />
                <strong className="pr-6 text-[18px] leading-[1.1]">{item}</strong>
                <span
                  className={`mt-3 text-sm leading-[1.35] ${
                    isActive ? "text-white/74" : "text-[var(--color-muted)]"
                  }`}
                >
                  {cityInfo?.delivery ?? "Расчет при оформлении"}
                </span>
                <small
                  className={`mt-2 text-[12px] font-bold uppercase tracking-[0.04em] ${
                    isActive ? "text-white/54" : "text-[#64748b]"
                  }`}
                >
                  {cityInfo?.pickup ?? "Пункт выдачи уточним"}
                </small>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="flex min-w-0 items-center gap-2.5 max-[720px]:w-full max-[720px]:justify-between">
      <button
        className="inline-flex min-h-[30px] items-center gap-1.5 rounded-lg border-0 bg-transparent p-0 font-bold text-[#1d2023]"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <MapPin size={16} />
        <span>{city}</span>
      </button>
      <span className="whitespace-nowrap text-[13px] text-[var(--color-muted)] max-[720px]:overflow-hidden max-[720px]:text-ellipsis">
        {delivery.delivery}
      </span>

      {modal && typeof document !== "undefined"
        ? createPortal(modal, document.body)
        : null}
    </div>
  );
}
