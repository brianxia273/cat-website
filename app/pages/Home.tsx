import TextBlock from "../components/TextBlock";

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
  return (
    <TextBlock
      heading={tempCurrentEventsData.heading}
      events={tempCurrentEventsData.events}
    ></TextBlock>
  );
}

