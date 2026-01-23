"use client"

import TakePartPic from "@/public/assets/Landing/takepart.jpg"
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { ButtonRed, ButtonWhite } from "./Buttons";


export function TakePart() {
  return (
    <div className="h-110.25 w-full relative flex justify-center items-center universepad">
      <div className="rounded-[20px] h-97 w-full flex flex-col justify-between bg-[linear-gradient(135deg,#FFFFFF_36%,#F5C6CB_60%,#D22333_100%)]
      drop-shadow-[0_-2px_4px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)] pl-15">
        <div className="flex flex-col">
          <h2 className="mainheading mt-10">Take Part in Our Work</h2>
          <p className="subtext w-2/3 mt-5">Be part of a project team making assistive technology more effective, and reach out if you’d like to collaborate or share your ideas</p>
        </div>
        <div className="flex mb-10 gap-10">
          <ButtonRed label="Join Us" to="/JoinUs" />
          <ButtonWhite label="Contact Us" to="/Contact" />
        </div>
      </div>
      <img src="/assets/Landing/takepart-square-l.svg" alt="" className="absolute -top-2 left-30 z-10" />
      <img src="/assets/Landing/takepart-square-r.svg" alt="" className="absolute -rotate-60 -top-15 left-42 z-10" />
    </div>
  )
}


