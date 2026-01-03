import { ButtonRed } from "./Buttons"
import HeroPic from "@/public/assets/Landing/hero-pic.png"
import BlurM from "@/public/assets/Landing/blur-m.png"
import BlurTL from "@/public/assets/Landing/blur-tl.png"
import BlurTR from "@/public/assets/Landing/blur-tr.png"
import Image from 'next/image';

const HeroText = () => {
  return (
    <div className="flex flex-col mt-40">
      <h1 className="heading w-140 mb-6">Making Assistive Technologies Accessible for All</h1>
      <h2 className="subheading w-140 mb-16">We create assistive technologies and teach inclusive design to empower communities in Ithaca and beyond.</h2>
      <ButtonRed label="Explore Our Work" to="/tabs/OurWork" />
    </div>
  )
}

const HeroGraphic = () => {
  return (
    <div className="relative w-131.5 h-full">
      {/* No alts for decoration */}
      <img src="/assets/Landing/hero-blob-solid.svg" alt="" className="absolute left-9.25 top-32" />
      <img src="/assets/Landing/hero-blob-clear.svg" alt="" className="absolute left-0 top-29" />
      <Image src={HeroPic} alt="Cornell Assistive Technologies team member helping a student" height={HeroPic.height} width={HeroPic.width} className="absolute left-15 top-47.5" />
      <img src="/assets/Landing/hero-square-bl.svg" alt="" className="absolute left-39 top-134" />
      <img src="/assets/Landing/hero-square-tl.svg" alt="" className="absolute left-45.75 top-0" />
      <img src="/assets/Landing/hero-circle-br.svg" alt="" className="absolute left-93.25 top-112.25" />
      <img src="/assets/Landing/hero-circle-tr.svg" alt="" className="absolute left-99 top-20.5" />
    </div>
  )
}

const HeroContainer = ({ children }: any) => {
  return (
    <div className="flex mt-24 px-24 justify-between relative overflow-hidden h-190">
      <Image src={BlurTL} alt="" height={HeroPic.height} width={HeroPic.width} className="absolute left-0 top-0 -z-10" />
      <Image src={BlurM} alt="" height={HeroPic.height * 2} width={HeroPic.width * 2} className="absolute left-1/2 -translate-x-1/2 top-110 -z-10" />
      <Image src={BlurTR} alt="" height={HeroPic.height} width={HeroPic.width} className="absolute right-0 top-0 -z-10" />
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