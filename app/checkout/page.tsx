import type { Metadata } from "next";

import { CheckoutPage } from "@/src/sections/CheckoutPage/CheckoutPage";

export const metadata: Metadata = {
  title: "Оформление заказа",
  description:
    "Оформление заказа OrtoLux: контакты покупателя, город доставки, комментарий и подтверждение покупки матраса.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <CheckoutPage />;
}
