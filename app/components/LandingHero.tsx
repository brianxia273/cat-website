import { ButtonRed } from "./Buttons"
import SolidBlob from "./assets/Landing/hero-blob-solid.png"
import ClearBlob from "./assets/Landing/hero-blob-clear.png"
import HeroPic from "./assets/Landing/hero-pic.png"
import SquareBL from "./assets/Landing/hero-square-bl.png"
import SquareTL from "./assets/Landing/hero-square-tl.png"
import CircleBR from "./assets/Landing/hero-circle-br.png"
import CircleTR from "./assets/Landing/hero-circle-tr.png"
import Image from 'next/image';

const HeroText = () => {
  return (
    <div className="flex flex-col">
      <h1 className="title w-140">Making Assistive Technologies Accessible for All</h1>
      <h2>We create assistive technologies and teach inclusive design to empower communities in Ithaca and beyond.</h2>
      <ButtonRed label="Explore Our Work" to="/tabs/OurWork" />
    </div>
  )
}

const HeroGraphic = () => {
  return (
    <div>
      <Image src={SolidBlob} alt="Decorative blob" height={SolidBlob.height} width={SolidBlob.width}></Image>
    </div>
  )
}

export const LandingHero = () => {
  return (
    <div className="flex mt-50">
      <HeroText />
      <HeroGraphic />
    </div>
  )
}