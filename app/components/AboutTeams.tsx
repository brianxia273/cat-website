import Image from "next/image"
import { StaticImageData } from 'next/image'
import photoPlaceholder from "@/public/assets/JoinUs/hero-pic.jpg"

type Team = {
    imgUrl: StaticImageData,
    teamName: string,
    description: string
}

const engineeringTeam: Team = {
    imgUrl: photoPlaceholder,
    teamName: "Engineering",
    description: "Focused on designing and creating assistive solutions for the Ithaca community.",
}

const outreachAndEducation: Team = {
    imgUrl: photoPlaceholder,
    teamName: "Outreach and Education",
    description: "Focused on community outreach initiatives and fostering K-12 STEM education in Ithaca.",
}

const internalOperation: Team = {
    imgUrl: photoPlaceholder,
    teamName: "Operations",
    description: "Focused on promoting brand awareness and handling internal operations"
}

export const Cards = ({ imgUrl, teamName, description }: Team) => {
    return (
        <div className="hover:bg-bg-lt-grey transition-colors w-105 h-130 flex flex-col items-center pt-5 rounded-lg">
            <Image src={imgUrl} width={380} height={380} alt={"The" + teamName + "subteam"} className="rounded-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
            <h3 className="subheading mt-5">{teamName}</h3>
            <p className="descriptext w-95">{description}</p>
        </div>
    )
}

export const AboutTeams = () => {
    return (
        <div className="universepad py-15 h-200">
            <h2 className="heading">Our Teams</h2>
            <p className="subtext">See how you can get involved!</p>
            <div className="flex justify-between mt-10">
                <div className="">
                    <Cards
                        imgUrl={outreachAndEducation.imgUrl}
                        teamName={engineeringTeam.teamName}
                        description={engineeringTeam.description} />
                </div>
                <div className="">
                    <Cards
                        imgUrl={outreachAndEducation.imgUrl}
                        teamName={outreachAndEducation.teamName}
                        description={outreachAndEducation.description} />
                </div>
                <div className="">
                    <Cards
                        imgUrl={internalOperation.imgUrl}
                        teamName={internalOperation.teamName}
                        description={internalOperation.description} />
                </div>
            </div>

        </div>
    )
}