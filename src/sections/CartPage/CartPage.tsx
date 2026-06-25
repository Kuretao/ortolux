"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";

import { products } from "@/src/data/shop";
import {
  cartItemsAtom,
  removeCartItemAtom,
  updateCartItemAtom,
} from "@/src/store/cart";
import { formatPrice } from "@/src/utils/format";

import styles from "./CartPage.module.scss";

export function CartPage() {
  const items = useAtomValue(cartItemsAtom);
  const updateItem = useSetAtom(updateCartItemAtom);
  const removeItem = useSetAtom(removeCartItemAtom);
  const lines = items
    .map((item) => ({
      ...item,
      product: products.find((product) => product.id === item.productId),
    }))
    .map((item) => ({
      ...item,
      variant: item.product?.variants.find(
        (variant) => variant.id === item.variantId,
      ),
    }))
    .filter((item) => item.product);
  const subtotal = lines.reduce(
    (sum, item) =>
      sum + (item.variant?.price ?? item.product?.price ?? 0) * item.quantity,
    0,
  );
  const discount = subtotal > 30000 ? 3000 : 0;
  const delivery = subtotal > 30000 ? 0 : 900;
  const total = Math.max(0, subtotal - discount + delivery);

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.layout}`}>
        <div>
          <span className={styles.kicker}>корзина</span>
          <h1>Ваш заказ</h1>
          {lines.length === 0 ? (
            <div className={styles.empty}>
              <p>В корзине пока нет товаров.</p>
              <Link className="primary-link" href="/catalog">
                Перейти в каталог
              </Link>
            </div>
          ) : (
            <div className={styles.list}>
              {lines.map(({ product, variant, quantity, productId, variantId }) =>
                product ? (
                  <article
                    className={styles.item}
                    key={`${productId}-${variantId ?? "base"}`}
                  >
                    <img src={product.image} alt={product.title} />
                    <div>
                      <Link href={`/product/${product.slug}`}>{product.title}</Link>
                      <span>{variant?.size ?? product.size}</span>
                      {(variant?.stock ?? product.stock) === "out_of_stock" ? (
                        <small>Товар закончился, оформление будет заблокировано</small>
                      ) : null}
                    </div>
                    <div className={styles.qty}>
                      <button
                        type="button"
                        onClick={() =>
                          updateItem({
                            productId,
                            variantId,
                            quantity: quantity - 1,
                          })
                        }
                        aria-label="Уменьшить количество"
                      >
                        <Minus size={16} />
                      </button>
                      <strong>{quantity}</strong>
                      <button
                        type="button"
                        onClick={() =>
                          updateItem({
                            productId,
                            variantId,
                            quantity: quantity + 1,
                          })
                        }
                        aria-label="Увеличить количество"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <strong>
                      {formatPrice((variant?.price ?? product.price) * quantity)}
                    </strong>
                    <button
                      className={styles.remove}
                      type="button"
                      onClick={() => removeItem({ productId, variantId })}
                      aria-label="Удалить товар"
                    >
                      <Trash2 size={18} />
                    </button>
                  </article>
                ) : null,
              )}
            </div>
          )}
        </div>

        <aside className={styles.summary}>
          <h2>Итого</h2>
          <div>
            <span>Товары</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          <div>
            <span>Скидка</span>
            <strong>-{formatPrice(discount)}</strong>
          </div>
          <div>
            <span>Доставка</span>
            <strong>{delivery === 0 ? "Бесплатно" : formatPrice(delivery)}</strong>
          </div>
          <label>
            Промокод
            <input placeholder="ORTO2026" />
          </label>
          <div className={styles.total}>
            <span>К оплате</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <Link className="primary-link" href="/checkout">
            Перейти к оформлению
          </Link>
        </aside>
      </section>
    </main>
  );
}
