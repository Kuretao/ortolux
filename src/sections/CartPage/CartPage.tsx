"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {
  BadgeCheck,
  Banknote,
  CreditCard,
  FileText,
  LockKeyhole,
  Minus,
  PackageCheck,
  Plus,
  ReceiptText,
  ShieldCheck,
  Trash2,
  Truck,
} from "lucide-react";
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
  const fiscalFee = Math.round(total * 0.015);

  return (
    <main className="page-main" id="main-content">
      <section className={`container ${styles.hero}`}>
        <div>
          <span className={styles.kicker}>корзина</span>
          <h1>Оформление покупки</h1>
          <p>
            Корзина подготовлена под полноценную онлайн-оплату: состав заказа,
            доставка, фискальный чек и переход в защищенный checkout.
          </p>
        </div>
        <div className={styles.steps}>
          <span data-active="true">Корзина</span>
          <span>Доставка</span>
          <span>Оплата</span>
          <span>Чек</span>
        </div>
      </section>

      <section className={`container ${styles.layout}`}>
        <div className={styles.mainColumn}>
          {lines.length === 0 ? (
            <div className={styles.empty}>
              <PackageCheck size={34} />
              <h2>Корзина пока пустая</h2>
              <p>Добавьте товары, чтобы перейти к онлайн-оплате.</p>
              <Link className="primary-link" href="/catalog">
                Перейти в каталог
              </Link>
            </div>
          ) : (
            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <span>состав заказа</span>
                  <h2>{lines.length} товар(а) в корзине</h2>
                </div>
                <Link href="/catalog">Добавить товары</Link>
              </div>
              <div className={styles.list}>
                {lines.map(({ product, variant, quantity, productId, variantId }) =>
                  product ? (
                    <article
                      className={styles.item}
                      key={`${productId}-${variantId ?? "base"}`}
                    >
                      <img src={product.image} alt={product.title} />
                      <div className={styles.itemInfo}>
                        <Link href={`/product/${product.slug}`}>{product.title}</Link>
                        <span>
                          {variant?.size ?? product.size} · {product.firmness} ·{" "}
                          {variant?.height ?? product.height}
                        </span>
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
                      <strong className={styles.linePrice}>
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
            </section>
          )}

          <section className={styles.checkoutGrid}>
            <article className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <span>способ оплаты</span>
                  <h2>Онлайн-касса и эквайринг</h2>
                </div>
              </div>
              <div className={styles.paymentMethods}>
                <label>
                  <input defaultChecked name="payment" type="radio" />
                  <CreditCard size={22} />
                  <strong>Банковская карта</strong>
                  <span>Оплата онлайн, чек на email</span>
                </label>
                <label>
                  <input name="payment" type="radio" />
                  <Banknote size={22} />
                  <strong>СБП</strong>
                  <span>Быстрая оплата по QR</span>
                </label>
                <label>
                  <input name="payment" type="radio" />
                  <FileText size={22} />
                  <strong>Счет для юрлица</strong>
                  <span>Реквизиты и закрывающие документы</span>
                </label>
              </div>
            </article>

            <article className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <span>доставка</span>
                  <h2>Получение заказа</h2>
                </div>
              </div>
              <div className={styles.deliveryOptions}>
                <div>
                  <Truck size={22} />
                  <strong>Курьер и подъем</strong>
                  <span>
                    {delivery === 0
                      ? "Бесплатно при сумме от 30 000 ₽"
                      : "Расчет от 900 ₽"}
                  </span>
                </div>
                <div>
                  <PackageCheck size={22} />
                  <strong>Проверка при получении</strong>
                  <span>Размер, упаковка, комплектация</span>
                </div>
              </div>
            </article>
          </section>

          <section className={styles.assurance}>
            <article>
              <LockKeyhole size={22} />
              <strong>Защищенная оплата</strong>
              <span>Платежная форма открывается на следующем шаге</span>
            </article>
            <article>
              <ReceiptText size={22} />
              <strong>Фискальный чек</strong>
              <span>Отправим чек после успешной оплаты</span>
            </article>
            <article>
              <ShieldCheck size={22} />
              <strong>Безопасная покупка</strong>
              <span>Согласование доставки до списания крупного заказа</span>
            </article>
          </section>
        </div>

        <aside className={styles.summary}>
          <div className={styles.summaryHeader}>
            <BadgeCheck size={24} />
            <h2>К оплате</h2>
          </div>
          <dl>
            <div>
              <dt>Товары</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div>
              <dt>Скидка</dt>
              <dd>-{formatPrice(discount)}</dd>
            </div>
            <div>
              <dt>Доставка</dt>
              <dd>{delivery === 0 ? "Бесплатно" : formatPrice(delivery)}</dd>
            </div>
            <div>
              <dt>Эквайринг включен</dt>
              <dd>{formatPrice(fiscalFee)}</dd>
            </div>
          </dl>
          <label>
            Промокод
            <input placeholder="ORTO2026" />
          </label>
          <div className={styles.total}>
            <span>Оплатить сейчас</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <Link className="primary-link" href="/checkout">
            Перейти к оплате
          </Link>
          <p>
            На следующем шаге покупатель указывает контакты, подтверждает адрес и
            переходит к платежной форме.
          </p>
        </aside>
      </section>
    </main>
  );
}
