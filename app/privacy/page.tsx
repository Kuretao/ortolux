import type { Metadata } from "next";

import { legalDocuments } from "@/src/data/legal";
import { LegalPage } from "@/src/sections/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности OrtoLux: обработка персональных данных покупателей, cookie, аналитика и передача данных службам доставки.",
};

export default function Page() {
  return <LegalPage {...legalDocuments.privacy} />;
}
