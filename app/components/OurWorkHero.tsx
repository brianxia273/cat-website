import { ButtonRed, ButtonWhite } from "./Buttons"
import HeroPic from "@/public/assets/OurWork/hero-pic.png"
import BlurTL from "@/public/assets/blur-tl.png"
import BlurTR from "@/public/assets/blur-tr.png"
import Image from 'next/image';

const HeroText = () => {
  return (
    <div className="flex flex-col mt-40">
      <h1 className="heading w-140 mb-6">Our Work</h1>
      <h2 className="subtext w-140 mb-16">
        Our teams at Cornell Assistive Technologies design adaptive technologies and foster partnerships to expand access to assistive solutions and STEM education
      </h2>
      <div className="flex gap-10">
        <ButtonRed label="Our Projects" to="/tabs/OurWork" />
        <ButtonWhite label="Our Events" to="/tabs/OurWork" />
      </div>
    </div>
  )
}

const HeroGraphic = () => {
  return (
    <Image src={HeroPic} alt="Cornell Assistive Technologies team member working on the sensory watch project" height={HeroPic.height} width={HeroPic.width}
      className="mt-36 h-80 w-auto rounded-[20px] hover:scale-102 transition-transform duration-300 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" />
  )
}

const HeroContainer = ({ children }: any) => {
  return (
    <div className="flex flex-col">
      <div className="h-140 mt-24 px-24 flex justify-between relative overflow-hidden">
        <Image src={BlurTL} alt="" height={BlurTL.height / 2} width={BlurTL.width / 2} className="absolute left-0 top-0 -z-10" />
        <Image src={BlurTR} alt="" height={BlurTL.height / 2} width={BlurTL.width / 2} className="absolute right-0 top-0 -z-10" />
        {children}
      </div>
      <img src="/assets/OurWork/wave-solid-top.svg" className="-z-10" />
      <img src="/assets/OurWork/wave-solid-bottom.svg" className="-z-10" />
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