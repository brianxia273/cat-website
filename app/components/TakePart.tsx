"use client"

import TakePartPic from "@/public/assets/Landing/takepart.jpg"
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { ButtonRed, ButtonWhite } from "./Buttons";

export function TakePart() {
  return (
    <div className="h-100 w-271 flex gap-10 rounded-[20px] bg-linear-to-b from-theme-lt-red to-bg-lt-grey drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <Image src={TakePartPic} alt="Team photo on Libe Slope" height={TakePartPic.height} width={TakePartPic.width}
        className="h-100 w-auto rounded-l-[20px]" />
      <div className="flex flex-col w-xl">
        <h2 className="ctaheading mt-8">Take Part</h2>
        <p className="subtext mt-4">Be part of a project team making assistive technology more effective, and reach out if you’d like to collaborate or share your ideas</p>
        <div className="flex gap-10 mt-24">
          <ButtonRed label="Join Us" to="/JoinUs" />
          <ButtonWhite label="Contact Us" to="/Contact" />
        </div>
      </div>
    </div>
  )
}