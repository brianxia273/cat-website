import { useState } from "react";

function FundingHeader() {
  //TODO: same as Contact's header. bg with img
}

interface SponsorTierTagProps {
  label: string;
  bullets: string[];
}

function SponsorTierSection({ label, bullets }: SponsorTierTagProps) {
  return (
    <div className="flex flex-col">
      {/* Red tag */}
      <div className="TODO">{label}</div>
      <ul>
        {bullets.map((item, index) => {
          return <li key={`${label}-bullet-${index}`}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

type Tabs = "Sponsorship" | "Donation";

export function FundingPage() {
  const [tab, setTab] = useState<Tabs>("Sponsorship");

  function SponsorshipPage() {
    return (
      <div>
        {/* text section */}
        <div className="flex flex-col">
          <p>Your generous....</p>
          <div className="flex flex-col gap-TODO">
            <SponsorTierSection label="" bullets={[]} />
            <SponsorTierSection label="" bullets={[]} />
            <SponsorTierSection label="" bullets={[]} />
            <SponsorTierSection label="" bullets={[]} />
          </div>
          <p>Email...</p>
        </div>
      </div>
    );
  }

  function DonationPage() {
    return <div></div>;
  }

  return (
    <div>{tab === "Sponsorship" ? <SponsorshipPage /> : <DonationPage />}</div>
  );
}