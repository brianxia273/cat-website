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

function CommHighPics({ activeTab }: { activeTab: number }) {
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

  return (
    <div className="h-140 w-161 relative">
      <div className="h-100 w-118 absolute overflow-hidden rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] top-1/2 right-28 -translate-y-1/2
          hover:scale-102 transition-transform duration-300 z-10">
        {pictures.map((pic, index) => {
          return (
            <Image
              key={`picture-${index}`}
              src={pic}
              alt={altDescriptions[index]}
              fill
              className={`object-cover transition-opacity duration-500 ease-in-out 
              ${activeTab === index ? "opacity-100" : "opacity-0"}`}
              sizes="(max-width: 768px) 100vw, 548px"
            />
          )
        })}
      </div>
      <img src="/assets/Landing/com-frame.svg" alt="" className="absolute top-1/2 right-24 -translate-y-1/2 w-126 h-auto" />
      <img src="/assets/Landing/com-bg.svg" alt="" className="absolute -top-20 right-0 -z-10 h-160" />
    </div>
  )
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
              <h3 className={activeTab === index ? "subheading text-text-dk-grey" : "subheading text-text-grey-muted"}>{subtitle}</h3>
              <p className={activeTab === index ? "descriptext text-text-grey mt-2 " : "descriptext text-text-grey-muted mt-2 "}>{descrip}</p>
              <p className={activeTab === index ? "descriptext text-text-grey" : "descriptext text-text-grey-muted"}>{date}</p>
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
          <ButtonRed label="Visit Our Blog" to="/Blog" size="M" />
          <ButtonWhite label="Join Our Newsletter" to="" size="M" />
        </div>
      </div>
    )
  }



  return (
    <div className="mt-20 h-200 w-full pl-24 flex justify-between items-center">
      <CommHighText events={events} />
      <CommHighPics activeTab={activeTab} />
    </div>
  )
}