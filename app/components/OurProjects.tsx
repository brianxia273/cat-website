import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { ButtonRed } from './Buttons';
// import Image1 from "@/public/assets/OurWork/image1"
// import Image2 from "@/public/assets/OurWork/image2"
// import Image3 from "@/public/assets/OurWork/image3"

interface ProjectCardProps {
  title: string;
  description1: string;
  description2: string;
  cta?: { label: string; to: string };
  textLocation?: "Left" | "Right";
  img?: { pic: StaticImageData; alt: string };
  index?: number;
}


const project1: ProjectCardProps = {
  title: "Sensory Overload Wearable",
  description1: "A small wearable device that is able to detect and react accordingly to early symptoms of a sensory overload, such as those experienced by a user with a sensory processing disorder.",
  description2: "The device responds in real time to help reduce unwanted side effects and support better sensory regulation",
}

const project2: ProjectCardProps = {
  title: "Tactile Coding Blocks",
  description1: "Blocks that represent code instructions through physical, touch-friendly pieces with Braille labels and unique textures, allowing learners to explore programming concepts without a screen.",
  description2: "Designed to be affordable and inclusive, they enable young learners and individuals with visual impairments to experience coding through touch.",
}

const project3: ProjectCardProps = {
  title: "Smart Wheelchair",
  description1: "An electric wheelchair designed for control through brain–computer interfaces using EEG and EMG signals, with the goal of expanding accessible mobility options.",
  description2: "The system currently supports remote control and vision-based control modes.",
}

const project4: ProjectCardProps = {
  title: "Urinary Drainage Bag",
  description1: "A urinary drainage bag that is designed with both practicality and dignity in mind, providing a lightweight, durable, and completely leak-proof solution for users.",
  description2: "The ergonomic design makes it easy to handle and use, while the reusable system allows for multiple open-and-close cycles, ensuring long-lasting convenience and sustainability.",
}

const allProjects = [project1, project2, project3, project4];

function OurProjectsTopText() {
  return (
    <div className="flex flex-col">
      <h2 className="heading">Our Projects</h2>
      <p className="subtext mt-3">See our current engineering builds in action!</p>
    </div>
  )
}

const rotationClasses = [
  'rotate-0',
  'rotate-90',
  'rotate-180',
  'rotate-270'
];

const negRotationClasses = [
  '-rotate-0',
  '-rotate-90',
  '-rotate-180',
  '-rotate-270'
];

function ProjectCard({ title, description1, description2, cta, textLocation, img, index = 0 }: ProjectCardProps) {
  const solidBlobStyles = `-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${rotationClasses[index % 4]}`
  const clearBlobStyles = `-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${negRotationClasses[index % 4]}`
  return (
    <div className={`flex justify-between items-center ${(textLocation === "Right") ? "flex-row" : "flex-row-reverse"}`}>
      {/* Image */}
      <div className="relative h-full w-127">
        {(img === undefined) ?
          <div className="bg-theme-grey rounded-[20px] h-87 w-127 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> :
          <Image src={img.pic} alt={img.alt} height={img.pic.height} width={img.pic.width}
            className="rounded-[20px] h-87 w-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" />}
        <img src="/assets/OurWork/blob-solid.svg" className={solidBlobStyles} />
        <img src="/assets/OurWork/blob-clear.svg" className={clearBlobStyles} />
      </div>
      {/* Textbox */}
      <div className="flex flex-col py-8 w-150 h-110">
        <h3 className="cardheading">{title}</h3>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li className="cardtext">{description1}</li>
          <li className="cardtext mt-5">{description2}</li>
        </ul>
        {cta !== undefined && <ButtonRed label={cta.label} to={cta.to} />}
      </div>
    </div>
  )
}

export function OurProjects() {
  return (
    <div className="flex flex-col">
      <div className="h-auto w-full flex flex-col universepad py-24" id="our-projects">
        <OurProjectsTopText />
        <div className="flex flex-col gap-25 mt-21">
          {allProjects.map((item, index) => {
            const isEven = index % 2 === 0;
            return (<ProjectCard key={`project-${index}`} title={item.title} description1={item.description1}
              description2={item.description2} cta={item?.cta} textLocation={isEven ? "Left" : "Right"} img={item?.img} index={index} />)
          })}
        </div>
      </div>
      <img src="/assets/OurWork/wave2-solid-top.svg" className="-z-10" />
      <img src="/assets/OurWork/wave2-solid-bottom.svg" className="-z-10" />
    </div>
    // "@/public/assets/OurWork/blob-clear.svg"
  )
}