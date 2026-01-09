"use client"

import Image from 'next/image';
// partners row 1 images
import GreaterBOCES from "@/public/assets/Landing/Partners/greater-southen-tier-boces.png"
import TstBOCES from "@/public/assets/Landing/Partners/tst-boces.png"
import IthacaSchool from "@/public/assets/Landing/Partners/ithaca-city-school-district.png"
// row 2 images
import Flic from "@/public/assets/Landing/Partners/flic.jpg"
import Racker from "@/public/assets/Landing/Partners/racker.png"
import CodeRedRobotics from "@/public/assets/Landing/Partners/code-red-robotics.png"
import Sciencenter from "@/public/assets/Landing/Partners/sciencenter.jpg"
import UnityHouse from "@/public/assets/Landing/Partners/unity-house.webp"
// row 3 images 
import MountainLakesLibrary from "@/public/assets/Landing/Partners/mountain-lakes-library.png"
import NYOpportunity from "@/public/assets/Landing/Partners/ny-opportunity.jpg"
import Nysed from "@/public/assets/Landing/Partners/nysed.png"
// sponsors
import Safc from "@/public/assets/Landing/Sponsors/safc.png"
import Cpfb from "@/public/assets/Landing/Sponsors/CPFB.png"
import ContributionProject from "@/public/assets/Landing/Sponsors/contribution-project.webp"
import HumanEco from "@/public/assets/Landing/Sponsors/human-ecology.png"

const rowStyles = "flex gap-8 justify-center items-center"
const colStyles = "flex flex-col gap-12 mt-12"
const imgStyles = "h-20 w-auto cursor-pointer"

function Partners() {
  return (
    <div className={colStyles}>
      {/* row 1 */}
      <div className={rowStyles}>
        <Image src={GreaterBOCES} alt="Visit Greater Southern Tier BOCES" height={GreaterBOCES.height} width={GreaterBOCES.width} className={imgStyles}
          onClick={() => window.open('https://www.gstboces.org/', '_blank')} />
        <Image src={TstBOCES} alt="Visit TST BOCES" height={TstBOCES.height} width={TstBOCES.width} className={imgStyles}
          onClick={() => window.open('https://www.tstboces.org/', '_blank')} />
        <Image src={IthacaSchool} alt="Visit Ithaca City School District" height={IthacaSchool.height} width={IthacaSchool.width} className={imgStyles}
          onClick={() => window.open('https://www.ithacacityschools.org/', '_blank')} />
        <img src={"/assets/Landing/Partners/ithaca-college.svg"} alt="Visit Ithaca College" className={imgStyles}
          onClick={() => window.open('https://www.ithaca.edu/academics/school-health-sciences-and-human-performance/occupational-therapy', '_blank')} />
      </div>
      {/* row 2 */}
      <div className={rowStyles}>
        <Image src={Flic} alt="Visit FLIC" height={Flic.height} width={Flic.width} className={imgStyles}
          onClick={() => window.open('https://fliconline.org/FLIC/', '_blank')} />
        <Image src={Racker} alt="Visit Racker" height={Racker.height} width={Racker.width} className={imgStyles}
          onClick={() => window.open('https://www.racker.org/', '_blank')} />
        <Image src={CodeRedRobotics} alt="Visit Code Red Robotics" height={CodeRedRobotics.height} width={CodeRedRobotics.width} className={imgStyles}
          onClick={() => window.open('https://www.team639.org/', '_blank')} />
        <Image src={Sciencenter} alt="Visit Sciencenter" height={Sciencenter.height} width={Sciencenter.width} className={imgStyles}
          onClick={() => window.open('https://sciencenter.org/', '_blank')} />
        <Image src={UnityHouse} alt="Visit Unity House" height={UnityHouse.height} width={UnityHouse.width} className={imgStyles}
          onClick={() => window.open('https://unityhouse.org/', '_blank')} />
      </div>
      {/* row 3 */}
      <div className={rowStyles}>
        <Image src={MountainLakesLibrary} alt="Visit Mountain Lakes Public Library Makerspace" height={MountainLakesLibrary.height} width={MountainLakesLibrary.width} className={imgStyles}
          onClick={() => window.open('https://bit.ly/m/mlmakerspace', '_blank')} />
        <img src={"/assets/Landing/Partners/quorum.svg"} alt="Visit Quorum" className={imgStyles}
          onClick={() => window.open('https://quorumlanguage.com/', '_blank')} />
        <Image src={NYOpportunity} alt="New York State of Opportunity logo" height={NYOpportunity.height} width={NYOpportunity.width} className={imgStyles}
          onClick={() => window.open('https://www.ny.gov/', '_blank')} />
        <Image src={Nysed} alt="Visit New York State Education Department" height={Nysed.height} width={Nysed.width} className={imgStyles}
          onClick={() => window.open('https://www.nysed.gov/new-york-state-school-blind', '_blank')} />
      </div>
    </div>
  )
}

function Sponsors() {
  return (
    <div className={colStyles}>
      <div className={rowStyles}>
        <Image src={Safc} alt="Visit Student Activities Funding Commission" height={Safc.height} width={Safc.width} className={imgStyles}
          onClick={() => window.open('https://cornell.campusgroups.com/safc/home/', '_blank')} />
        <Image src={Cpfb} alt="Visit Community Partnership Funding Board" height={Cpfb.height} width={Cpfb.width} className={imgStyles}
          onClick={() => window.open('https://cornell.campusgroups.com/cpfb/home/', '_blank')} />
        <Image src={ContributionProject} alt="Visit The Contribution Project" height={ContributionProject.height} width={ContributionProject.width} className={imgStyles}
          onClick={() => window.open('https://contributionproject.org/', '_blank')} />
        <Image src={HumanEco} alt="Visit Cornell College of Human Ecology" height={HumanEco.height} width={HumanEco.width} className={imgStyles}
          onClick={() => window.open('https://www.human.cornell.edu/hcd/facilities/d2fs', '_blank')} />
      </div>
    </div>
  )
}

export function PartnersAndSponsors() {
  return (

    <div className="h-250 w-full flex flex-col px-20 pt-22">
      <h2 className="heading">Partners & Sponsors</h2>
      <p className="subtext mt-10">We are dedicated to partnering with various communities to support accessibility and inclusivity. Here are our partners!</p>
      <Partners />
      <p className="subtext mt-24">We are so grateful to receive funding to support our mission. Here are our various sponsors!</p>
      <Sponsors />
    </div>
  )
}