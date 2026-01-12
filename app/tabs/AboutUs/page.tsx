import { Navbar } from "@/app/components/Navbar"
import { AboutUsHero } from "@/app/components/AboutUsHero";
import { Footer } from "@/app/components/Footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <AboutUsHero />
      <Footer />
    </div>
  );
}