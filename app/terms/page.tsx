import type { Metadata } from "next";

import { legalDocuments } from "@/src/data/legal";
import { LegalPage } from "@/src/sections/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Пользовательское соглашение",
  description:
    "Пользовательское соглашение OrtoLux: правила использования сайта, каталога, личного кабинета и оформления заказов.",
};

export default function Page() {
  return <LegalPage {...legalDocuments.terms} />;
}
