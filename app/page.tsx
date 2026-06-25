import { BrandVideoStats } from "@/src/sections/BrandVideoStats/BrandVideoStats";
import { HomeGsap } from "@/src/components/HomeGsap/HomeGsap";
import { HomeCategories } from "@/src/sections/HomeCategories/HomeCategories";
import { LiveBlog } from "@/src/sections/LiveBlog/LiveBlog";
import { MarketplaceHero } from "@/src/sections/MarketplaceHero/MarketplaceHero";
import { PopularProducts } from "@/src/sections/PopularProducts/PopularProducts";
import { VideoSubscribe } from "@/src/sections/VideoSubscribe/VideoSubscribe";
import { products } from "@/src/data/shop";

export default function Home() {
  const popularProducts = [...products].sort((a, b) => b.reviews - a.reviews);

  return (
    <main className="page-main" id="main-content">
      <HomeGsap />
      <MarketplaceHero />
      <HomeCategories />
      <PopularProducts products={popularProducts} />
      <LiveBlog />
      <VideoSubscribe />
      <BrandVideoStats />
    </main>
  );
}
