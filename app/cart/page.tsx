import type { Metadata } from "next";

import { CartPage } from "@/src/sections/CartPage/CartPage";

export const metadata: Metadata = {
  title: "Корзина",
  description:
    "Корзина OrtoLux: список выбранных матрасов, количество, скидки, промокод, доставка и переход к оформлению заказа.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <CartPage />;
}
