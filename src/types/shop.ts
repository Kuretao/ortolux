export type Category = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  sku: string;
  brand: string;
  category: string;
  size: string;
  firmness: "Мягкий" | "Средний" | "Жесткий" | "Разносторонний";
  height: string;
  weightLimit: string;
  country: string;
  warranty: string;
  stock: "in_stock" | "preorder" | "out_of_stock";
  createdAt: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  badges: string[];
  description: string;
  composition: string[];
  characteristics: Record<string, string>;
  variants: ProductVariant[];
};

export type ProductVariant = {
  id: string;
  size: string;
  firmness: Product["firmness"];
  height: string;
  price: number;
  oldPrice?: number;
  stock: Product["stock"];
  sku: string;
};

export type Brand = {
  id: string;
  title: string;
  country: string;
};

export type BlogArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
};

export type CartLine = {
  productId: string;
  variantId?: string;
  quantity: number;
};

export type Partner = {
  id: string;
  title: string;
  type: string;
  description: string;
};
