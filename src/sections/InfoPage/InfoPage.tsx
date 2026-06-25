import styles from "./InfoPage.module.scss";

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{
    title: string;
    text: string;
  }>;
};

export function InfoPage({ eyebrow, title, description, items }: InfoPageProps) {
  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.hero}`}>
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      <section className={`container ${styles.grid}`}>
        {items.map((item) => (
          <article className={styles.card} key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
