/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const heroVideo =
  "https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4";

const processVideo =
  "https://videos.pexels.com/video-files/6587652/6587652-uhd_2560_1440_25fps.mp4";

const textileVideo =
  "https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4";

const qualityVideo =
  "https://videos.pexels.com/video-files/5998605/5998605-uhd_2560_1440_30fps.mp4";

const media = {
  fabric:
    "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=88",
  sofa:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=88",
  doctor:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=88",
  delivery:
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1100&q=88",
};

const materialSwatches = ["#f0eee9", "#c8d3dc", "#2f3741"];
const lowerStats = [
  { value: "18", label: "типов наполнителей" },
  { value: "0 ₽", label: "подбор размера" },
  { value: "24/7", label: "заказ онлайн" },
];

export function BrandVideoStats() {
  return (
    <section className="section !pb-20 !pt-12">
      <div className="container">
        <div className="home-neomorph grid gap-2 rounded-[26px] bg-[#f4f5f7] p-3 md:gap-3 xl:grid-cols-12 xl:grid-rows-[repeat(9,minmax(0,118px))]" data-gsap="media-grid">
          <article className="relative isolate grid min-h-[430px] overflow-hidden rounded-[18px] p-6 text-white md:p-9 xl:col-span-8 xl:row-span-3 xl:min-h-0 [&_*]:!text-white">
            <BackgroundVideo src={heroVideo} opacity="opacity-80" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(0_0_0/0.54)_0%,rgb(0_0_0/0.34)_48%,rgb(0_0_0/0.18)_100%)]" />
            <div className="absolute left-6 top-6 hidden rounded-[16px] bg-white/16 px-4 py-3 text-left backdrop-blur-md md:block">
              <span className="block text-[11px] font-black uppercase tracking-[0.08em] text-white/62">
                честная карточка товара
              </span>
              <strong className="mt-1 block text-[22px] leading-none">
                фото / видео / состав
              </strong>
            </div>
            <div className="grid h-full place-items-center text-center">
              <div className="max-w-[850px]">
                <div className="mb-14 text-sm font-black uppercase tracking-[0.16em] text-white/78">
                  OrtoLux
                </div>
                <h2 className="m-0 text-[clamp(38px,5vw,70px)] font-black leading-[1.02]">
                  Собираем спальню, в которой легко высыпаться.
                </h2>
                <Link
                  className="mt-16 inline-flex min-h-10 items-center rounded-[9px] bg-[#ff7433] px-6 text-[14px] font-black"
                  href="/about"
                >
                  Как мы подбираем товары
                </Link>
              </div>
            </div>
          </article>

          <article className="relative grid min-h-[260px] content-between overflow-hidden rounded-[18px] bg-[#ff7433] p-6 text-white md:p-8 xl:col-span-4 xl:row-span-3 xl:min-h-0 [&_*]:!text-white">
            <span
              className="absolute right-[-72px] top-[-72px] h-48 w-48 rounded-full border-[34px] border-white/12"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-7 right-8 h-2 w-28 rounded-full bg-white/22"
              aria-hidden="true"
            />
            <strong className="max-w-[330px] text-[clamp(52px,6vw,76px)] font-black leading-[0.9]">
              10 мин
            </strong>
            <span className="max-w-[190px] text-[15px] font-medium leading-[1.25] text-white/88">
              обычно хватает, чтобы подобрать базовый комплект для спальни
            </span>
          </article>

          <VideoTile
            className="min-h-[220px] xl:col-span-2 xl:row-span-2 xl:col-start-1 xl:row-start-4 xl:min-h-0"
            label="внутри"
            poster={media.fabric}
            src={processVideo}
          />

          <StatTile
            className="min-h-[220px] xl:col-span-3 xl:row-span-2 xl:col-start-3 xl:row-start-4 xl:min-h-0"
            number="4000+"
            title="комплектов"
            text="собрали по размеру, жесткости и бюджету"
          />

          <ImageTile
            className="min-h-[220px] xl:col-span-3 xl:row-span-2 xl:col-start-6 xl:row-start-4 xl:min-h-0"
            label="материалы"
            swatches
            src={media.fabric}
            alt="Фактура матраса"
          />

          <StatTile
            className="min-h-[180px] xl:col-span-4 xl:row-span-2 xl:col-start-9 xl:row-start-4 xl:min-h-0"
            number="5"
            title="шагов заказа"
            text="подбор, оплата, сборка, доставка и проверка дома"
            loose
          />

          <article className="relative isolate grid min-h-[520px] overflow-hidden rounded-[18px] p-6 text-white md:p-9 xl:col-span-8 xl:row-span-4 xl:col-start-1 xl:row-start-6 xl:min-h-0 [&_*]:!text-white">
            <BackgroundVideo src={qualityVideo} opacity="opacity-72" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_22%,rgb(255_116_51/0.34),transparent_28%),linear-gradient(90deg,rgb(0_0_0/0.72)_0%,rgb(0_0_0/0.44)_55%,rgb(0_0_0/0.12)_100%)]" />
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/16 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.06em] backdrop-blur">
                  после покупки
                </span>
                <span className="rounded-full bg-[#ff7433] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.06em]">
                  сервис рядом
                </span>
              </div>
              <div className="max-w-[650px]">
                <h3 className="m-0 text-[clamp(36px,4.6vw,64px)] font-black leading-[0.96]">
                  Помогаем довести выбор до готовой спальни.
                </h3>
                <p className="mt-4 max-w-[520px] text-[16px] leading-[1.5] text-white/74">
                  Не бросаем после корзины: уточняем размеры, подсказываем по
                  материалам, согласуем доставку и сохраняем понятный маршрут заказа.
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-3 md:max-w-[470px]">
                {lowerStats.map((item) => (
                  <div
                    className="rounded-[14px] bg-white/14 px-4 py-3 backdrop-blur"
                    key={item.value}
                  >
                    <strong className="block text-[24px] leading-none">{item.value}</strong>
                    <span className="mt-1 block text-[11px] font-bold leading-[1.15] text-white/68">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <ImageTile
            className="min-h-[220px] xl:col-span-2 xl:row-span-2 xl:col-start-9 xl:row-start-6 xl:min-h-0"
            label="консультация"
            src={media.doctor}
            alt="Консультация"
          />

          <VideoTile
            className="min-h-[220px] xl:col-span-2 xl:row-span-2 xl:col-start-11 xl:row-start-6 xl:min-h-0"
            label="проверка"
            poster={media.sofa}
            src={textileVideo}
            videoFirst
          />

          <StatTile
            className="min-h-[260px] xl:col-span-4 xl:row-span-2 xl:col-start-9 xl:row-start-8 xl:min-h-0"
            number="0 ₽"
            title="подбор"
            text="помогаем сравнить размер, жесткость и состав"
            compact
          />
        </div>
      </div>
    </section>
  );
}

function BackgroundVideo({
  src,
  opacity = "opacity-70",
}: {
  src: string;
  opacity?: string;
}) {
  return (
    <video
      className={`absolute inset-0 -z-20 h-full w-full object-cover ${opacity}`}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function VideoTile({
  src,
  poster,
  label,
  videoFirst = false,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  videoFirst?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`relative isolate overflow-hidden rounded-[14px] bg-cover bg-center ${className}`}
      style={{ backgroundImage: videoFirst ? "none" : `url(${poster})` }}
    >
      <BackgroundVideo src={src} opacity="opacity-65" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(0_0_0/0.05),rgb(0_0_0/0.22))]" />
      <span className="absolute left-3 top-3 rounded-full bg-white/82 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.05em] text-[#303642] backdrop-blur">
        {label}
      </span>
    </article>
  );
}

function ImageTile({
  src,
  alt,
  label,
  swatches = false,
  className = "",
}: {
  src: string;
  alt: string;
  label?: string;
  swatches?: boolean;
  className?: string;
}) {
  return (
    <article className={`relative overflow-hidden rounded-[14px] bg-[#f3f3f5] ${className}`}>
      <img className="h-full w-full object-cover" src={src} alt={alt} />
      {label ? (
        <span className="absolute left-3 top-3 rounded-full bg-white/84 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.05em] text-[#303642] backdrop-blur">
          {label}
        </span>
      ) : null}
      {swatches ? (
        <div className="absolute bottom-3 right-3 flex -space-x-2" aria-hidden="true">
          {materialSwatches.map((color) => (
            <span
              className="h-9 w-9 rounded-[12px] border-[3px] border-white shadow-[0_10px_24px_rgb(0_0_0/0.18)]"
              key={color}
              style={{ background: color }}
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}

function StatTile({
  number,
  title,
  text,
  className = "",
  compact = false,
  loose = false,
}: {
  number: string;
  title: string;
  text: string;
  className?: string;
  compact?: boolean;
  loose?: boolean;
}) {
  return (
    <article
      className={`relative grid overflow-hidden rounded-[14px] bg-[#f5f5f7] p-6 text-[#2f3542] ${
        loose ? "content-between" : "content-start"
      } ${className}`}
    >
      <span
        className="absolute right-[-28px] top-[-28px] h-20 w-20 rounded-full border-[16px] border-[#ff7433]/10"
        aria-hidden="true"
      />
      <div>
        <strong
          className={`block font-black leading-[0.92] text-[#ff7433] ${
            compact ? "text-[36px]" : "text-[42px] md:text-[48px]"
          }`}
        >
          {number}
        </strong>
        <span
          className={`block font-black leading-[0.95] ${
            compact ? "text-[27px]" : "text-[34px] md:text-[38px]"
          }`}
        >
          {title}
        </span>
      </div>
      <p className="m-0 mt-8 max-w-[210px] text-[14px] leading-[1.24] text-[#5f6872]">
        {text}
      </p>
    </article>
  );
}
