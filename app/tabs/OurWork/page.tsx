import { Navbar } from "@/app/components/Navbar"
import { OurWorkHero } from "@/app/components/OurWorkHero";
import { OurProjects } from "@/app/components/OurProjects";
import { Footer } from "@/app/components/Footer";

export default function OurWork() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <OurWorkHero />
      <OurProjects />
      <Footer />
    </div>
  );
}

