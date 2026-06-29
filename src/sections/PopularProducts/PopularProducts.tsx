/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";

import { AddToCartButton } from "@/src/components/AddToCartButton/AddToCartButton";
import type { Product } from "@/src/types/shop";
import { formatPrice } from "@/src/utils/format";

type PopularProductsProps = {
  products: Product[];
};

export function PopularProducts({ products }: PopularProductsProps) {
  const [heroProduct, secondProduct, thirdProduct, ...gridProducts] = products;
  const [fourthProduct] = gridProducts;

  if (!heroProduct) {
    return null;
  }

  return (
    <section className="section !pb-12 !pt-8 max-[640px]:!pb-8 max-[640px]:!pt-6">
      <div className="container">
        <div className="mb-5 grid items-end gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.48fr)]">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.08em] text-[#ff7433]">
              витрина недели
            </span>
            <h2 className="mt-2 max-w-[780px] text-[clamp(30px,4.8vw,68px)] font-black leading-[0.96] tracking-normal">
              Популярные товары
            </h2>
          </div>
          <p className="m-0 max-w-[520px] text-[16px] leading-[1.55] text-[var(--color-muted)]">
            Крупная подборка как в хорошем интернет-магазине: фото, цена, выгода,
            наличие и быстрый путь в карточку товара.
          </p>
        </div>

        <div
          className="home-neomorph flex snap-x gap-3 overflow-x-auto rounded-[28px] bg-[#f4f5f7] p-3 max-[640px]:rounded-[20px] lg:grid lg:grid-cols-12 lg:overflow-visible lg:grid-rows-[repeat(3,minmax(0,172px))] xl:grid-rows-[repeat(3,minmax(0,188px))]"
          data-gsap="product-showcase"
        >
          <article className="relative isolate grid min-h-[430px] min-w-[86vw] snap-start overflow-hidden rounded-[22px] bg-[#121417] p-5 text-white shadow-[0_18px_48px_rgb(29_32_35/0.12)] md:min-w-[52vw] lg:col-span-7 lg:row-span-3 lg:min-h-0 lg:min-w-0 lg:p-7">
            <img
              className="absolute inset-0 -z-20 h-full w-full object-cover"
              src={heroProduct.image}
              alt={heroProduct.title}
            />
            <div className="absolute inset-0 -z-10 bg-black/48" />
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#ff7433] px-3 py-1.5 text-xs font-black uppercase">
                  хит продаж
                </span>
                <span className="rounded-full bg-white/16 px-3 py-1.5 text-xs font-black uppercase backdrop-blur">
                  {heroProduct.rating} рейтинг
                </span>
              </div>

              <div className="max-w-[560px]">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.08em] !text-white/70">
                  {heroProduct.brand} / {heroProduct.size}
                </p>
                <h3 className="m-0 text-[clamp(31px,6vw,84px)] font-black leading-[0.94] !text-white">
                  {heroProduct.title}
                </h3>
                <p className="mt-5 max-w-[510px] text-[17px] leading-[1.55] !text-white/76">
                  {heroProduct.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,220px)_minmax(0,180px)]">
                  <div className="rounded-[18px] bg-white/14 p-4 backdrop-blur">
                    <span className="block text-xs font-black uppercase !text-white/60">
                      цена сейчас
                    </span>
                    <strong className="mt-2 block text-[28px] leading-none !text-white md:text-[34px]">
                      {formatPrice(heroProduct.price)}
                    </strong>
                    {heroProduct.oldPrice ? (
                      <s className="mt-1 block text-sm !text-white/55">
                        {formatPrice(heroProduct.oldPrice)}
                      </s>
                    ) : null}
                  </div>
                  <div className="grid content-center gap-2 rounded-[18px] bg-white p-3 text-[var(--color-ink)]">
                    <AddToCartButton productId={heroProduct.id} />
                    <Link
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[11px] bg-[#f3f5f7] px-4 text-sm font-black !text-[#1d2023] [&_*]:!text-[#1d2023]"
                      href={`/product/${heroProduct.slug}`}
                    >
                      Подробнее <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {secondProduct ? (
            <ProductSpotlight
              product={secondProduct}
              className="lg:col-span-3 lg:row-span-2 lg:min-h-0"
              tone="dark"
            />
          ) : null}

          <article className="grid min-h-[240px] min-w-[72vw] snap-start content-between overflow-hidden rounded-[22px] bg-[#ff7433] p-6 text-white shadow-[0_18px_48px_rgb(255_116_51/0.22)] md:min-w-[38vw] lg:col-span-2 lg:row-span-2 lg:min-h-0 lg:min-w-0 [&_*]:!text-white">
            <Sparkles size={28} />
            <div>
              <span className="text-xs font-black uppercase text-white/72">
                комплектом выгоднее
              </span>
              <strong className="mt-2 block text-[42px] leading-[0.92]">
                до -25%
              </strong>
              <p className="mt-3 text-sm leading-[1.45] text-white/78">
                Матрас, основание, подушка и защита в одной покупке.
              </p>
            </div>
          </article>

          {thirdProduct ? (
            <ProductSpotlight
              product={thirdProduct}
              className="lg:col-span-3 lg:row-span-1 lg:col-start-8 lg:row-start-3 lg:min-h-0"
              tone="dark"
            />
          ) : null}

          {fourthProduct ? (
            <CompactProduct
              className="lg:col-span-2 lg:row-span-1 lg:col-start-11 lg:row-start-3 lg:min-h-0"
              product={fourthProduct}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProductSpotlight({
  product,
  tone,
  className = "",
}: {
  product: Product;
  tone: "dark" | "light";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <Link
      className={`group relative isolate grid min-h-[240px] min-w-[72vw] snap-start overflow-hidden rounded-[22px] p-5 shadow-[0_18px_48px_rgb(29_32_35/0.1)] md:min-w-[38vw] lg:min-w-0 ${className} ${
        isDark ? "bg-[#151719] text-white [&_*]:!text-white" : "bg-white text-[var(--color-ink)]"
      }`}
      href={`/product/${product.slug}`}
    >
      <img
        className={`absolute inset-0 -z-20 h-full w-full object-cover transition duration-300 group-hover:scale-105 ${
          isDark ? "opacity-72" : "opacity-88"
        }`}
        src={product.image}
        alt={product.title}
      />
      <div className={`absolute inset-0 -z-10 ${isDark ? "bg-black/48" : "bg-black/24"}`} />
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-[#ff7433] px-2.5 py-1 text-[11px] font-black uppercase text-white">
            {product.category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/18 px-2.5 py-1 text-xs font-black backdrop-blur">
            <Star size={13} fill="currentColor" /> {product.rating}
          </span>
        </div>
        <div>
          <h3 className="m-0 max-w-[300px] text-[25px] font-black leading-[1] md:text-[30px]">
            {product.title}
          </h3>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div>
              <strong className="block text-[26px] leading-none">
                {formatPrice(product.price)}
              </strong>
              <small className={isDark ? "text-white/65" : "text-[var(--color-muted)]"}>
                {product.size} / {product.firmness}
              </small>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--color-ink)]">
              <ArrowRight size={19} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CompactProduct({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <Link
      className={`group relative isolate grid min-h-[240px] min-w-[72vw] snap-start content-end overflow-hidden rounded-[22px] bg-white p-4 shadow-[0_14px_38px_rgb(29_32_35/0.08)] transition duration-200 hover:-translate-y-1 md:min-w-[38vw] lg:min-h-[170px] lg:min-w-0 ${className}`}
      href={`/product/${product.slug}`}
    >
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-88 transition duration-300 group-hover:scale-105"
        src={product.image}
        alt={product.title}
      />
      <div className="absolute inset-0 -z-10 bg-black/36" />
      <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-1 text-xs font-black backdrop-blur">
        <Star size={13} fill="currentColor" /> {product.rating}
      </span>
      <div>
        <strong className="line-clamp-2 block text-[22px] font-black leading-[1] !text-white">
          {product.title}
        </strong>
        <span className="mt-2 block text-[20px] font-black !text-white">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
