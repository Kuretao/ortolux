"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAtomValue, useSetAtom } from "jotai";
import {
  ArrowRight,
  Edit3,
  Heart,
  LogOut,
  MapPin,
  PackageCheck,
  ShoppingCart,
  Sparkles,
  UserRound,
} from "lucide-react";

import { products } from "@/src/data/shop";
import { authSessionAtom, logoutAuthAtom } from "@/src/store/auth";
import { cartItemsAtom } from "@/src/store/cart";
import { favoriteProductIdsAtom } from "@/src/store/favorites";
import { formatPrice } from "@/src/utils/format";

import styles from "./AccountPage.module.scss";

const accountVideoUrl =
  "https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4";

export function AccountPage() {
  const router = useRouter();
  const session = useAtomValue(authSessionAtom);
  const cartItems = useAtomValue(cartItemsAtom);
  const favoriteIds = useAtomValue(favoriteProductIdsAtom);
  const logout = useSetAtom(logoutAuthAtom);

  const cartLines = useMemo(
    () =>
      cartItems
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId);
          const variant = product?.variants.find(
            (entry) => entry.id === item.variantId,
          );

          return product ? { ...item, product, variant } : null;
        })
        .filter(Boolean),
    [cartItems],
  );
  const cartTotal = cartLines.reduce(
    (sum, line) =>
      sum + ((line?.variant?.price ?? line?.product.price ?? 0) * (line?.quantity ?? 0)),
    0,
  );
  const recommended = products.slice(0, 3);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (!session) {
    return (
      <main className="page-main" id="main-content">
        <section className={`container ${styles.guestHero}`}>
          <video autoPlay loop muted playsInline preload="auto">
            <source src={accountVideoUrl} type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} />
          <div className={styles.guestCopy}>
            <span>личный кабинет</span>
            <h1>Войдите, чтобы продолжить покупки</h1>
            <p>
              После входа здесь появятся заказы, адреса доставки, корзина,
              избранное и быстрые действия.
            </p>
            <div className={styles.actions}>
              <Link className="primary-link" href="/login">
                Войти
              </Link>
              <Link className="secondary-link" href="/register">
                Создать аккаунт
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.hero}`}>
        <video autoPlay loop muted playsInline preload="auto">
          <source src={accountVideoUrl} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroCopy}>
          <span>личный кабинет</span>
          <h1>{session.user.name}, добро пожаловать</h1>
          <p>
            Все важное для покупки матраса: корзина, доставка, документы и
            быстрый возврат к выбранным товарам.
          </p>
          <div className={styles.actions}>
            <Link className="primary-link" href="/catalog">
              Продолжить покупки <ArrowRight size={18} />
            </Link>
            <button type="button" onClick={handleLogout}>
              <LogOut size={18} /> Выйти
            </button>
          </div>
        </div>
        <aside className={styles.profileCard}>
          <UserRound size={28} />
          <strong>{session.user.name}</strong>
          <span>{session.user.email}</span>
          <small>demo-сессия активна</small>
          <Link href="/account/edit">
            <Edit3 size={16} /> Редактировать
          </Link>
        </aside>
      </section>

      <section className={`container ${styles.statsGrid}`}>
        <article>
          <ShoppingCart size={22} />
          <span>В корзине</span>
          <strong>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</strong>
        </article>
        <article>
          <PackageCheck size={22} />
          <span>Заказы</span>
          <strong>{cartItems.length ? "1" : "0"}</strong>
        </article>
        <article>
          <Heart size={22} />
          <span>Избранное</span>
          <strong>{favoriteIds.length}</strong>
        </article>
        <article>
          <MapPin size={22} />
          <span>Адреса</span>
          <strong>1</strong>
        </article>
      </section>

      <section className={`container ${styles.dashboard}`}>
        <div className={styles.mainColumn}>
          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <span>текущий заказ</span>
                <h2>{cartItems.length ? "Корзина готова к оформлению" : "Заказов пока нет"}</h2>
              </div>
              <Link href={cartItems.length ? "/checkout" : "/catalog"}>
                {cartItems.length ? "Оформить" : "В каталог"} <ArrowRight size={17} />
              </Link>
            </div>
            {cartItems.length ? (
              <div className={styles.orderPreview}>
                {cartLines.slice(0, 3).map((line) =>
                  line ? (
                    <div key={`${line.productId}-${line.variantId ?? "base"}`}>
                      <img src={line.product.image} alt={line.product.title} />
                      <div>
                        <strong>{line.product.title}</strong>
                        <span>
                          {line.variant?.size ?? line.product.size} · {line.quantity} шт.
                        </span>
                      </div>
                      <b>
                        {formatPrice(
                          (line.variant?.price ?? line.product.price) * line.quantity,
                        )}
                      </b>
                    </div>
                  ) : null,
                )}
                <footer>
                  <span>Итого в корзине</span>
                  <strong>{formatPrice(cartTotal)}</strong>
                </footer>
              </div>
            ) : (
              <p className={styles.emptyText}>
                Добавьте товар в корзину, и кабинет сразу покажет состав заказа,
                сумму и следующий шаг.
              </p>
            )}
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <span>рекомендации</span>
                <h2>Подборка для быстрого старта</h2>
              </div>
            </div>
            <div className={styles.recommendations}>
              {recommended.map((product) => (
                <Link href={`/product/${product.slug}`} key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <strong>{product.title}</strong>
                  <span>{formatPrice(product.price)}</span>
                </Link>
              ))}
            </div>
          </article>
        </div>

        <aside className={styles.sideColumn}>
          <article className={styles.profileDetails}>
            <div className={styles.panelHeader}>
              <div>
                <span>профиль</span>
                <h2>Подробная информация</h2>
              </div>
            </div>
            <dl>
              <div>
                <dt>Телефон</dt>
                <dd>{session.user.phone || "Не указан"}</dd>
              </div>
              <div>
                <dt>Город</dt>
                <dd>{session.user.city || "Москва"}</dd>
              </div>
              <div>
                <dt>Адрес</dt>
                <dd>{session.user.address || "Уточняется при заказе"}</dd>
              </div>
              <div>
                <dt>Жесткость</dt>
                <dd>{session.user.sleepPreference || "Средняя жесткость"}</dd>
              </div>
              <div>
                <dt>Размер</dt>
                <dd>{session.user.preferredSize || "160 x 200"}</dd>
              </div>
            </dl>
            <Link href="/account/edit">Изменить профиль</Link>
          </article>

          <article className={styles.sidePanel}>
            <Sparkles size={22} />
            <h2>Персональный сервис</h2>
            <p>
              Менеджер может сверить размер, жесткость, подъем и доставку перед
              оформлением.
            </p>
            <Link href="/delivery">Проверить доставку</Link>
          </article>

          <article className={styles.sidePanel}>
            <MapPin size={22} />
            <h2>Адрес доставки</h2>
            <p>Москва, уточняется при оформлении заказа.</p>
            <Link href="/checkout">Изменить в заказе</Link>
          </article>
        </aside>
      </section>
    </main>
  );
}
