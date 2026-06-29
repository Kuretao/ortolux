/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Clock3, Search } from "lucide-react";

import { blogDetails, blogTags, getBlogDetails } from "@/src/data/blog";
import { blogArticles } from "@/src/data/shop";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Блог о матрасах и здоровом сне",
  description:
    "Полезные статьи OrtoLux: как выбрать жесткость матраса, какой размер купить, как ухаживать за матрасом и собрать спокойную спальню.",
};

export default function Page() {
  const [featured, ...restArticles] = blogArticles;
  const featuredDetails = getBlogDetails(featured.slug);

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <span>Журнал OrtoLux</span>
          <h1>Гиды по сну, матрасам и спокойной спальне</h1>
          <p>
            Собираем короткие и понятные материалы для покупателей: размер, жесткость,
            уход, подушки, основание и интерьер без лишней теории.
          </p>
          <div className={styles.searchBar}>
            <Search size={19} />
            <span>Жесткость, размер, уход, подушка</span>
          </div>
        </div>
        <Link className={styles.featured} href={`/blog/${featured.slug}`}>
          <img src={featuredDetails.image} alt={featured.title} />
          <div>
            <span>{featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <small>
              <CalendarDays size={15} /> {featured.publishedAt}
              <Clock3 size={15} /> {featured.readTime}
            </small>
          </div>
        </Link>
      </section>

      <section className={`container ${styles.tags}`} aria-label="Рубрики блога">
        {blogTags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </section>

      <section className={`container ${styles.layout}`}>
        <div className={styles.feed}>
          {restArticles.map((article, index) => {
            const details = getBlogDetails(article.slug);

            return (
              <Link
                className={index === 0 ? styles.wideCard : styles.card}
                href={`/blog/${article.slug}`}
                key={article.id}
              >
                <img src={details.image} alt={article.title} />
                <div>
                  <span>{article.category}</span>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <small>
                    <Clock3 size={15} /> {article.readTime}
                  </small>
                </div>
                <ArrowRight className={styles.cardArrow} size={22} />
              </Link>
            );
          })}
        </div>

        <aside className={styles.sidebar}>
          <article>
            <BookOpen size={24} />
            <h2>С чего начать</h2>
            <p>
              Если покупка матраса пока кажется шумной, начните с размера и жесткости.
              Эти два решения сильнее всего влияют на комфорт.
            </p>
            <Link href="/blog/kak-vybrat-zhestkost-matrasa">
              Читать гид <ArrowRight size={17} />
            </Link>
          </article>

          <article className={styles.catalogCta}>
            <span>после чтения</span>
            <h2>Подберите модель в каталоге</h2>
            <p>Фильтры по размеру, цене, жесткости, бренду и наличию уже готовы.</p>
            <Link href="/catalog">Перейти в каталог</Link>
          </article>
        </aside>
      </section>

      <section className={`container ${styles.digest}`}>
        <div>
          <span>подборка недели</span>
          <h2>Короткий маршрут к правильной покупке</h2>
        </div>
        <div className={styles.digestGrid}>
          {blogDetails.slice(0, 3).map((details, index) => (
            <article key={details.slug}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{details.accent}</h3>
              <p>{details.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
