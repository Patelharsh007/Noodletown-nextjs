import StaticHeroLayout from "@/components/home/StaticHeroLayout";
import BestDelievered from "@/section/home/BestDelievered";
import DiningOut from "@/section/home/DiningOut";
import HeroSection from "@/section/home/HeroSection";

export default function Home() {
  return (
    <>
      <StaticHeroLayout>
        <HeroSection />
      </StaticHeroLayout>
      <DiningOut />
      <BestDelievered />
      Home page
    </>
  );
}
