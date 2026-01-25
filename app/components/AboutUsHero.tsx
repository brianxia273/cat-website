import { ButtonRed, ButtonWhite } from "./Buttons"
import HeroPic from "@/public/assets/AboutUs/hero-pic.png"
import BlurTL from "@/public/assets/blur-tl.png"
import BlurTR from "@/public/assets/blur-tr.png"
import BlurM from "@/public/assets/blur-m.png"
import Image from 'next/image';

const HeroText = () => {
  return (
    <div className="flex flex-col w-full lg:w-1/2 lg:mt-40 mb-20">
      <h1 className="mainheading mb-4 md:mb-6">About Us</h1>
      <p className="subtext mb-8 md:mb-14 text-base md:text-lg">
        Founded in Fall 2021, the Cornell Assistive Technologies Project Team is a Cornell Engineering Student Project team that has the main goal of making assistive technologies more accessible to the special needs community in Ithaca and beyond. Meet the members of our dedicated and passionate team below!</p>
      <ButtonRed label="Join Us" to="/JoinUs" />
    </div>
  )
}

const HeroGraphic = () => {
  return (
    <div className="flex justify-center md:justify-end w-full lg:w-1/2 min-w-64 md:min-w-80">
      <Image src={HeroPic} alt="Cornell Assistive Technologies team photo" height={HeroPic.height} width={HeroPic.width}
        className="mt-42 xl:h-100 xl:w-auto md:scale-80 lg:scale-90 xl:scale-100 rounded-[20px] hover:scale-102 transition-transform duration-300 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" />
    </div>
  )
}

const HeroContainer = ({ children }: any) => {
  return (
    <div className="flex flex-col xl:mt-15">
      <div className="h-auto min-h-96 lg:h-180 universepad flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 md:gap-8 lg:gap-16 relative">
        <Image src={BlurTL} alt="" height={BlurTL.height / 2} width={BlurTL.width / 2} className="absolute left-0 top-0 -z-10 " />
        <Image src={BlurTR} alt="" height={BlurTR.height} width={BlurTR.width} className="absolute right-0 top-0 -z-10 " />
        <Image src={BlurM} alt="" height={BlurM.height} width={BlurM.width} className="absolute left-1/2 -translate-x-1/2 top-110 -z-10 " />
        {children}
      </div>
    </div>
  )
}

export const AboutUsHero = () => {
  return (
    <HeroContainer>
      <HeroGraphic />
      <HeroText />
    </HeroContainer>
  )
}