"use client"
import { ButtonRed, ButtonWhite } from "./Buttons"
import HeroPic from "@/public/assets/OurWork/hero-pic.png"
import BlurTL from "@/public/assets/blur-tl.png"
import BlurTR from "@/public/assets/blur-tr.png"
import Image from 'next/image';
import { imgLoadStyles, loadingComplete } from "../utils/imgLoad";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center lg:items-start lg:mt-40 w-full lg:w-1/2 xl:w-140 mb-5 lg:mb-0">
      <h1 className="mainheading mb-2 md:mb-4 lg:mb-6">Our Work</h1>
      <p className="subtext mb-6 md:mb-10 lg:mb-16 text-center lg:text-start">
        Our teams at Cornell Assistive Technologies design adaptive technologies and foster partnerships to expand access to assistive solutions and STEM education
      </p>
      <div className="flex gap-10">
        <ButtonRed label="Our Projects" to="our-projects" behav="Scroll" />
        <ButtonWhite label="Our Events" to="our-events" behav="Scroll" />
      </div>
    </div>
  )
}

const HeroGraphic = () => {
  return (
    <>
      <div className="hidden lg:flex items-center">
        <div className="h-80 w-106">
          <Image src={HeroPic} alt="Cornell Assistive Technologies team member working on the sensory watch project" height={HeroPic.height} width={HeroPic.width}
            className={`rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] origin-right scale-60 lg:scale-75 xl:scale-100 ${imgLoadStyles}`}
            onLoadingComplete={(img) => { loadingComplete(img) }} />
        </div>
      </div>
      <div className="flex lg:hidden items-end justify-center">
        <div className="h-86 w-106 -mb-5 sm:mb-0 origin-bottom scale-50 sm:scale-55 md:scale-60 lg:scale-75 xl:scale-100">
          <Image src={HeroPic} alt="Cornell Assistive Technologies team member working on the sensory watch project" height={HeroPic.height} width={HeroPic.width}
            className={`rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] ${imgLoadStyles}`}
            onLoadingComplete={(img) => { loadingComplete(img) }} />
        </div>
      </div>
    </>
  )
}

const HeroContainer = ({ children }: any) => {
  return (
    <div className="flex flex-col">
      <div className="h-90 sm:h-105 md:h-130 lg:h-140 mt-16 sm:mt-20 md:mt-24 universepad flex flex-col-reverse lg:flex-row justify-between relative overflow-hidden">
        <Image src={BlurTL} alt="" height={BlurTL.height / 2} width={BlurTL.width / 2} className="absolute left-0 top-0 -z-10" />
        <Image src={BlurTR} alt="" height={BlurTL.height / 2} width={BlurTL.width / 2} className="absolute right-0 top-0 -z-10" />
        {children}
      </div>
      <img src="/assets/OurWork/wave-solid-top.svg" className="-z-10" />
      <img src="/assets/OurWork/wave-solid-bottom.svg" className="-z-10 -mt-[0.75px]" />
    </div>
  )
}

export const OurWorkHero = () => {
  return (
    <HeroContainer>
      <HeroText />
      <HeroGraphic />
    </HeroContainer>
  )
}