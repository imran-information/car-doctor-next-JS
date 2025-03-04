import AboutUsSection from "./components/AboutUsSection";
import InfoSection from "./components/InfoSection";
import PopularProducts from "./components/PopularProducts";
import ServiceSection from "./components/ServiceSection";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUsSection />
      <ServiceSection />
      <InfoSection />
      <PopularProducts />
    </>
  );
}
