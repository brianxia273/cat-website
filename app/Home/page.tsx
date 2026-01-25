import { Navbar } from "@/app/components/Navbar"
import { LandingHero } from "@/app/components/LandingHero"
import { CommunityHighlights } from "@/app/components/CommunityHighlights";
import { PartnersAndSponsors } from "@/app/components/PartnersAndSponsors";
import { TakePart } from "@/app/components/TakePart";
import { Footer } from "@/app/components/Footer";
import { Mission } from "@/app/components/Mission";
import { UnderConstructionPopup } from "../components/UnderConstructionPopup";

const curEvents: Array<[string, string, string]> = [
  ["ISLAND Conference", "Inclusion in Science Learning Conference", "09/26/2025"],
  ["GoBabyGo! 2025", "Adapting toy cars for children with motor disabilities", "04/12/2025"],
  ["Sciencenter Workshop", "Hands-on circuit workshop to make LED art", "03/22/2025"],
]

export default function Home() {

  return (
    <div>
      <UnderConstructionPopup />
      <Navbar />
      <LandingHero />
      <Mission />
      <CommunityHighlights events={curEvents} />
      <PartnersAndSponsors />
      <div className="flex justify-center mb-0 sm:mb-10 lg:mb-20">
        <TakePart />
      </div>
      <Footer />
    </div>
  );
}


// Phones
// 375 × 667
// 414 × 896

// Tablets and IPads
// 768 × 1024
// 1024 × 768

// Laptops
// 1280 × 800
// 1366 × 768

// Desktops and monitors
// 1920 × 1080
// 2560 × 1440