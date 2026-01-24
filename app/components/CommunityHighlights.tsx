"use client"

import { useState, useEffect } from "react"
import Pic1 from "@/public/assets/Landing/comm-high-1.png"
import Pic2 from "@/public/assets/Landing/comm-high-2.png"
import Pic3 from "@/public/assets/Landing/comm-high-3.webp"
import Image from 'next/image';
import { ButtonRed, ButtonWhite } from "./Buttons";
import useEmblaCarousel from 'embla-carousel-react'


interface CommHighProps {
  events: Array<[string, string, string]>;
}

const imgStyles = "drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] rounded-[20px]"

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

  const scaleStyles = "scale-80 xl:scale-100 origin-right"
  const bgScaleStyles = "scale-x-80 xl:scale-x-100 origin-right"

  return (
    <div className="h-140 w-161 relative">
      <div className={`h-100 w-118 absolute overflow-hidden top-1/2 right-17.5 xl:right-28 -translate-y-1/2 z-10 ${imgStyles} ${scaleStyles}`}>
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
      <img src="/assets/Landing/com-frame.svg" alt="" className={`absolute top-1/2 right-14.5 xl:right-24 -translate-y-1/2 w-126 min-w-126 h-auto ${scaleStyles}`} />
      <img src="/assets/Landing/com-bg.svg" alt="" className={`absolute -top-20 right-0 -z-10 h-160 ${bgScaleStyles}`} />
    </div>
  )
}


function CommHighTitleMobile() {
  return (
    <h2 className="heading">Community Highlights</h2>
  )
}

function CommHighButtonsMobile() {
  return (
    <div className="flex gap-5 items-center">
      <ButtonRed label="Visit Our Blog" to="/Blog" size="M" />
      <ButtonWhite label="Join Our Newsletter" to="" size="M" />
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
              <img src="/assets/Landing/line-full.svg" alt="" className={`mt-3 w-100 ${activeTab === index ? "" : "opacity-10"}`} />
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


  function CommHighPicsMobile() {
    const pictures = [Pic1, Pic2, Pic3]
    const altDescriptions = [
      "Team photo at Island Conference on Disability and Stem",
      "Team photo at GoBabyGo 2025 at Ithaca College",
      "Team photo at Sciencenter Workshop"
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })

    useEffect(() => {
      if (!emblaApi) return

      const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap())
      emblaApi.on('select', onSelect)
      onSelect()

      return (): void => { emblaApi.off('select', onSelect) }
    }, [emblaApi])

    return (
      <div ref={emblaRef} className="overflow-hidden w-full h-90">
        <div className="flex">
          {pictures.map((pic, index) => (
            <div key={index} className="flex-[0_0_60%] flex justify-center relative">
              <div className={`relative w-96 h-80 transition-all duration-300 
                ${index === activeIndex ? 'scale-100 opacity-100' : 'scale-80 opacity-70'}`}>
                <Image
                  src={pic}
                  alt={altDescriptions[index]}
                  fill
                  className={`object-cover ${imgStyles}`}
                  sizes="(max-width: 768px) 100vw, 548px"
                />
              </div>
              <div className={`absolute bottom-0 bg-amber-200 w-96 h-20 rounded-b-[20px] transition-all duration-300 
                 ${index === activeIndex ? 'scale-100 opacity-100' : 'scale-80 opacity-70'}`}></div>
            </div>
          ))}
        </div>
      </div>
    )
  }


  return (
    <>
      <div className="lg:hidden w-full h-200 flex flex-col items-center gap-5 mt-20">
        <CommHighTitleMobile />
        <CommHighPicsMobile />
        <CommHighButtonsMobile />
      </div>
      <div className="hidden lg:flex mt-20 h-200 w-full pl-24 justify-between items-center">
        <CommHighText events={events} />
        <CommHighPics activeTab={activeTab} />
      </div>
    </>
  )
}