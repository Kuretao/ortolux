"use client";

import Link from "next/link";
import {
  BedDouble,
  ChevronRight,
  Heart,
  House,
  Menu,
  Search,
  ShoppingCart,
  Sofa,
  UserRound,
} from "lucide-react";
import { useAtomValue } from "jotai";
import { useState } from "react";

import { CitySelector } from "@/src/components/CitySelector/CitySelector";
import { cartCountAtom } from "@/src/store/cart";

const navItems = [
  { label: "Матрасы", href: "/catalog?category=mattresses" },
  { label: "Кровати", href: "/catalog?category=beds" },
  { label: "Подушки", href: "/catalog?category=pillows" },
  { label: "Аксессуары", href: "/catalog?category=accessories" },
  { label: "Акции", href: "/catalog?sale=true" },
  { label: "Доставка", href: "/delivery" },
];

const catalogGroups = [
  {
    icon: BedDouble,
    title: "Матрасы",
    description:
      "Ортопедические, детские, рулонные и модели под разные привычки сна.",
    href: "/catalog?category=mattresses",
    sections: [
      {
        title: "По размеру",
        items: [
          { label: "160x200", href: "/catalog?category=mattresses&size=160x200" },
          { label: "180x200", href: "/catalog?category=mattresses&size=180x200" },
          { label: "90x200", href: "/catalog?category=mattresses&size=90x200" },
          { label: "80x160 детские", href: "/catalog?category=mattresses&size=80x160" },
        ],
      },
      {
        title: "По конструкции",
        items: [
          { label: "Пружинные", href: "/catalog?category=mattresses&type=spring" },
          { label: "Беспружинные", href: "/catalog?category=mattresses&type=foam" },
          { label: "В рулоне", href: "/catalog?category=mattresses&type=roll" },
          { label: "Двусторонние", href: "/catalog?category=mattresses&type=duo" },
        ],
      },
      {
        title: "По жесткости",
        items: [
          { label: "Мягкие", href: "/catalog?category=mattresses&firmness=soft" },
          { label: "Средние", href: "/catalog?category=mattresses&firmness=medium" },
          { label: "Жесткие", href: "/catalog?category=mattresses&firmness=hard" },
          { label: "Разносторонние", href: "/catalog?category=mattresses&firmness=duo" },
        ],
      },
      {
        title: "Подборки",
        items: [
          { label: "Хиты продаж", href: "/catalog?category=mattresses&sort=popular" },
          { label: "Со скидкой", href: "/catalog?category=mattresses&sale=true" },
          { label: "Новинки", href: "/catalog?category=mattresses&sort=new" },
          { label: "Для дачи", href: "/catalog?category=mattresses&purpose=dacha" },
        ],
      },
    ],
    promo: {
      title: "Матрас + основание",
      text: "Комплект для спальни с выгодой и одной доставкой.",
      href: "/catalog?set=bedroom",
    },
  },
  {
    icon: House,
    title: "Кровати и основания",
    description:
      "Кровати, ламели, подъемные механизмы и готовые комплекты для спальни.",
    href: "/catalog?category=beds",
    sections: [
      {
        title: "Кровати",
        items: [
          { label: "160x200", href: "/catalog?category=beds&size=160x200" },
          { label: "180x200", href: "/catalog?category=beds&size=180x200" },
          { label: "Мягкие кровати", href: "/catalog?category=beds&type=soft" },
          { label: "Для детей", href: "/catalog?category=beds&type=kids" },
        ],
      },
      {
        title: "Основания",
        items: [
          { label: "Ортопедические", href: "/catalog?category=bases&type=orthopedic" },
          { label: "С подъемным механизмом", href: "/catalog?category=beds&lift=true" },
          { label: "Ламели", href: "/catalog?category=bases&type=lamels" },
          { label: "Короба для хранения", href: "/catalog?category=beds&storage=true" },
        ],
      },
      {
        title: "Готовые решения",
        items: [
          { label: "Комплект для спальни", href: "/catalog?set=bedroom" },
          { label: "Кровать + матрас", href: "/catalog?set=bed-mattress" },
          { label: "Под заказ", href: "/catalog?category=beds&custom=true" },
          { label: "Премиум", href: "/catalog?category=beds&segment=premium" },
        ],
      },
    ],
    promo: {
      title: "Кровать с подъемным механизмом",
      text: "Больше места для хранения без визуального шума.",
      href: "/catalog?category=beds&lift=true",
    },
  },
  {
    icon: Sofa,
    title: "Подушки и аксессуары",
    description:
      "Подушки, наматрасники, защитные чехлы, текстиль и уход за спальней.",
    href: "/catalog?category=pillows",
    sections: [
      {
        title: "Подушки",
        items: [
          { label: "Анатомические", href: "/catalog?category=pillows&type=anatomic" },
          { label: "Memory Foam", href: "/catalog?category=pillows&type=memory" },
          { label: "Для сна на боку", href: "/catalog?category=pillows&pose=side" },
          { label: "Для детей", href: "/catalog?category=pillows&type=kids" },
        ],
      },
      {
        title: "Защита матраса",
        items: [
          { label: "Наматрасники", href: "/catalog?category=accessories&type=cover" },
          { label: "Чехлы", href: "/catalog?category=accessories&type=case" },
          { label: "Влагозащита", href: "/catalog?category=accessories&type=waterproof" },
          { label: "Уход", href: "/catalog?category=accessories&type=care" },
        ],
      },
      {
        title: "Текстиль",
        items: [
          { label: "Одеяла", href: "/catalog?category=textile&type=blanket" },
          { label: "Постельное белье", href: "/catalog?category=textile&type=linen" },
          { label: "Комплекты", href: "/catalog?category=textile&type=set" },
          { label: "Подарочные сертификаты", href: "/catalog?gift=true" },
        ],
      },
    ],
    promo: {
      title: "Защитный наматрасник",
      text: "Продлевает срок службы матраса и упрощает уход.",
      href: "/catalog?category=accessories&type=cover",
    },
  },
];

export function Header() {
  const cartCount = useAtomValue(cartCountAtom);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const activeGroup = catalogGroups[activeGroupIndex];

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-white/95 shadow-[var(--shadow-soft)] backdrop-blur transition duration-200 hover:shadow-[var(--shadow-md)]">
      <div className="border-b border-[var(--color-line)] bg-[linear-gradient(180deg,#fafbfc_0%,#f3f4f6_100%)]">
        <div className="container grid min-h-9 grid-cols-[minmax(260px,1fr)_auto_auto] items-center gap-[18px] max-[980px]:grid-cols-[1fr_auto]">
          <CitySelector />
          <nav className="flex gap-[18px] max-[980px]:hidden" aria-label="Служебное меню">
            <Link className="text-[13px] font-medium text-[#6b7280] transition duration-200 hover:text-[var(--color-ink)]" href="/delivery">
              Доставка
            </Link>
            <Link className="text-[13px] font-medium text-[#6b7280] transition duration-200 hover:text-[var(--color-ink)]" href="/payment">
              Оплата
            </Link>
            <Link className="text-[13px] font-medium text-[#6b7280] transition duration-200 hover:text-[var(--color-ink)]" href="/guarantee">
              Гарантия
            </Link>
            <Link className="text-[13px] font-medium text-[#6b7280] transition duration-200 hover:text-[var(--color-ink)]" href="/partners">
              Партнеры
            </Link>
          </nav>
          <a className="text-[13px] font-medium text-[#6b7280] transition duration-200 hover:text-[var(--color-ink)]" href="tel:+78005553535">
            8 800 555-35-35
          </a>
        </div>
      </div>

      <div className="container grid min-h-[70px] grid-cols-[170px_auto_minmax(360px,1fr)_auto] items-center gap-3.5 max-[980px]:grid-cols-[140px_auto_1fr] max-[720px]:grid-cols-[1fr_auto] max-[720px]:py-2.5">
        <Link className="text-[26px] font-black text-[var(--color-ink)] transition duration-200 hover:text-[var(--color-primary-dark)]" href="/">
          <span className="text-[var(--color-accent)]">Orto</span>Lux
        </Link>

        <button
          className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border-0 px-[18px] font-bold shadow-[var(--shadow-md)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] active:translate-y-0 max-[720px]:order-3 ${
            isCatalogOpen
              ? "bg-white text-[var(--color-ink)] shadow-[inset_0_0_0_1px_var(--color-line),var(--shadow-md)]"
              : "bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--color-primary-dark)_100%)] text-white"
          }`}
          type="button"
          aria-expanded={isCatalogOpen}
          aria-controls="site-catalog-menu"
          onClick={() => setIsCatalogOpen((value) => !value)}
        >
          <Menu size={20} />
          Каталог
        </button>

        <div className="grid min-h-11 grid-cols-[auto_1fr_auto] items-center overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-soft)] text-[var(--color-muted)] shadow-[var(--shadow-soft)] transition duration-200 focus-within:border-[var(--color-accent)] focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgb(59_130_246/0.1)] max-[720px]:order-4 max-[720px]:col-span-full">
          <Search className="ml-3.5" size={18} />
          <input
            className="min-w-0 border-0 bg-transparent px-3 text-[15px] outline-0 placeholder:text-[var(--color-muted)]"
            placeholder="Поиск по товарам"
            aria-label="Поиск"
          />
          <button className="min-h-11 border-0 bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--color-primary-dark)_100%)] px-[18px] font-bold text-white transition duration-200 hover:bg-[var(--color-primary-dark)]" type="button">
            Найти
          </button>
        </div>

        <div className="flex items-center gap-2.5 max-[980px]:col-span-full max-[980px]:justify-end max-[720px]:col-auto">
          <button className="icon-button" type="button" aria-label="Избранное">
            <Heart size={20} />
          </button>
          <Link className="icon-button" href="/account" aria-label="Профиль">
            <UserRound size={20} />
          </Link>
          <Link
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-soft)] text-[var(--color-ink)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-white hover:shadow-[var(--shadow-md)]"
            href="/cart"
            aria-label="Корзина"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 ? (
              <span className="absolute -right-2 -top-2 inline-flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-rose)_0%,#dc2626_100%)] text-[11px] font-extrabold text-white shadow-[0_2px_6px_rgb(239_68_68/0.3)]">
                {cartCount}
              </span>
            ) : null}
          </Link>
        </div>
      </div>

      <nav className="container flex min-h-10 items-center gap-[22px] overflow-x-auto whitespace-nowrap text-sm font-semibold text-[#6b7280]" aria-label="Категории товаров">
        {navItems.map((item) => (
          <Link
            className="relative transition duration-200 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 after:bg-[var(--color-accent)] after:transition-transform after:duration-200 hover:text-[var(--color-ink)] hover:after:scale-x-100"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {isCatalogOpen ? (
        <div
          className="absolute left-0 right-0 top-full z-[60] animate-[slideDown_0.16s_ease] border-y border-[var(--color-line)] bg-white shadow-[0_22px_52px_rgb(15_23_42/0.16)]"
          id="site-catalog-menu"
        >
          <div className="container grid min-h-[540px] grid-cols-[286px_minmax(0,1fr)] bg-white text-[var(--color-ink)] max-[720px]:grid-cols-1">
            <aside className="overflow-y-auto border-r border-[var(--color-line)] bg-[#f6f7f9] p-3 max-[720px]:flex max-[720px]:gap-2.5 max-[720px]:overflow-x-auto max-[720px]:border-b max-[720px]:border-r-0 max-[720px]:p-3.5">
              {catalogGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                  <button
                    className={`grid min-h-11 w-full grid-cols-[auto_1fr_auto] items-center gap-2.5 rounded-lg border-0 px-3 text-left text-[15px] font-bold transition duration-200 hover:bg-white hover:shadow-[0_1px_0_rgb(15_23_42/0.04)] max-[720px]:min-w-60 ${
                      index === activeGroupIndex
                        ? "bg-white shadow-[inset_3px_0_0_var(--color-accent),0_1px_0_rgb(15_23_42/0.04)]"
                        : "bg-transparent"
                    }`}
                    type="button"
                    key={group.title}
                    onClick={() => setActiveGroupIndex(index)}
                  >
                    <Icon size={20} />
                    <span>{group.title}</span>
                    <ChevronRight
                      className={index === activeGroupIndex ? "text-[var(--color-accent)]" : ""}
                      size={18}
                    />
                  </button>
                );
              })}
            </aside>

            <div className="bg-white px-3.5 py-5 md:p-8">
              <div className="mb-6 grid items-start gap-6 border-b border-[var(--color-line)] pb-5 md:grid-cols-[minmax(0,1fr)_auto]">
                <div>
                  <span className="text-xs font-black uppercase text-[#6b7280]">
                    Раздел каталога
                  </span>
                  <h2 className="my-1 mb-2 text-3xl leading-[1.05] text-[var(--color-ink)]">
                    {activeGroup.title}
                  </h2>
                  <p className="m-0 max-w-[560px] leading-[1.45] text-[var(--color-muted)]">
                    {activeGroup.description}
                  </p>
                </div>
                <Link
                  className="inline-flex min-h-[38px] w-fit items-center gap-1.5 whitespace-nowrap rounded-lg border border-[var(--color-line)] bg-[#f9fafb] px-3.5 font-extrabold transition duration-200 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-soft)]"
                  href={activeGroup.href}
                >
                  Весь раздел <ChevronRight size={18} />
                </Link>
              </div>

              <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,1fr)_280px]">
                <div className="grid gap-x-11 gap-y-7 md:grid-cols-2 xl:grid-cols-3">
                  {activeGroup.sections.map((section) => (
                    <section className="min-w-0" key={section.title}>
                      <h3 className="mb-3 text-[15px] font-black leading-[1.2] text-[var(--color-ink)]">
                        {section.title}
                      </h3>
                      <div className="grid content-start gap-2">
                        {section.items.map((item) => (
                          <Link
                            className="relative w-fit text-sm leading-[1.28] text-[#4b5563] transition duration-200 before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-0 before:bg-[var(--color-accent)] before:transition-[width] before:duration-200 hover:text-[var(--color-ink)] hover:before:w-full"
                            href={item.href}
                            key={item.label}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <aside className="grid gap-3">
                  <Link
                    className="grid min-h-[186px] content-end gap-2 overflow-hidden rounded-[14px] bg-[radial-gradient(circle_at_86%_16%,rgb(59_130_246/0.3),transparent_34%),linear-gradient(135deg,#17191c_0%,#2b3036_100%)] p-5 text-white"
                    href={activeGroup.promo.href}
                  >
                    <span className="text-xs font-black uppercase text-white/65">
                      Рекомендуем
                    </span>
                    <strong className="max-w-[220px] text-[23px] leading-[1.05]">
                      {activeGroup.promo.title}
                    </strong>
                    <small className="max-w-[220px] leading-[1.35] text-white/70">
                      {activeGroup.promo.text}
                    </small>
                  </Link>

                  <div className="grid gap-1 rounded-[14px] border border-[var(--color-line)] bg-[#f9fafb] p-4">
                    <span className="mb-1.5 text-xs font-black uppercase text-[#6b7280]">
                      Покупателям
                    </span>
                    <Link className="rounded-lg px-2.5 py-2 text-sm font-bold text-[#374151] hover:bg-white hover:text-[var(--color-ink)]" href="/delivery">
                      Доставка и подъем
                    </Link>
                    <Link className="rounded-lg px-2.5 py-2 text-sm font-bold text-[#374151] hover:bg-white hover:text-[var(--color-ink)]" href="/guarantee">
                      Гарантия и возврат
                    </Link>
                    <Link className="rounded-lg px-2.5 py-2 text-sm font-bold text-[#374151] hover:bg-white hover:text-[var(--color-ink)]" href="/payment">
                      Оплата заказа
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
