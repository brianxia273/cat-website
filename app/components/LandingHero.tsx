import { ButtonRed } from "./Buttons"
import HeroPic from "@/public/assets/Landing/hero-pic-full.jpg"
import BlurTL from "@/public/assets/blur-tl.png"
import BlurTR from "@/public/assets/blur-tr.png"
import Image from 'next/image';

const HeroText = () => {
  return (
    <div className="flex flex-col mt-35">
      <h1 className="mainheading w-140 mb-6">Making Assistive Technologies Accessible for All</h1>
      <p className="subtext w-140 mb-16">We create assistive technologies and teach inclusive design to empower communities in Ithaca and beyond.</p>
      <ButtonRed label="Explore Our Work" to="/OurWork" />
    </div>
  )
}

const HeroGraphic = () => {
  return (
    <div className="relative w-131.5 h-full">
      {/* No alts for decoration */}
      <img src="/assets/Landing/hero-blob-solid.svg" alt="" className="absolute left-9.25 top-32" />
      <img src="/assets/Landing/hero-blob-clear.svg" alt="" className="absolute left-0 top-29" />
      <Image src={HeroPic} alt="Cornell Assistive Technologies team member helping a student" height={HeroPic.height} width={HeroPic.width}
        className="h-78 w-111 rounded-[1000px] absolute left-15 top-47.5 hover:scale-102 transition-transform duration-300 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" />
      <img src="/assets/Landing/hero-square-bl.svg" alt="" className="absolute left-39 top-130" />
      <img src="/assets/Landing/hero-square-tl.svg" alt="" className="absolute left-45.75 top-0" />
      <img src="/assets/Landing/hero-circle-br.svg" alt="" className="absolute left-93.25 top-112.25 -z-10" />
      <img src="/assets/Landing/hero-circle-tr.svg" alt="" className="absolute left-99 top-20.5" />
    </div>
  )
}

const HeroContainer = ({ children }: any) => {
  return (
    <div className="flex mt-24 universepad justify-between relative overflow-hidden h-175">
      <Image src={BlurTL} alt="" height={BlurTL.height / 3} width={BlurTL.width / 3} className="absolute left-0 top-0 -z-10" />
      <Image src={BlurTR} alt="" height={BlurTR.height / 2} width={BlurTR.width / 2} className="absolute right-0 top-0 -z-10" />
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