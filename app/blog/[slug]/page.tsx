/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3 } from "lucide-react";

import { getBlogDetails } from "@/src/data/blog";
import { blogArticles } from "@/src/data/shop";

import styles from "./page.module.scss";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Статья не найдена" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function Page({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const details = getBlogDetails(article.slug);
  const related = blogArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="page-main" id="main-content">
      <article className={`container ${styles.article}`}>
        <header className={styles.hero}>
          <img src={details.image} alt={article.title} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroCopy}>
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={17} /> Все статьи
            </Link>
            <span>{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className={styles.meta}>
              <span>
                <CalendarDays size={16} /> {article.publishedAt}
              </span>
              <span>
                <Clock3 size={16} /> {article.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className={styles.layout}>
          <div className={styles.content}>
            <section className={styles.leadCard}>
              <span>{details.accent}</span>
              <p>{details.summary}</p>
            </section>

            {details.sections.map((section) => (
              <section className={styles.textBlock} key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <section className={styles.checklist}>
              <h2>Чеклист перед покупкой</h2>
              <div>
                {details.checklist.map((item) => (
                  <p key={item}>
                    <Check size={18} /> {item}
                  </p>
                ))}
              </div>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <article className={styles.takeaways}>
              <span>коротко</span>
              <h2>Главные мысли</h2>
              {details.takeaways.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </article>

            <article className={styles.catalogCta}>
              <span>готовы выбрать</span>
              <h2>Сравните модели в каталоге</h2>
              <p>Фильтры помогут быстро отобрать размер, жесткость и бюджет.</p>
              <Link href="/catalog">
                В каталог <ArrowRight size={17} />
              </Link>
            </article>
          </aside>
        </div>
      </article>

      <section className={`container ${styles.related}`}>
        <div className={styles.relatedHeader}>
          <span>читать дальше</span>
          <h2>Еще материалы по теме сна</h2>
        </div>
        <div className={styles.relatedGrid}>
          {related.map((item) => {
            const itemDetails = getBlogDetails(item.slug);

            return (
              <Link href={`/blog/${item.slug}`} key={item.id}>
                <img src={itemDetails.image} alt={item.title} />
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
