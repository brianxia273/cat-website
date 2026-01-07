import { Navbar } from "@/app/components/Navbar"
import { LandingHero } from "@/app/components/LandingHero"
import { Mission } from "@/app/components/Mission";
import { CommunityHighlights } from "@/app/components/CommunityHighlights";

// const tempCurrentEventsData = {
//   events: [
//     [
//       "Subheading",
//       "Body text for whatever youd like to expand on the main point. ",
//     ],
//     [
//       "Subheading",
//       "Body text for whatever youd like to expand on the main point. ",
//     ],
//     [
//       "Subheading",
//       "Body text for whatever youd like to expand on the main point. ",
//     ],
//   ] as [string, string][],
// };

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
    </div>

  );
}

