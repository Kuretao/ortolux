import { partners } from "@/src/data/shop";
import { SectionHeading } from "@/src/components/SectionHeading/SectionHeading";

import styles from "./Partners.module.scss";

type PartnersProps = {
  compact?: boolean;
};

export function Partners({ compact = false }: PartnersProps) {
  const items = compact ? partners.slice(0, 4) : partners;

  return (
    <section className={compact ? "section" : styles.pageSection}>
      <div className="container">
        <SectionHeading
          title="Партнеры и интеграции"
          text="Логистика, поставщики и сервисы, под которые уже заложена архитектура магазина."
        />
        <div className={styles.grid}>
          {items.map((partner) => (
            <article className={styles.card} key={partner.id}>
              <span>{partner.type}</span>
              <h3>{partner.title}</h3>
              <p>{partner.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
