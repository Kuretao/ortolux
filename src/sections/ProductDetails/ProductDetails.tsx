"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageSquare,
  Scale,
  Send,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";

import { AddToCartButton } from "@/src/components/AddToCartButton/AddToCartButton";
import { ProductCard } from "@/src/components/ProductCard/ProductCard";
import { blogArticles, products } from "@/src/data/shop";
import {
  favoriteProductIdsAtom,
  toggleFavoriteAtom,
} from "@/src/store/favorites";
import { compareProductIdsAtom, toggleCompareAtom } from "@/src/store/compare";
import type { Product } from "@/src/types/shop";
import { formatPrice } from "@/src/utils/format";

import styles from "./ProductDetails.module.scss";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const favoriteIds = useAtomValue(favoriteProductIdsAtom);
  const compareIds = useAtomValue(compareProductIdsAtom);
  const toggleFavorite = useSetAtom(toggleFavoriteAtom);
  const toggleCompare = useSetAtom(toggleCompareAtom);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [reviewStatus, setReviewStatus] = useState("");
  const defaultVariant =
    product.variants.find((variant) => variant.sku === product.sku) ??
    product.variants[0];
  const [selectedVariantId, setSelectedVariantId] = useState(defaultVariant?.id);
  const selectedVariant = useMemo(
    () =>
      product.variants.find((variant) => variant.id === selectedVariantId) ??
      defaultVariant,
    [defaultVariant, product.variants, selectedVariantId],
  );
  const currentPrice = selectedVariant?.price ?? product.price;
  const currentOldPrice = selectedVariant?.oldPrice ?? product.oldPrice;
  const currentSku = selectedVariant?.sku ?? product.sku;
  const currentSize = selectedVariant?.size ?? product.size;
  const currentHeight = selectedVariant?.height ?? product.height;
  const currentFirmness = selectedVariant?.firmness ?? product.firmness;
  const currentStock = selectedVariant?.stock ?? product.stock;
  const galleryImages = Array.from(new Set([product.image, ...product.gallery]));
  const activeImage = galleryImages[activeImageIndex] ?? product.image;
  const isFavorite = favoriteIds.includes(product.id);
  const isCompared = compareIds.includes(product.id);
  const similarProducts = products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 4);
  const fallbackSimilarProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        !similarProducts.some((similar) => similar.id === item.id),
    )
    .slice(0, 4 - similarProducts.length);
  const visibleSimilarProducts = [...similarProducts, ...fallbackSimilarProducts].slice(
    0,
    4,
  );
  const relatedArticles = blogArticles
    .filter((article) =>
      [product.category, product.firmness, product.size, "матрас"].some((keyword) =>
        `${article.title} ${article.excerpt} ${article.category}`
          .toLowerCase()
          .includes(keyword.toLowerCase().split(" ")[0]),
      ),
    )
    .slice(0, 3);
  const visibleArticles = relatedArticles.length
    ? relatedArticles
    : blogArticles.slice(0, 3);
  const reviews = [
    {
      author: "Анна",
      text: "Матрас хорошо держит спину, доставку согласовали заранее. Через неделю стало заметно комфортнее спать.",
      rating: 5,
      meta: currentSize,
    },
    {
      author: "Игорь",
      text: "Понравилось, что можно выбрать размер и сразу сравнить состав. По ощущениям жесткость совпала с описанием.",
      rating: 5,
      meta: currentFirmness,
    },
    {
      author: "Марина",
      text: "Брала комплектом с основанием. Фото и характеристики на странице помогли быстро определиться.",
      rating: 4,
      meta: product.brand,
    },
  ];
  const showPreviousImage = () =>
    setActiveImageIndex((index) =>
      index === 0 ? galleryImages.length - 1 : index - 1,
    );
  const showNextImage = () =>
    setActiveImageIndex((index) => (index + 1) % galleryImages.length);
  const handleReviewSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setReviewStatus("Спасибо, отзыв отправлен на модерацию");
  };
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    sku: currentSku,
    brand: product.brand,
    image: product.gallery,
    description: product.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
    offers: {
      "@type": "Offer",
      price: currentPrice,
      priceCurrency: "RUB",
      availability:
        currentStock === "in_stock"
          ? "https://schema.org/InStock"
          : currentStock === "preorder"
            ? "https://schema.org/PreOrder"
            : "https://schema.org/OutOfStock",
    },
  };

  return (
    <main className="page-main" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <section className={`container ${styles.layout}`}>
        <div className={styles.gallery}>
          <div className={styles.slider}>
            <img src={activeImage} alt={product.title} />
            <div className={styles.sliderBadge}>
              Фото {activeImageIndex + 1} из {galleryImages.length}
            </div>
            {galleryImages.length > 1 ? (
              <div className={styles.sliderControls}>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Предыдущее фото"
                >
                  <ChevronLeft size={22} />
                </button>
                <button type="button" onClick={showNextImage} aria-label="Следующее фото">
                  <ChevronRight size={22} />
                </button>
              </div>
            ) : null}
          </div>
          <div className={styles.thumbs}>
            {galleryImages.map((image, index) => (
              <button
                className={index === activeImageIndex ? styles.activeThumb : ""}
                type="button"
                key={image}
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Показать фото ${index + 1}`}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.meta}>
            <span>Арт. {currentSku}</span>
            <span>{product.category}</span>
            <span>
              <Star size={16} fill="currentColor" /> {product.rating} ·{" "}
              {product.reviews} отзывов
            </span>
          </div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <div className={styles.variantPicker}>
            <div className={styles.pickerHeader}>
              <strong>Размер и комплектация</strong>
              <span>
                {currentStock === "in_stock"
                  ? "В наличии"
                  : currentStock === "preorder"
                    ? "Под заказ"
                    : "Нет в наличии"}
              </span>
            </div>
            <div className={styles.variantGrid}>
              {product.variants.map((variant) => (
                <button
                  className={
                    variant.id === selectedVariant?.id ? styles.activeVariant : ""
                  }
                  type="button"
                  key={variant.id}
                  onClick={() => setSelectedVariantId(variant.id)}
                >
                  <strong>{variant.size}</strong>
                  <span>{formatPrice(variant.price)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.priceRow}>
            <div>
              <strong>{formatPrice(currentPrice)}</strong>
              {currentOldPrice ? <s>{formatPrice(currentOldPrice)}</s> : null}
            </div>
            <AddToCartButton
              label="Добавить в корзину"
              productId={product.id}
              variantId={selectedVariant?.id}
            />
          </div>

          <div className={styles.secondaryActions}>
            <button
              className={isFavorite ? styles.favoriteActive : ""}
              type="button"
              onClick={() => toggleFavorite(product.id)}
              aria-pressed={isFavorite}
            >
              <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
              {isFavorite ? "В избранном" : "В избранное"}
            </button>
            <button
              className={isCompared ? styles.compareActive : ""}
              type="button"
              onClick={() => toggleCompare(product.id)}
              aria-pressed={isCompared}
            >
              <Scale size={18} /> {isCompared ? "В сравнении" : "Сравнить"}
            </button>
          </div>

          <div className={styles.props}>
            <div>
              <span>Размер</span>
              <strong>{currentSize}</strong>
            </div>
            <div>
              <span>Жесткость</span>
              <strong>{currentFirmness}</strong>
            </div>
            <div>
              <span>Высота</span>
              <strong>{currentHeight}</strong>
            </div>
            <div>
              <span>Нагрузка</span>
              <strong>{product.weightLimit}</strong>
            </div>
            <div>
              <span>Страна</span>
              <strong>{product.country}</strong>
            </div>
            <div>
              <span>Гарантия</span>
              <strong>{product.warranty}</strong>
            </div>
          </div>

          <div className={styles.composition}>
            <h2>Состав</h2>
            {product.composition.map((item) => (
              <span key={item}>
                <Check size={18} /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`container ${styles.promoBanner}`}>
        <div>
          <span>комплектом выгоднее</span>
          <h2>Добавьте основание, подушку и защитный чехол в один заказ</h2>
          <p>
            Соберите спальню без разрозненных доставок: один комплект, одна
            проверка, один понятный итог.
          </p>
        </div>
        <Link href="/catalog?set=bedroom">
          Смотреть комплекты <ArrowRight size={18} />
        </Link>
      </section>

      <section className={`container ${styles.tabs}`}>
        <details open>
          <summary>Описание</summary>
          <p>{product.description}</p>
          <p>
            Подходит для ежедневного сна, устойчив к нагрузке и совместим с
            большинством ортопедических оснований.
          </p>
        </details>
        <details open>
          <summary>Характеристики</summary>
          <dl>
            {Object.entries(product.characteristics).map(([name, value]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </details>
        <details>
          <summary>Доставка и возврат</summary>
          <p>
            Доставка рассчитывается после выбора города. Для MVP заложен API
            `/api/delivery/calculate`, который позже подключается к СДЭК,
            Boxberry или другому провайдеру.
          </p>
        </details>
      </section>

      <section className={`container ${styles.infoRail}`}>
        <article>
          <Truck size={24} />
          <h2>Доставка и подъем</h2>
          <p>Согласуем время, занос и подъем крупногабаритного товара.</p>
        </article>
        <article>
          <ShieldCheck size={24} />
          <h2>Проверка при получении</h2>
          <p>Можно сверить размер, упаковку, комплектацию и внешний вид.</p>
        </article>
        <article>
          <MessageSquare size={24} />
          <h2>Помощь с выбором</h2>
          <p>Подскажем по жесткости, нагрузке, основанию и уходу.</p>
        </article>
      </section>

      <section className={`container ${styles.reviewsSection}`}>
        <div className={styles.sectionHeader}>
          <div>
            <span>отзывы</span>
            <h2>Покупатели о модели</h2>
          </div>
          <strong>
            <Star size={18} fill="currentColor" /> {product.rating}
          </strong>
        </div>
        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <article key={review.author}>
              <div>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    size={15}
                    fill="currentColor"
                    key={`${review.author}-${index}`}
                    opacity={index < review.rating ? 1 : 0.24}
                  />
                ))}
              </div>
              <p>{review.text}</p>
              <footer>
                <strong>{review.author}</strong>
                <span>{review.meta}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className={`container ${styles.reviewFormSection}`}>
        <div>
          <span>оставить отзыв</span>
          <h2>Расскажите о покупке</h2>
          <p>
            Форма демонстрационная: сообщение остается на странице как
            подтверждение отправки.
          </p>
        </div>
        <form onSubmit={handleReviewSubmit}>
          <label>
            Имя
            <input required name="name" placeholder="Ваше имя" />
          </label>
          <label>
            Оценка
            <select name="rating" defaultValue="5">
              <option value="5">5 - отлично</option>
              <option value="4">4 - хорошо</option>
              <option value="3">3 - нормально</option>
            </select>
          </label>
          <label className={styles.fullField}>
            Отзыв
            <textarea required name="text" placeholder="Что понравилось?" />
          </label>
          <button className="primary-link" type="submit">
            <Send size={17} /> Отправить отзыв
          </button>
          {reviewStatus ? <p>{reviewStatus}</p> : null}
        </form>
      </section>

      <section className={`container ${styles.articleSection}`}>
        <div className={styles.sectionHeader}>
          <div>
            <span>полезно знать</span>
            <h2>Статьи по теме</h2>
          </div>
          <Link href="/blog">Все статьи</Link>
        </div>
        <div className={styles.articleGrid}>
          {visibleArticles.map((article) => (
            <Link href={`/blog/${article.slug}`} key={article.id}>
              <span>{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <small>{article.readTime}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className={`container ${styles.similarSection}`}>
        <div className={styles.sectionHeader}>
          <div>
            <span>похожие товары</span>
            <h2>Можно сравнить рядом</h2>
          </div>
          <Link href="/catalog">В каталог</Link>
        </div>
        <div className={styles.similarGrid}>
          {visibleSimilarProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
