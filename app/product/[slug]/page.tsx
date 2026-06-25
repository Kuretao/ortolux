import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/src/data/shop";
import { ProductDetails } from "@/src/sections/ProductDetails/ProductDetails";
import { formatPrice } from "@/src/utils/format";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Товар не найден",
    };
  }

  return {
    title: `${product.title} ${product.size}`,
    description: `${product.title}: ${product.firmness.toLowerCase()} матрас ${product.size}, высота ${product.height}, цена ${formatPrice(product.price)}.`,
  };
}

export default async function Page({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
