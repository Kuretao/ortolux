/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Матрасы",
    subtitle: "Ортопедические, детские и в рулоне",
    href: "/catalog?category=mattresses",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=88",
    layout:
      "lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-3 lg:min-h-0",
    titleClass: "text-4xl md:text-5xl",
  },
  {
    title: "Кровати",
    subtitle: "Мягкие, с основанием и подъемным механизмом",
    href: "/catalog?category=beds",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=88",
    layout: "lg:col-start-5 lg:col-span-4 lg:row-start-1 lg:row-span-2 lg:min-h-0",
    titleClass: "text-3xl md:text-4xl",
  },
  {
    title: "Диваны",
    subtitle: "Для гостиной и ежедневного сна",
    href: "/catalog?q=диван",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=88",
    layout: "lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-span-2 lg:min-h-0",
    titleClass: "text-3xl md:text-4xl",
  },
  {
    title: "Подушки",
    subtitle: "Анатомические и классические",
    href: "/catalog?category=pillows",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=88",
    layout: "lg:col-start-5 lg:col-span-3 lg:row-start-3 lg:row-span-1",
    titleClass: "text-2xl",
  },
  {
    title: "Текстиль",
    subtitle: "Чехлы, ткани, комплекты",
    href: "/catalog?q=текстиль",
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=700&q=88",
    layout: "lg:col-start-8 lg:col-span-3 lg:row-start-3 lg:row-span-1",
    titleClass: "text-2xl",
  },
  {
    title: "Кресла",
    subtitle: "Мягкие акценты для дома",
    href: "/catalog?q=кресло",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=700&q=88",
    layout: "lg:col-start-11 lg:col-span-2 lg:row-start-3 lg:row-span-1",
    titleClass: "text-xl",
  },
  {
    title: "Мебель",
    subtitle: "Комоды, тумбы, хранение",
    href: "/catalog?q=мебель",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=88",
    layout: "lg:col-start-1 lg:col-span-4 lg:row-start-4 lg:row-span-1",
    titleClass: "text-2xl",
  },
  {
    title: "Аксессуары",
    subtitle: "Наматрасники и уход",
    href: "/catalog?category=accessories",
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=800&q=88",
    layout: "lg:col-start-5 lg:col-span-4 lg:row-start-4 lg:row-span-1",
    titleClass: "text-2xl",
  },
  {
    title: "Основания",
    subtitle: "Для матрасов и кроватей",
    href: "/catalog?q=основание",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=88",
    layout: "lg:col-start-9 lg:col-span-4 lg:row-start-4 lg:row-span-1",
    titleClass: "text-2xl",
  },
];

export function HomeCategories() {
  return (
    <section className="section !pb-10 !pt-8 max-[640px]:!pb-6 max-[640px]:!pt-6">
      <div className="container home-neomorph rounded-[28px] bg-[#f4f5f7] p-3 max-[640px]:rounded-[20px]" data-gsap="media-grid">
        <div className="mb-3 flex items-center justify-between gap-4 px-2 pt-1">
          <span className="text-xs font-black uppercase tracking-[0.08em] text-[#ff7433]">
            разделы каталога
          </span>
          <span className="hidden text-sm font-semibold text-[var(--color-muted)] sm:block">
            основные категории товаров для спальни
          </span>
        </div>
        <div className="flex snap-x gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-12 lg:overflow-visible lg:pb-0 lg:[grid-template-rows:repeat(4,170px)] xl:[grid-template-rows:repeat(4,190px)]">
          {categories.map((category) => (
            <Link
              className={`group relative isolate flex min-h-[210px] min-w-[78vw] snap-start overflow-hidden rounded-[18px] border border-white/30 bg-neutral-950 p-5 text-white shadow-[0_12px_34px_rgb(15_23_42/0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgb(15_23_42/0.14)] md:min-w-[42vw] lg:min-h-0 lg:min-w-0 lg:p-6 ${category.layout}`}
              href={category.href}
              key={category.title}
            >
              <img
                className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                src={category.image}
                alt={category.title}
              />
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(0_0_0/0.1)_0%,rgb(0_0_0/0.28)_42%,rgb(0_0_0/0.78)_100%)]" />
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(0_0_0/0.55)_0%,rgb(0_0_0/0.18)_48%,rgb(0_0_0/0)_100%)]" />

              <div className="flex h-full w-full flex-col justify-between gap-5">
                <div>
                  <h2
                    className={`max-w-[360px] font-black leading-[0.98] tracking-normal !text-white max-[640px]:!text-[28px] ${category.titleClass}`}
                  >
                    {category.title}
                  </h2>
                  <p className="mt-3 max-w-[320px] text-sm leading-5 !text-white/75">
                    {category.subtitle}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-ink)] transition duration-200 group-hover:translate-x-1">
                  <ChevronRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
