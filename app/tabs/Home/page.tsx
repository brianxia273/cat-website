import TextBlock from "../../components/TextBlock";
import { AboutTeams } from "../../components/AboutTeams";
import { useRouter } from "next/navigation";


const tempCurrentEventsData = {
  heading: "Current Events",
  events: [
    [
      "Subheading",
      "Body text for whatever youd like to expand on the main point. ",
    ],
    [
      "Subheading",
      "Body text for whatever youd like to expand on the main point. ",
    ],
    [
      "Subheading",
      "Body text for whatever youd like to expand on the main point. ",
    ],
  ] as [string, string][],
};

export default function Home() {

  const router = useRouter();
  return (
    <div>
      <TextBlock
        heading={tempCurrentEventsData.heading}
        events={tempCurrentEventsData.events}
      ></TextBlock>
      <AboutTeams />
      <button onClick={() => { router.push("/tabs/JoinUs") }}>bruhhhh</button>
    </div>

  );
}

