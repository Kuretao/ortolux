import styles from "./LegalPage.module.scss";

type LegalPageProps = {
  title: string;
  description: string;
  sections: Array<{
    title: string;
    text: string;
  }>;
};

export function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <main className="page-main" id="main-content">
      <article className={`container ${styles.article}`}>
        <span>документы</span>
        <h1>{title}</h1>
        <p className={styles.lead}>{description}</p>
        <div className={styles.content}>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
