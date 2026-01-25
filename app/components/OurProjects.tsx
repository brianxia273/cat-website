import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { ButtonRed, ButtonWhite } from './Buttons';

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

const centered = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"

function OurProjectsTopText() {
  return (
    <div className="flex flex-col">
      <h2 className="heading">Our Projects</h2>
      <p className="subtext mt-3">See our current engineering builds in action!</p>
    </div>
  )
}

function ProjectCard({ title, description1, description2, cta, textLocation, img, index = 0 }: ProjectCardProps) {
  return (
    <div className={`flex h-130 lg:h-110 justify-between items-center flex-col-reverse ${(textLocation === "Right") ? "lg:flex-row" : "lg:flex-row-reverse"} backdrop-blur-[2px] bg-theme-white/90 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)] rounded-[20px]`}>
      {/* Image */}
      <div className="relative h-full w-full lg:w-1/2">
        {/* {(img === undefined) ?
          <div className={`bg-theme-grey rounded-[20px] h-87 w-127 drop-shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)] ${centered} lg:scale-70 xl:scale-100`} /> :
          <Image src={img.pic} alt={img.alt} height={img.pic.height} width={img.pic.width}
            className={`rounded-[20px] h-87 w-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] ${centered}`} />} */}
        <div className={`hidden lg:block bg-text-grey ${(textLocation === "Right") ? "lg:rounded-l-[20px]" : "lg:rounded-r-[20px]"} z-10 h-full lg:rounded-br-0`}></div>
        <div className={`lg:hidden bg-text-grey rounded-b-[20px] z-10 h-full lg:rounded-br-0`}></div>
      </div>
      {/* Textbox */}
      <div className="flex flex-col lg:w-1/2 pr-10 py-5 lg:py-13 px-10 h-full">
        <h3 className="cardheading">{title}</h3>
        <ul className="list-disc list-outside pl-5 space-y-2 lg:mt-6 xl:mt-8">
          <li className="cardtext mt-3 lg:mt-0">{description1}</li>
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
      <div className="h-auto w-full flex flex-col universepad py-8 2xl:py-24" id="our-projects">
        <OurProjectsTopText />
        <div className="flex flex-col gap-15 lg:gap-25 mt-20">
          {allProjects.map((item, index) => {
            const isEven = index % 2 === 0;
            return (<ProjectCard key={`project-${index}`} title={item.title} description1={item.description1}
              description2={item.description2} cta={item?.cta} textLocation={isEven ? "Left" : "Right"} img={item?.img} index={index} />)
          })}
          <div className="flex justify-center">
            <ButtonWhite label="See All Our Projects" to="/assets/OurWork/Extensive-Documentation-of-CAT-Projects.pdf" behav="External" />
          </div>
        </div>
      </div>
      <img src="/assets/OurWork/wave2-solid-top.svg" className="-z-10 w-full -mb-[0.75px]" />
      <img src="/assets/OurWork/wave2-solid-bottom.svg" className="-z-10 w-full" />
    </div>
  )
}