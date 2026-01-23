"use client"

import TakePartPic from "@/public/assets/Landing/takepart.jpg"
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { ButtonRed, ButtonWhite } from "./Buttons";

//   const centered = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"

export function TakePart() {
  return (
    <div className="h-110.25 w-full relative flex justify-center items-center">
      {/* Todo: align textbox with svg */}
      <img src="/assets/Landing/takepart-bg.svg" alt=""
        className="rounded-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 universepad drop-shadow-[0_-2px_4px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)]" />
      <div className="rounded-[20px] h-97 w-348 z-10 flex flex-col justify-between universepad ml-20">
        <div className="flex flex-col">
          <h2 className="mainheading mt-8">Take Part in Our Work</h2>
          <p className="subtext w-2/3 mt-5">Be part of a project team making assistive technology more effective, and reach out if you’d like to collaborate or share your ideas</p>
        </div>
        <div className="flex mb-12 gap-10">
          <ButtonRed label="Join Us" to="/JoinUs" />
          <ButtonWhite label="Contact Us" to="/Contact" />
        </div>
      </div>
      <img src="/assets/Landing/takepart-square-l.svg" alt="" className="absolute -top-2 left-30" />
      <img src="/assets/Landing/takepart-square-r.svg" alt="" className="absolute -rotate-60 -top-15 left-42" />
    </div>
  )
}


{/* <div className="h-100 w-271 flex gap-10 rounded-[20px] bg-linear-to-b from-theme-lt-red to-bg-lt-grey drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
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
    </div> */}