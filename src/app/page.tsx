import StaticHeroLayout from "@/components/home/StaticHeroLayout";
import BestDelievered from "@/section/home/BestDelievered";
import DiningOut from "@/section/home/DiningOut";
import Footer from "@/section/home/Footer";
import HeroSection from "@/section/home/HeroSection";
import HomePageImages from "@/section/home/HomePageImages";
import InstagramBox from "@/section/home/InstagramBox";
import ItemCarosuel from "@/section/home/ItemCarosuel";

export default function Home() {
  return (
    <>
      <StaticHeroLayout>
        <HeroSection />
      </StaticHeroLayout>
      <DiningOut />
      <BestDelievered />
      <ItemCarosuel />
      <InstagramBox />
      <HomePageImages />
      <Footer />
    </>
  );
}
