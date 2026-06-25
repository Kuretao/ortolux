import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

  return (
    <main className="page-main" id="main-content">
      <article className={`container ${styles.article}`}>
        <span>{article.category}</span>
        <h1>{article.title}</h1>
        <p className={styles.lead}>{article.excerpt}</p>
        <div className={styles.body}>
          <p>
            При выборе матраса сначала определите размер спального места,
            привычную позу сна и желаемую жесткость. Для большинства покупателей
            подходит средняя жесткость, но при высокой нагрузке часто выбирают
            более плотные модели.
          </p>
          <p>
            В каталоге важно сравнивать не только цену, но и состав: пружинный
            блок, кокосовую койру, memory foam, латексированные слои, высоту и
            допустимую нагрузку на место.
          </p>
          <p>
            Если сомневаетесь между двумя размерами, выбирайте больший, когда
            позволяет кровать и планировка спальни. Запас по ширине почти всегда
            повышает комфорт сна.
          </p>
        </div>
      </article>
    </main>
  );
}
