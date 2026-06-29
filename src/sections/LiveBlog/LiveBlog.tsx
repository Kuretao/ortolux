/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowRight, Clock, Play } from "lucide-react";

import { blogArticles } from "@/src/data/shop";

const videoUrl =
  "https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4";

const magazineCards = [
  {
    title: "Матрас без ошибки",
    label: "видео-гайд",
    href: "/blog/kak-vybrat-zhestkost-matrasa",
    text: "Показываем, как проверить жесткость, поддержку плеч и ощущение поясницы до покупки.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=86",
  },
  {
    title: "Спальня как номер в отеле",
    label: "интерьер",
    href: "/blog/kak-oformit-spalnyu",
    text: "Цвет, ткань, свет и пропорции мебели без дизайнерского шума.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=86",
  },
  {
    title: "Подушка решает шею",
    label: "подбор",
    href: "/blog/pochemu-vazhna-podushka",
    text: "Высота и форма под сон на боку, спине и животе.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=86",
  },
  {
    title: "160 или 180",
    label: "размеры",
    href: "/blog/matras-160x200-ili-180x200",
    text: "Когда запас по ширине реально нужен, а когда он съедает спальню.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=86",
  },
];

const briefs = [
  "Что спросить у менеджера перед оплатой",
  "Почему наматрасник лучше брать сразу",
  "Когда матрас в рулоне удобнее обычного",
];

export function LiveBlog() {
  const articles = blogArticles.slice(0, 4);

  return (
    <section className="section !py-12 max-[640px]:!py-8">
      <div className="container">
        <div className="home-neomorph-dark relative overflow-hidden rounded-[28px] bg-[#121417] p-3 text-white shadow-[0_22px_70px_rgb(29_32_35/0.12)] max-[640px]:rounded-[20px]" data-gsap="media-grid">
          <div className="flex snap-x gap-3 overflow-x-auto xl:grid xl:grid-cols-12 xl:overflow-visible xl:grid-rows-[repeat(4,minmax(0,210px))]">
            <Link
              className="group relative isolate grid min-h-[430px] min-w-[86vw] snap-start overflow-hidden rounded-[22px] p-5 md:min-w-[52vw] md:p-8 xl:col-span-7 xl:row-span-3 xl:col-start-1 xl:row-start-1 xl:min-h-0 xl:min-w-0 [&_*]:!text-white"
              href={magazineCards[0].href}
            >
              <video
                className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(0_0_0/0.82)_0%,rgb(0_0_0/0.46)_52%,rgb(0_0_0/0.12)_100%)]" />
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-1.5 text-xs font-black uppercase backdrop-blur">
                    <Play size={14} fill="currentColor" /> журнал о сне
                  </span>
                  <span className="rounded-full bg-white/14 px-3 py-1.5 text-xs font-black backdrop-blur">
                    02:40
                  </span>
                </div>

                <div className="max-w-[620px]">
                  <span className="text-xs font-black uppercase tracking-[0.08em] text-white/65">
                    {magazineCards[0].label}
                  </span>
                  <h2 className="mt-3 max-w-[620px] text-[clamp(31px,6vw,88px)] font-black leading-[0.94]">
                    Журнал, который продает через пользу
                  </h2>
                  <p className="mt-5 max-w-[520px] text-[17px] leading-[1.55] text-white/74">
                    {magazineCards[0].text}
                  </p>
                  <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-[12px] bg-[#ff7433] px-5 text-[15px] font-black !text-white">
                    Смотреть гид <ArrowRight size={17} />
                  </span>
                </div>
              </div>
            </Link>

            <article className="grid min-h-[240px] min-w-[72vw] snap-start content-between rounded-[22px] bg-[#ff7433] p-6 text-white md:min-w-[38vw] xl:col-span-2 xl:row-span-2 xl:col-start-8 xl:row-start-1 xl:min-h-0 xl:min-w-0 [&_*]:!text-white">
              <span className="text-xs font-black uppercase text-white/75">
                формат
              </span>
              <strong className="text-[42px] leading-[0.9] md:text-[52px]">
                5 мин
              </strong>
              <p className="m-0 text-sm leading-[1.45] text-white/78">
                короткие подборки, чтобы выбрать товар без долгих сравнений.
              </p>
            </article>

            <ImageStory
              card={magazineCards[1]}
              className="xl:col-span-3 xl:row-span-2 xl:col-start-10 xl:row-start-1 xl:min-h-0"
            />

            <article className="grid min-h-[220px] min-w-[72vw] snap-start content-between rounded-[22px] bg-white p-6 text-[var(--color-ink)] md:min-w-[38vw] xl:col-span-2 xl:row-span-1 xl:col-start-8 xl:row-start-3 xl:min-h-0 xl:min-w-0">
              <span className="text-xs font-black uppercase text-[#ff7433]">
                чеклист
              </span>
              <div className="grid gap-2">
                {briefs.map((brief) => (
                  <span className="text-sm font-black leading-[1.2]" key={brief}>
                    {brief}
                  </span>
                ))}
              </div>
            </article>

            <ImageStory
              card={magazineCards[2]}
              className="xl:col-span-3 xl:row-span-1 xl:col-start-10 xl:row-start-3 xl:min-h-0"
              compact
            />

            <ImageStory
              card={magazineCards[3]}
              className="xl:col-span-3 xl:row-span-1 xl:col-start-1 xl:row-start-4 xl:min-h-0"
              compact
            />

            {articles.map((article, index) => (
              <ArticleCard
                article={article}
                className={getArticlePosition(index)}
                key={article.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  className,
}: {
  article: (typeof blogArticles)[number];
  className: string;
}) {
  return (
    <Link
      className={`group grid min-h-[220px] min-w-[72vw] snap-start content-between gap-4 rounded-[20px] bg-white p-5 !text-[var(--color-ink)] transition duration-200 hover:-translate-y-1 md:min-w-[38vw] xl:min-h-0 xl:min-w-0 ${className}`}
      href={`/blog/${article.slug}`}
    >
      <span className="text-xs font-black uppercase !text-[#ff7433]">
        {article.category}
      </span>
      <strong className="text-[20px] font-black leading-[1.12] !text-[var(--color-ink)]">
        {article.title}
      </strong>
      <span className="inline-flex items-center gap-1 text-sm font-bold !text-[var(--color-muted)]">
        <Clock size={15} /> читать 4 мин
      </span>
    </Link>
  );
}

function getArticlePosition(index: number) {
  const positions = [
    "xl:col-span-2 xl:row-span-1 xl:col-start-4 xl:row-start-4",
    "xl:col-span-2 xl:row-span-1 xl:col-start-6 xl:row-start-4",
    "xl:col-span-2 xl:row-span-1 xl:col-start-8 xl:row-start-4",
    "xl:col-span-3 xl:row-span-1 xl:col-start-10 xl:row-start-4",
  ];

  return positions[index] ?? positions[positions.length - 1];
}

function ImageStory({
  card,
  className = "",
  compact = false,
}: {
  card: (typeof magazineCards)[number];
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      className={`group relative isolate grid min-h-[240px] min-w-[72vw] snap-start overflow-hidden rounded-[22px] p-5 text-white transition duration-200 hover:-translate-y-1 md:min-w-[38vw] xl:min-w-0 ${className} [&_*]:!text-white`}
      href={card.href}
    >
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-300 group-hover:scale-105"
        src={card.image}
        alt={card.title}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(0_0_0/0.08)_0%,rgb(0_0_0/0.78)_100%)]" />
      <div className="flex h-full flex-col justify-between">
        <span className="w-fit rounded-full bg-white/14 px-3 py-1.5 text-xs font-black uppercase backdrop-blur">
          {card.label}
        </span>
        <div>
          <h3 className={`m-0 font-black leading-[0.98] ${compact ? "text-[28px]" : "text-[36px]"}`}>
            {card.title}
          </h3>
          <p className="mt-3 max-w-[320px] text-sm leading-[1.45] text-white/72">
            {card.text}
          </p>
        </div>
      </div>
    </Link>
  );
}
