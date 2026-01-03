import TextBlock from "../../components/TextBlock";
import { AboutTeams } from "../../components/AboutTeams";
import { Navbar } from "../../components/Navbar"
import { LandingHero } from "../../components/LandingHero"
import { Mission } from "@/app/components/Mission";

// const tempCurrentEventsData = {
//   heading: "Current Events",
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

      {/* <AboutTeams />
      <TextBlock
        heading={tempCurrentEventsData.heading}
        events={tempCurrentEventsData.events}
      ></TextBlock> */}
    </div>

  );
}

