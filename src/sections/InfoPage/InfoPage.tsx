import Link from "next/link";

import styles from "./InfoPage.module.scss";

type InfoPageVariant = "delivery" | "payment" | "guarantee";

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant?: InfoPageVariant;
  items: Array<{
    title: string;
    text: string;
  }>;
};

const heroPanels: Record<
  InfoPageVariant,
  {
    title: string;
    text: string;
    facts: Array<{ label: string; value: string }>;
  }
> = {
  delivery: {
    title: "Маршрут заказа",
    text: "от склада до квартиры с подъемом и согласованием времени",
    facts: [
      { label: "окно", value: "2 часа" },
      { label: "город", value: "от 0 ₽" },
      { label: "регион", value: "ТК" },
    ],
  },
  payment: {
    title: "Оплата без трения",
    text: "карта, наличные, счет для компании и подтверждение перед доставкой",
    facts: [
      { label: "карта", value: "online" },
      { label: "юрлица", value: "счет" },
      { label: "чек", value: "email" },
    ],
  },
  guarantee: {
    title: "Гарантийный контур",
    text: "проверка товара, документы производителя и спокойный обмен",
    facts: [
      { label: "осмотр", value: "при получении" },
      { label: "уход", value: "памятка" },
      { label: "обмен", value: "по правилам" },
    ],
  },
};

export function InfoPage({
  eyebrow,
  title,
  description,
  variant = "delivery",
  items,
}: InfoPageProps) {
  const panel = heroPanels[variant];

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.hero} ${styles[variant]}`}>
        <div>
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.actions}>
            <Link className="primary-link" href="/catalog">
              Перейти в каталог
            </Link>
            <Link className="secondary-link" href="/blog">
              Полезные статьи
            </Link>
          </div>
        </div>
        <aside className={styles.heroPanel}>
          <strong>{panel.title}</strong>
          <span>{panel.text}</span>
          <div className={styles.panelFacts}>
            {panel.facts.map((fact) => (
              <div key={fact.label}>
                <small>{fact.label}</small>
                <b>{fact.value}</b>
              </div>
            ))}
          </div>
        </aside>
      </section>
      <section className={`container ${styles.grid}`}>
        {items.map((item, index) => (
          <article className={styles.card} data-card={index + 1} key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
