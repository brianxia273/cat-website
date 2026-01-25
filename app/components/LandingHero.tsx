"use client"
import { ButtonRed } from "./Buttons"
import HeroPic from "@/public/assets/Landing/hero-pic-full.jpg"
import BlurTL from "@/public/assets/blur-tl.png"
import BlurTR from "@/public/assets/blur-tr.png"
import Image from 'next/image';
import { loadingComplete, imgLoadStyles } from "../utils/imgLoad";
import { useEffect } from "react"

const HeroText = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start mt-10 lg:max-w-[50%] lg-mt-0">
      <h1 className="mainheading w-full mb-6 text-center lg:text-left">Making Assistive Technologies Accessible for All</h1>
      <p className="subtext w-full mb-10 lg:mb-16 text-center lg:text-left">We create assistive technologies and teach inclusive design to empower communities in Ithaca and beyond.</p>
      <ButtonRed label="Explore Our Work" to="/OurWork" />
    </div>
  )
}

const HeroGraphic = () => {
  const detailScaleStyles = "xl:origin-right scale-40 sm:scale-50 lg:scale-70 xl:scale-80"

  return (
    <div className="w-full h-full flex justify-center lg:contents">
      <div className={`relative w-150 h-140 ${detailScaleStyles} mt-20 sm:mt-45 -ml-15 lg:ml-0 lg:mt-0`}>
        {/* No alts for decoration */}
        <img src="/assets/Landing/hero-blob-solid.svg" alt="" className={`absolute left-24.25 top-32`} />
        <img src="/assets/Landing/hero-blob-clear.svg" alt="" className={`absolute left-17 top-29`} />
        <Image src={HeroPic} alt="Cornell Assistive Technologies team member helping a student" height={310} width={466}
          className={`absolute left-32 top-48 rounded-[1000px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] ${imgLoadStyles}`}

          onLoadingComplete={(img) => { loadingComplete(img) }} />
        <img src="/assets/Landing/hero-group.svg" alt="" className={`scale-80 sm:scale-100 absolute left-40 -z-10`} />
      </div>
    </div>
  )
}

const HeroContainer = ({ children }: any) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mt-24 universepad justify-between relative overflow-hidden h-110 sm:h-150 mb-20 lg:mb-0 lg:h-175">
      <Image src={BlurTL} alt="" height={BlurTL.height / 3} width={BlurTL.width / 3} className="absolute left-0 top-0 -z-10" />
      <Image src={BlurTR} alt="" height={BlurTR.height / 1.5} width={BlurTR.width / 1.5} className="absolute right-0 top-0 -z-10" />
      {children}
    </div>
  )
}

export const LandingHero = () => {
  return (
    <HeroContainer>
      <HeroText />
      <HeroGraphic />
    </HeroContainer>
  )
}