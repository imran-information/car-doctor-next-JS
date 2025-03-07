import AboutUsSection from "./components/AboutUsSection";
import CoreFeatures from "./components/CoreFeatures";
import InfoSection from "./components/InfoSection";
import PopularProducts from "./components/PopularProducts";
import ServiceSection from "./components/ServiceSection";
import Slider from "./components/Slider";
import TeamSection from "./components/TeamSection";
import TestimonialSection from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUsSection />
      <ServiceSection />
      <InfoSection />
      <PopularProducts />
      <TeamSection />
      <CoreFeatures />
      <TestimonialSection />
    </>
  );
}
