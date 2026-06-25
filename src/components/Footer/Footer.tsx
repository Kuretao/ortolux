import Link from "next/link";
import { CreditCard, Headphones, PackageCheck, Truck } from "lucide-react";

const benefits = [
  { icon: Truck, title: "Доставка от 1 дня", text: "по городу и регионам" },
  { icon: PackageCheck, title: "Проверка при получении", text: "товар, размер и комплект" },
  { icon: CreditCard, title: "Удобная оплата", text: "картой, наличными или счетом" },
  { icon: Headphones, title: "Помощь с выбором", text: "подберем размер и жесткость" },
];

const columns = [
  {
    title: "Каталог",
    links: [
      { label: "Матрасы", href: "/catalog?category=mattresses" },
      { label: "Кровати", href: "/catalog?category=beds" },
      { label: "Подушки", href: "/catalog?category=pillows" },
      { label: "Аксессуары", href: "/catalog?category=accessories" },
      { label: "Акции", href: "/catalog?sale=true" },
    ],
  },
  {
    title: "Покупателям",
    links: [
      { label: "Доставка и подъем", href: "/delivery" },
      { label: "Оплата", href: "/payment" },
      { label: "Гарантия и возврат", href: "/guarantee" },
      { label: "Корзина", href: "/cart" },
      { label: "Личный кабинет", href: "/account" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "Партнеры", href: "/partners" },
      { label: "Журнал о сне", href: "/blog" },
      { label: "Публичная оферта", href: "/offer" },
      { label: "Политика конфиденциальности", href: "/privacy" },
      { label: "Персональные данные", href: "/personal-data" },
    ],
  },
];

const popularSearches = [
  { label: "Матрасы 160x200", href: "/catalog?category=mattresses&size=160x200" },
  { label: "Матрасы 180x200", href: "/catalog?category=mattresses&size=180x200" },
  { label: "Жесткие матрасы", href: "/catalog?category=mattresses&firmness=hard" },
  { label: "Кровати с подъемным механизмом", href: "/catalog?category=beds&lift=true" },
  { label: "Подушки Memory Foam", href: "/catalog?category=pillows&type=memory" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--color-line)] bg-[#f6f7f9] text-[var(--color-ink)]">
      <div className="container grid translate-y-[-28px] grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div
              className="flex min-h-24 items-center gap-3.5 bg-white p-[18px]"
              key={item.title}
            >
              <Icon className="shrink-0 text-[var(--color-accent)]" size={22} />
              <div className="grid gap-0.5">
                <strong className="text-[15px] leading-[1.25]">{item.title}</strong>
                <span className="text-[13px] leading-[1.3] text-[var(--color-muted)]">
                  {item.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container grid gap-10 pb-8 pt-4 md:grid-cols-2 lg:grid-cols-[minmax(280px,1.35fr)_repeat(3,minmax(0,1fr))]">
        <div className="grid content-start gap-4">
          <Link className="w-fit text-3xl font-black leading-none text-[var(--color-ink)]" href="/">
            <span className="text-[var(--color-accent)]">Orto</span>Lux
          </Link>
          <p className="m-0 max-w-[390px] leading-[1.55] text-[var(--color-muted)]">
            Интернет-магазин матрасов, кроватей и товаров для сна с подбором по
            размеру, жесткости, составу и бюджету.
          </p>
          <div className="grid w-full max-w-[340px] gap-1 rounded-[14px] border border-[var(--color-line)] bg-white p-4">
            <a className="text-2xl font-black leading-none text-[var(--color-ink)]" href="tel:+78005553535">
              8 800 555-35-35
            </a>
            <span className="text-sm text-[var(--color-muted)]">Ежедневно 9:00-21:00</span>
            <a className="text-sm text-[var(--color-muted)]" href="mailto:sales@ortolux-matras.ru">
              sales@ortolux-matras.ru
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <nav aria-label={column.title} className="grid content-start gap-[9px]" key={column.title}>
            <strong className="mb-1 text-[15px] font-black text-[var(--color-ink)]">
              {column.title}
            </strong>
            {column.links.map((item) => (
              <Link
                className="w-fit text-sm leading-[1.35] text-[#4b5563] transition duration-200 hover:text-[var(--color-accent)]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>

      <div className="container grid gap-3 border-t border-[var(--color-line)] py-[22px] md:grid-cols-[130px_minmax(0,1fr)]">
        <span className="text-[13px] font-black uppercase text-[var(--color-muted)]">
          Часто ищут
        </span>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((item) => (
            <Link
              className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-[13px] text-[#4b5563] transition duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container flex flex-wrap justify-between gap-2.5 border-t border-[var(--color-line)] pb-7 pt-[18px] text-[13px] text-[var(--color-muted)]">
        <span>© 2026 OrtoLux</span>
        <span>Цены и наличие на сайте не являются публичной офертой.</span>
      </div>
    </footer>
  );
}
