import type { Metadata } from "next";

import { legalDocuments } from "@/src/data/legal";
import { LegalPage } from "@/src/sections/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Публичная оферта",
  description:
    "Публичная оферта интернет-магазина OrtoLux: продажа матрасов, оформление заказа, оплата, доставка и возврат.",
};

export default function Page() {
  return <LegalPage {...legalDocuments.offer} />;
}
