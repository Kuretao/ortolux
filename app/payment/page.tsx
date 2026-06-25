import type { Metadata } from "next";

import { InfoPage } from "@/src/sections/InfoPage/InfoPage";

export const metadata: Metadata = {
  title: "Оплата заказа",
  description:
    "Способы оплаты в OrtoLux: банковская карта, наличные при получении, счет для юридических лиц и онлайн-оплата заказа.",
};

export default function Page() {
  return (
    <InfoPage
      eyebrow="оплата"
      title="Оплата матрасов и аксессуаров"
      description="Страница нужна для доверия покупателя и коммерческого SEO: способы оплаты, условия подтверждения и документы."
      variant="payment"
      items={[
        {
          title: "Банковская карта",
          text: "Оплата онлайн или при получении после проверки состава заказа.",
        },
        {
          title: "Наличные",
          text: "Доступны при доставке по городу, если заказ не требует предоплаты.",
        },
        {
          title: "Счет для юрлиц",
          text: "Можно оформить заказ на организацию и получить закрывающие документы.",
        },
      ]}
    />
  );
}
