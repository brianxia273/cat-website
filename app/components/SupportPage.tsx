"use client"
import { useState } from "react";
import { ButtonRed } from "./Buttons";
import SponsorImg from "@/public/assets/Support/sponsor-img.png"
import Image from "next/image";
import BlurTR from "@/public/assets/blur-tr.png"


interface SponsorTierTagProps {
  label: string;
  bullets: string[];
}

const centered = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"


function SponsorTierSection({ label, bullets }: SponsorTierTagProps) {
  return (
    <div className="flex flex-col">
      {/* Red tag */}
      <div className="rounded-lg bg-theme-white text-theme-red font-semibold text-xl border-2
      h-12 w-100 flex items-center justify-center">{label}</div>
      <ul className="pl-5 mt-2">
        {bullets.map((item, index) => {
          return <li key={`${label}-bullet-${index}`} className="subtext list-disc list-outside">{item}</li>;
        })}
      </ul>
    </div>
  );
}

function SponsorGraphic() {
  return (
    <div className="relative w-120 h-100">
      <img src="/assets/Support/sponsor-blob.svg" alt="" className={`w-120 ${centered}`} />
      <Image src={SponsorImg} alt="The team working on adapting a toy car at a community event"
        className={`h-90 w-auto rounded-[20px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] hover:scale-102 transition-transform duration-300 right-0 top-0 ${centered}`} />
    </div>
  )
}

type Tabs = "Sponsorship" | "Donation";
const tabStyles = "w-50 h-13 rounded-t-[15px] text-theme-red font-medium text-xl cursor-pointer"
const selectedTabStyles = `${tabStyles} bg-theme-white`
const unselectedTabStyles = `${tabStyles} bg-theme-grey`


export function SupportPage() {
  const [tab, setTab] = useState<Tabs>("Sponsorship");

  function FundingTabs({ className }: { className?: string }) {
    return (
      <div className={`flex ${className}`}>
        <button className={tab === "Sponsorship" ? selectedTabStyles : unselectedTabStyles}
          onClick={() => { setTab("Sponsorship") }}>Sponsorship</button>
        <button className={tab === "Donation" ? selectedTabStyles : unselectedTabStyles}
          onClick={() => { setTab("Donation") }}>Donation</button>
      </div>
    )
  }
  function FundingHeader() {
    return (
      <div className="h-65 w-full bg-linear-to-l from-theme-dk-red to-theme-red flex flex-col gap-3 mt-24 universepad pt-12 relative">
        <h1 className="whitemainheading">Support</h1>
        <p className="whitesubheading">Thank you for your support of our initiative! You can support us by sponsoring us or making a donation.</p>
        <FundingTabs className="absolute -bottom-1 left-24" />
      </div>
    )
  }
  function SponsorshipPage() {
    return (
      <div className="bg-theme-white z-10 h-320 universepad relative">
        {/* text section */}
        <div className="flex flex-col">
          <p className="subtext mt-12 w-280">Your sponsorship supports Cornell Assistive
            Technologies’ mission to enhance inclusivity through innovative
            design. Contributions help offset the costs of our student-led projects and community outreach initiatives, each designed to meet the unique needs of individuals with disabilities.</p>
          <p className="subtext mt-5">You can support us as a Program Partner at any level, or
            by sponsoring a specific initiative.</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-10 mt-12">
              <SponsorTierSection label="Supporter Tier: $500 - $3499" bullets={["Website logo placement", "CAT swag pack"]} />
              <SponsorTierSection label="Advocate Tier - $3500" bullets={["Supporter Tier benefits", "Exclusive access to our project portfolio", "Brand recognition at a community event"]} />
              <SponsorTierSection label="Champion Tier - $5000" bullets={["Advocate Tier benefits", "Brand recognition at a resume workshop", "Opportunity to host a showcase session", "Access to the CAT resume book"]} />
              <SponsorTierSection label="Visionary Tier - $6500+" bullets={["Champion Tier benefits", "Recognition as a top sponsor with logo on CAT merchandise", "Opportunity to co-host a professional development workshop"]} />
            </div>
            <SponsorGraphic />
          </div>
          <p className="subtext mt-12 mb-4">To become a sponsor, download and submit the sponsorship packet by mail, then email us at <a href="mailto:assistivetech@cornell.edu" className="underline underline-offset-2">cornellassist@gmail.com </a> to confirm your sponsorship.</p>
          <ButtonRed label="View Sponsor Packet" to="/assets/Support/CAT%202025%20Fall%20Sponsorship.pdf" behav="External" />
          <p className="mt-6 text-sm text-text-dk-grey">*Email Cornell Assistive Technologies at cornellassist@gmail.com for custom tier options</p>
        </div>
        <Image src={BlurTR} alt="" height={BlurTR.height / 2} width={BlurTR.width / 2} className="absolute right-0 top-0" />
      </div>
    );
  }

  function DonationPage() {
    return <div className="bg-theme-white z-10 h-50">

    </div>;
  }

  return (
    <div className="flex flex-col">
      <FundingHeader />
      {tab === "Sponsorship" ? <SponsorshipPage /> : <DonationPage />}
    </div>
  );
} 