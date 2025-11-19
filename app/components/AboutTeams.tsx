import Image from "next/image"
import photoPlaceholder from "./assets/photo-placeholder.png"

type team = {
    imgUrl: any,
    teamName: string,
    description: string
}

const engineeringTeam: team = {
    imgUrl: photoPlaceholder.src,
    teamName: "Engineering",
    description: "Description of the subteam",
}

const outreachAndEducation: team = {
    imgUrl: photoPlaceholder.src,
    teamName: "Outreach and Education",
    description: "Description of the subteam",
}

const internalOperation: team = {
    imgUrl: photoPlaceholder.src,
    teamName: "Internal Operations",
    description: "Description of the subteam"
}

export const Cards = ({imgUrl, teamName, description}: team) => {
    return <div>
        <img src={imgUrl} width={405} height={405} alt=""/>
        <h3 className="text-2xl font-medium">{teamName}</h3>
        <p className="text-2xl text-gray-400">{description}</p>
        
    </div>
}

export const AboutTeams = () => {
    return <div>
        <h2 className="text-red text-5xl font-semibold mx-auto ml-25 p-4">Our Teams</h2>
        <div className="flex justify-center gap-32">
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
                description={outreachAndEducation.description} />
            </div>
        </div>
        
    </div>
}