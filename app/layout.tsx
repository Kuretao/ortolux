import type { Metadata } from "next";

import { Footer } from "@/src/components/Footer/Footer";
import { Header } from "@/src/components/Header/Header";
import { PageMotion } from "@/src/components/PageMotion/PageMotion";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ortolux-matras.ru"),
  title: {
    default: "OrtoLux - ортопедические матрасы и товары для сна",
    template: "%s | OrtoLux",
  },
  description:
    "Интернет-магазин ортопедических матрасов, кроватей, подушек и аксессуаров для сна. Подбор по размеру, жесткости и бюджету.",
  keywords: [
    "ортопедические матрасы",
    "купить матрас",
    "матрасы 160x200",
    "товары для сна",
    "интернет-магазин матрасов",
  ],
  openGraph: {
    title: "OrtoLux - матрасы и товары для здорового сна",
    description:
      "Каталог матрасов, кроватей и аксессуаров с фильтрами, акциями и быстрым подбором.",
    url: "https://ortolux.local",
    siteName: "OrtoLux",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <a className="skip-link" href="#main-content">
          Перейти к основному содержанию
        </a>
        <Header />
        <PageMotion>{children}</PageMotion>
        <Footer />
      </body>
    </html>
  );
}
