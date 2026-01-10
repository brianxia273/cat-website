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
  textLocation: "Left" | "Right";
  img?: { pic: StaticImageData; alt: string };
}

const project1: ProjectCardProps = {
  title: "Sensory Overload Wearable",
  description1: "A small wearable device that is able to detect and react accordingly to early symptoms of a sensory overload, such as those experienced by a user with a sensory processing disorder.",
  description2: "The device responds in real time to help reduce unwanted side effects and support better sensory regulation",
  textLocation: "Left",
}

const project2: ProjectCardProps = {
  title: "Tactile Coding Blocks",
  description1: "",
  description2: "",
  textLocation: "Right",
}

const project3: ProjectCardProps = {
  title: "Smart Wheelchair",
  description1: "",
  description2: "",
  textLocation: "Left",
}

const project4: ProjectCardProps = {
  title: "Urinary Drainage Bag",
  description1: "",
  description2: "",
  textLocation: "Right",
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

function ProjectCard({ title, description1, description2, cta, textLocation, img }: ProjectCardProps) {
  return (
    <div className={`flex justify-between items-center ${(textLocation === "Right") ? "flex-row" : "flex-row-reverse"}`}>
      {/* Image */}
      {(img === undefined) ?
        <div className="bg-theme-grey rounded-[20px] h-87 w-147 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" /> :
        <Image src={img.pic} alt={img.alt} height={img.pic.height} width={img.pic.width}
          className="rounded-[20px] h-87 w-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" />}
      {/* Textbox */}
      <div className="flex flex-col px-14 py-8 w-150 h-110 rounded-[20px] bg-linear-to-b from-bg-lt-grey to-theme-m-red
      drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
        <h3 className="cardheading">{title}</h3>
        <p className="cardtext">{description1}</p>
        <p className="cardtext mt-5">{description2}</p>
        {cta !== undefined && <ButtonRed label={cta.label} to={cta.to} />}
      </div>
    </div>
  )
}

export function OurProjects() {
  return (
    <div className="h-auto w-full flex flex-col universepad py-20">
      <OurProjectsTopText />
      <div className="flex flex-col gap-21 mt-21">
        {allProjects.map((item, index) => {
          return (<ProjectCard key={`project-${index}`} title={item.title} description1={item.description1}
            description2={item.description2} cta={item?.cta} textLocation={item.textLocation} img={item?.img} />)
        })}
      </div>
    </div>
  )
}