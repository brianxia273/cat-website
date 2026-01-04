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

export default function Home() {

  return (
    <div>
      <Navbar />
      <LandingHero />
      <Mission />
      <CommunityHighlights events={[]} />
    </div>

  );
}

