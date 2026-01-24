import { Navbar } from "@/app/components/Navbar"
import { LandingHero } from "@/app/components/LandingHero"
import { CommunityHighlights } from "@/app/components/CommunityHighlights";
import { PartnersAndSponsors } from "@/app/components/PartnersAndSponsors";
import { TakePart } from "@/app/components/TakePart";
import { Footer } from "@/app/components/Footer";
import { Mission } from "@/app/components/Mission";
import { UnderConstructionPopup } from "../components/UnderConstructionPopup";

const curEvents: Array<[string, string, string]> = [
  ["Island Conference on Disability and Stem", "The Inclusion in Science Learning Conference", "09/26/2025"],
  ["GoBabyGo! 2025 at Ithaca College", "Adapting toy cars for children with motor disabilities", "04/12/2025"],
  ["Sciencenter Workshop", "Circuit workshop to make LED art", "03/22/2025"],
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
      <div className="flex justify-center mb-25">
        <TakePart />
      </div>
      <Footer />
    </div>
  );
}

