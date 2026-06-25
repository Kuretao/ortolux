import { CreditCard, RotateCcw, ShieldCheck, Truck } from "lucide-react";

import styles from "./TrustBar.module.scss";

const items = [
  {
    icon: Truck,
    title: "Доставка по городу",
    text: "Подъем, занос и согласование времени.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия производителя",
    text: "Документы и рекомендации по уходу.",
  },
  {
    icon: CreditCard,
    title: "Оплата удобным способом",
    text: "Наличные, карта или онлайн-счет.",
  },
  {
    icon: RotateCcw,
    title: "Помощь с обменом",
    text: "Подскажем, если размер или жесткость не подошли.",
  },
];

export function TrustBar() {
  return (
    <section className="section" id="delivery">
      <div className={`container ${styles.grid}`}>
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article className={styles.item} key={item.title}>
              <Icon size={24} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
