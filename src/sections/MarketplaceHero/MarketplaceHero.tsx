"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { commerceBanners } from "@/src/data/shop";

const heroVideoUrl =
  "https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4";

export function MarketplaceHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [adIndex, setAdIndex] = useState(0);
  const activeBanner = commerceBanners[activeIndex];
  const activeAd = commerceBanners[(adIndex + 1) % commerceBanners.length];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % commerceBanners.length);
      setAdIndex((index) => (index + 1) % commerceBanners.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="pt-3.5">
      <div
        className="container home-neomorph grid gap-4 rounded-[28px] bg-[#f4f5f7] p-3 lg:grid-cols-[minmax(0,1fr)_430px]"
        data-gsap="media-grid"
      >
        <div className="relative min-h-[430px] overflow-hidden rounded-[20px] border border-black/5 bg-[#f0f1f3] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.5),inset_-2px_-2px_5px_rgba(0,0,0,0.15)] transition duration-200 hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.4),inset_-2px_-2px_5px_rgba(0,0,0,0.2)] md:min-h-[590px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_18%,rgb(255_116_51/0.16),transparent_28%),linear-gradient(90deg,rgb(0_0_0/0.68)_0%,rgb(0_0_0/0.5)_28%,rgb(0_0_0/0.24)_50%,rgb(0_0_0/0.04)_72%,transparent_88%)]" />
          <div className="relative z-[1] flex min-h-[430px] w-full max-w-[650px] flex-col justify-center px-5 py-7 text-white md:min-h-[590px] md:p-[62px] [&_h1]:!text-white [&_p]:!text-white/82">
            <span className="inline-flex w-fit rounded-lg border border-white/25 bg-white/12 px-2 py-1 text-xs font-bold uppercase text-white/80 backdrop-blur">
              {activeBanner.label}
            </span>
            <h1 className="my-[18px] mb-3.5 text-[clamp(48px,6vw,82px)] leading-[0.98] !text-white">
              {activeBanner.title}
            </h1>
            <p className="mb-7 mt-0 max-w-[560px] text-xl leading-[1.55] !text-white/82">
              {activeBanner.text}
            </p>
            <Link
              className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-[var(--radius-md)] border border-white/40 bg-white/14 px-[18px] text-[15px] font-bold !text-white shadow-[0_12px_28px_rgb(0_0_0/0.16)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/22"
              href={activeBanner.href}
            >
              Смотреть товары <ArrowRight className="text-white" size={18} />
            </Link>
          </div>
          <div className="absolute bottom-[18px] right-[22px] z-[2] flex gap-2">
            {commerceBanners.map((banner, index) => (
              <button
                className={`h-2 rounded-full border-0 p-0 transition duration-200 ${index === activeIndex ? "w-7 bg-white" : "w-2 bg-white/45"}`}
                key={banner.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Показать баннер ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <Link
          className="group relative grid min-h-[430px] items-end overflow-hidden rounded-[20px] border border-black/5 bg-[#f0f1f3] text-white shadow-[inset_2px_2px_5px_rgba(255,255,255,0.5),inset_-2px_-2px_5px_rgba(0,0,0,0.15)] transition duration-200 hover:shadow-[inset_1px_1px_8px_rgba(255,255,255,0.6),inset_-1px_-1px_8px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.1)] md:min-h-[590px] [&_h2]:!text-white [&_p]:!text-white/75 [&_span]:!text-white/70"
          href={activeAd.href}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={activeAd.image}
            alt={activeAd.title}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgb(0_0_0/0.68))]" />
          <div className="relative z-[1] p-8 transition duration-200 group-hover:-translate-y-0.5">
            <span className="text-xs font-extrabold uppercase text-white/70">
              реклама
            </span>
            <h2 className="my-3 mb-2.5 max-w-[340px] text-[42px] leading-none !text-white">
              {activeAd.title}
            </h2>
            <p className="m-0 leading-[1.45] !text-white/75">{activeAd.text}</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
