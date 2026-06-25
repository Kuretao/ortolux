import { ArrowRight, Bell, Percent, Sparkles } from "lucide-react";

const videoUrl =
  "https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4";

const perks = [
  { icon: Percent, title: "Ранний доступ", text: "к распродажам и комплектам" },
  { icon: Bell, title: "Без спама", text: "только подборки по делу" },
  { icon: Sparkles, title: "Гайды", text: "по сну, размерам и тканям" },
];

export function VideoSubscribe() {
  return (
    <section className="section !py-16">
      <div className="container">
        <div className="home-neomorph grid gap-3 rounded-[30px] bg-[#f4f5f7] p-3 lg:grid-cols-12" data-gsap="media-grid">
          <div className="relative isolate min-h-[520px] overflow-hidden rounded-[28px] bg-[#121417] p-6 text-white shadow-[0_22px_70px_rgb(29_32_35/0.12)] md:p-9 lg:col-span-8 [&_*]:!text-white">
            <video
              className="absolute inset-0 -z-20 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_24%,rgb(255_116_51/0.4),transparent_26%),linear-gradient(90deg,rgb(0_0_0/0.82)_0%,rgb(0_0_0/0.48)_55%,rgb(0_0_0/0.14)_100%)]" />
            <div className="flex h-full flex-col justify-between">
              <span className="w-fit rounded-full bg-white/14 px-3 py-1.5 text-xs font-black uppercase backdrop-blur">
                закрытые подборки
              </span>

              <div className="max-w-[670px]">
                <h2 className="m-0 text-[clamp(38px,5vw,72px)] font-black leading-[0.92]">
                  Акции, комплекты и гайды по сну в одном письме
                </h2>
                <p className="mt-5 max-w-[560px] text-[17px] leading-[1.55] text-white/74">
                  Письма выглядят как короткий журнал: что купить, с чем сочетать,
                  какой размер выбрать и где можно сэкономить без потери качества.
                </p>

                <form className="mt-7 grid max-w-[650px] gap-2 rounded-[18px] bg-white p-2 sm:grid-cols-[1fr_auto]">
                  <input
                    className="min-h-[56px] rounded-[12px] border-0 bg-[#f3f5f7] px-4 text-[16px] font-semibold !text-[var(--color-ink)] outline-0 placeholder:!text-[#737a82]"
                    placeholder="Ваш email"
                    type="email"
                    aria-label="Email"
                  />
                  <button
                    className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-[12px] border-0 bg-[#17191c] px-5 font-black !text-white [&_*]:!text-white"
                    type="button"
                  >
                    Подписаться <ArrowRight size={17} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="grid gap-3 lg:col-span-4">
            <article className="grid min-h-[248px] content-between rounded-[26px] bg-[#ff7433] p-6 text-white shadow-[0_18px_48px_rgb(255_116_51/0.2)] [&_*]:!text-white">
              <span className="text-xs font-black uppercase text-white/75">
                только подписчикам
              </span>
              <strong className="text-[54px] leading-[0.9]">
                -10%
              </strong>
              <p className="m-0 max-w-[260px] text-sm leading-[1.45] text-white/78">
                на первый комплект: матрас, подушка, наматрасник или основание.
              </p>
            </article>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {perks.map(({ icon: Icon, title, text }) => (
                <article
                  className="grid min-h-[120px] grid-cols-[42px_1fr] items-center gap-3 rounded-[22px] border border-[rgb(29_32_35/0.08)] bg-white p-4 shadow-[0_14px_38px_rgb(29_32_35/0.06)]"
                  key={title}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fff0e8] text-[#ff7433]">
                    <Icon size={20} />
                  </span>
                  <span>
                    <strong className="block text-[16px] leading-[1.1]">{title}</strong>
                    <small className="mt-1 block text-sm leading-[1.3] text-[var(--color-muted)]">
                      {text}
                    </small>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
