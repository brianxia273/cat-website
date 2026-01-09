import { Navbar } from "@/app/components/Navbar"
import { LandingHero } from "@/app/components/LandingHero"
import { Mission } from "@/app/components/Mission";
import { CommunityHighlights } from "@/app/components/CommunityHighlights";
import { PartnersAndSponsors } from "@/app/components/PartnersAndSponsors";

const curEvents: Array<[string, string, string]> = [
  ["Island Conference on Disability and Stem", "Short Description", "Date"],
  ["GoBabyGo! 2025 at Ithaca College", "Short Description", "Date"],
  ["Sciencenter Workshop", "Short Description", "Date"],
]

export default function Home() {

  return (
    <div>
      <Navbar />
      <LandingHero />
      <Mission />
      <CommunityHighlights events={curEvents} />
      <PartnersAndSponsors />
    </div>

  );
}

