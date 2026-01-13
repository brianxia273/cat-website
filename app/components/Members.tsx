import Image from 'next/image';
import { StaticImageData } from 'next/image'

interface Member {
  name: string;
  role: string;
  year: string;
  major: string;
  college: string;
  linkedin?: string;
  img?: StaticImageData;
}

const teamLeads: Member[] = [
  {
    name: "Lucas Keith",
    role: "Full Team Lead",
    year: "2026",
    major: "Biomedical Engineering",
    college: "College of Engineering",
    linkedin: "https://www.linkedin.com/in/lucas-keith/",
  },
  {
    name: "Mae Sliwinski",
    role: "Full Team Lead",
    year: "2026",
    major: "Mechanical Engineering",
    college: "College of Engineering",
    linkedin: "https://www.linkedin.com/in/mae-sliwinski-771a76237/",
  },
  {
    name: "Natalie Shepherd",
    role: "Engineering Subteam Lead",
    year: "2027",
    major: "Biomedical Engineering",
    college: "College of Engineering",
    linkedin: "https://www.linkedin.com/in/natalie-m-shepherd/",
  },
]

function MemberModal() {
  return (
    <div></div>
  )
}

function MemberCard(member: Pick<Member, "name" | "role" | "img">) {
  const name = member.name
  const role = member.role
  const img = member.img
  return (
    <div className="h-100 min-w-70 flex flex-col rounded-[20px] bg-white">
      {img !== undefined ? <Image src={img} alt={name} width={img.width} height={img.height}
        className="h-80 w-full rounded-t-[20px]" /> : <div className="bg-text-grey h-80 w-full rounded-t-[20px]" />}
      <div className="flex flex-col">
        <h4 className="membername">{name}</h4>
        <p className="membertag">{role}</p>
      </div>
    </div>
  )
}

function TeamLeadsSection() {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="teamheading">Team Leads</h2>
      <div className="flex justify-between gap-20 h-1000">
        {teamLeads.map((item, index) => {
          return (
            <MemberCard key={`Team Lead ` + index} name={item.name} role={item.role} img={item?.img} />
          )
        })}
      </div>
    </div>
  )
}


export function Members() {
  return (
    <div className="bg-bg-dk-grey universepad">
      <TeamLeadsSection />
    </div>
  )
}