import AboutUsSection from "./components/AboutUsSection";
import InfoSection from "./components/InfoSection";
import ServiceSection from "./components/ServiceSection";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUsSection />
      <ServiceSection />
      <InfoSection />
    </>
  );
}
