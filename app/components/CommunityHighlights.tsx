import { useState } from "react"
import Pic1 from "@/public/assets/Landing/comm-high-1.png"
import Pic2 from "@/public/assets/Landing/comm-high-2.png"
import Pic3 from "@/public/assets/Landing/comm-high-3.webp"
import BlurM from "@/public/assets/Landing/blur-m.png"
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
              <img src="/assets/Landing/line-full.svg" alt="" className={`mt-4 ${activeTab === index ? "" : "opacity-10"}`} />
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
        <div className="flex gap-11 mt-15">
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
        <Image src={BlurM} alt="" fill className="absolute object-cover left-0 top-0 scale-150" />
        <div className="h-116 w-137 relative overflow-hidden rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          {/* TODO: Add transitions */}
          <Image
            src={curPic}
            alt={curAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 548px"
          />
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