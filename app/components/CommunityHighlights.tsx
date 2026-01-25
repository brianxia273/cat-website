"use client"

import { useState, useEffect } from "react"
import Pic1 from "@/public/assets/Landing/comm-high-1.png"
import Pic2 from "@/public/assets/Landing/comm-high-2.png"
import Pic3 from "@/public/assets/Landing/comm-high-3.webp"
import Image from 'next/image';
import { ButtonRed, ButtonWhite } from "./Buttons";
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'


interface CommHighProps {
  events: Array<[string, string, string]>;
}

const imgStyles = "drop-shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)] rounded-[20px]"

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


export function CommunityHighlights({ events }: CommHighProps) {
  const [activeTab, setActiveTab] = useState(0);


  function GalleryTabs({ events }: CommHighProps) {
    return (
      <div className="mt-12 flex flex-col gap-14">{
        events.map(([subtitle, descrip, date], index) => {
          return (
            <div key={index} className="flex flex-col cursor-pointer w-124"
              onClick={() => { setActiveTab(index) }}>
              <h3 className={activeTab === index ? "subheading text-text-dk-grey" : "subheading text-text-lt-grey-2"}>{subtitle}</h3>
              <p className={activeTab === index ? "descriptext text-text-grey mt-2 " : "descriptext text-text-lt-grey-2 mt-2 "}>{descrip}</p>
              <p className={activeTab === index ? "descriptext text-text-grey" : "descriptext text-text-lt-grey-2"}>{date}</p>
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


  function CommHighPicsMobile({ events }: CommHighProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
    const pictures = [Pic1, Pic2, Pic3]
    const altDescriptions = [
      "Team photo at Island Conference on Disability and Stem",
      "Team photo at GoBabyGo 2025 at Ithaca College",
      "Team photo at Sciencenter Workshop"
    ]

    useEffect(() => {
      if (!emblaApi) return

      const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap())
      emblaApi.on('select', onSelect)
      onSelect()

      return (): void => { emblaApi.off('select', onSelect) }
    }, [emblaApi])

    function CommHighButtonsMobile() {
      return (
        <div className="flex gap-10 mx-5 sm:gap-20 sm:mx-0 items-center">
          <div className="flex gap-2">
            <ChevronLeftIcon className="h-9 cursor-pointer text-text-grey hover:text-text-dk-grey" onClick={() => emblaApi?.scrollPrev()} />
            <ChevronRightIcon className="h-9 cursor-pointer text-text-grey hover:text-text-dk-grey" onClick={() => emblaApi?.scrollNext()} />
          </div>
          <div className="flex gap-4">
            <ButtonRed label="Visit Our Blog" to="/Blog" size="S" />
            <ButtonWhite label="Join Our Newsletter" to="" size="S" />
          </div>
        </div>
      )
    }


    return (
      <div className="flex flex-col gap-5 items-center w-full">
        <div ref={emblaRef} className="overflow-hidden w-full max-w-full h-90">
          <div className="flex">
            {pictures.map((pic, index) => (
              <div key={index} className="flex-[0_0_60%] min-w-0 flex justify-center relative px-2">
                <div className={`relative w-full max-w-96 h-80 transition-all duration-300 
            ${index === activeIndex ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-50'}`}>
                  <Image
                    src={pic}
                    alt={altDescriptions[index]}
                    fill
                    className={`object-cover ${imgStyles}`}
                    sizes="(max-width: 768px) 100vw, 548px"
                  />
                  <div className={`absolute bottom-0 left-0 bg-text-dk-grey/50 w-full h-28 sm:h-28 rounded-b-[20px] transition-all duration-300 backdrop-blur-sm pl-3 pt-2`}>
                    <h3 className={activeIndex === index ? "subheading text-text-lt-grey" : "subheading text-text-grey-muted"}>{events[index][0]}</h3>
                    <p className={activeIndex === index ? "descriptext text-text-lt-grey-2 mt-2 " : "descriptext text-text-grey-muted mt-2 "}>{events[index][1]}</p>
                    <p className={activeIndex === index ? "descriptext text-text-lt-grey-2 mt-1" : "descriptext text-text-grey-muted"}>{events[index][2]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CommHighButtonsMobile />
      </div>
    )
  }


  return (
    <>
      <div className="lg:hidden w-full h-130 md:h-150 flex flex-col items-center gap-5 mt-10 sm:mt-20">
        <CommHighTitleMobile />
        <CommHighPicsMobile events={events} />
      </div>
      <div className="hidden lg:flex mt-20 h-200 w-full pl-24 justify-between items-center">
        <CommHighText events={events} />
        <CommHighPics activeTab={activeTab} />
      </div>
    </>
  )
}