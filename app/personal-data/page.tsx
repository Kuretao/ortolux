import type { Metadata } from "next";

import { legalDocuments } from "@/src/data/legal";
import { LegalPage } from "@/src/sections/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  description:
    "Согласие на обработку персональных данных при регистрации, заявке и оформлении заказа в интернет-магазине OrtoLux.",
};

export default function Page() {
  return <LegalPage {...legalDocuments.consent} />;
}
