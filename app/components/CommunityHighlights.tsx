"use client"

import { useState } from "react"
import Pic1 from "@/public/assets/Landing/comm-high-1.png"
import Pic2 from "@/public/assets/Landing/comm-high-2.png"
import Pic3 from "@/public/assets/Landing/comm-high-3.webp"
import Image from 'next/image';
import { ButtonRed, ButtonWhite } from "./Buttons";


interface CommHighProps {
  events: Array<[string, string, string]>;
}

export function CommunityHighlights({ events }: CommHighProps) {
  const [activeTab, setActiveTab] = useState(0);

  function GalleryTabs({ events }: CommHighProps) {
    return (
      <div className="mt-12 flex flex-col gap-14">{
        events.map(([subtitle, descrip, date], index) => {
          return (
            <div key={index} className="flex flex-col cursor-pointer w-124"
              onClick={() => { setActiveTab(index) }}>
              <h3 className={`subheading ${activeTab === index ? "text-text-dk-grey" : "text-text-grey-muted"}`}>{subtitle}</h3>
              <p className={`descriptext mt-2 ${activeTab === index ? "text-text-grey" : "text-text-grey-muted"}`}>{descrip}</p>
              <p className={`descriptext ${activeTab === index ? "text-text-grey" : "text-text-grey-muted"}`}>{date}</p>
              <img src="/assets/Landing/line-full.svg" alt="" className={`mt-3 ${activeTab === index ? "" : "opacity-10"}`} />
            </div>
          )
        })}</div>
    )
  }

  function CommHighText({ events }: CommHighProps) {
    return (
      <div className="flex flex-col">
        <h2 className="heading">Community Highlights</h2>
        <GalleryTabs events={events} />
        <div className="flex gap-11 mt-20">
          <ButtonRed label="Visit Our Blog" to="/tabs/Blog" size="M" />
          <ButtonWhite label="Join Our Newsletter" to="" size="M" />
        </div>
      </div>
    )
  }

  function CommHighPics() {
    const pictures = [
      Pic1,
      Pic2,
      Pic3
    ]
    const altDescriptions = [
      "Team photo at Island Conference on Disability and Stem",
      "Team photo at GoBabyGo 2025 at Ithaca College",
      "Team photo at Sciencenter Workshop"
    ]

    const curPic = pictures[activeTab]
    const curAlt = altDescriptions[activeTab]

    return (
      <div className="relative">
        <div className="h-116 w-137 relative">
          <div className="h-100 w-118 relative overflow-hidden rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          hover:scale-102 transition-transform duration-300">
            {/* TODO: Add transitions */}
            <Image
              src={curPic}
              alt={curAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 548px"
            />
          </div>
          <img src="/assets/Landing/triangle.svg" alt="" className="absolute top-0 left-0 rotate-180 -z-10" />
          <img src="/assets/Landing/triangle.svg" alt="" className="absolute bottom-0 right-0 -z-10" />

        </div>
      </div>
    )


  }

  return (
    <div className="h-230 w-full px-20 flex justify-between items-center">
      <CommHighText events={events} />
      <CommHighPics />
    </div>
  )
}