"use client"
import Image from 'next/image';
import { StaticImageData } from 'next/image'
import data from "@/public/assets/AboutUs/team.json"

interface Member {
  name: string;
  role: string;
  year: string;
  major: string;
  college: string;
  linkedin?: string;
}

interface MemberCardInfo extends Member {
  img?: StaticImageData;
}

interface CreateMemberCardProps {
  name: string;
}

interface SectionProps {
  title: string;
  team: MemberCardInfo[];
}

const teamData: Member[] = data

function lookupHelper(name: string): Member {
  const member = teamData.find((curMember) => (curMember.name === name));
  if (member === undefined) {
    console.error("Member not found: ", name)
    return {
      name: name,
      role: "",
      year: "",
      major: "",
      college: "",
    }
  } else {
    return member;
  }
};

// function getMemberImage(name: string) {
//   const [fName, lName] = name.split(" ");
//   try {
//     return require(`@/public/assets/AboutUs/ProfilePics/${fName.toLowerCase()}-${lName.toLowerCase()}.png`);
//   } catch {
//     return undefined;
//   }
// }

function createMemberCardInfo({ name }: CreateMemberCardProps): MemberCardInfo {
  const member = lookupHelper(name);
  // const img = getMemberImage(name)
  const img = undefined
  if (img !== undefined) {
    console.log("Found img")
    return {
      ...member,
      img: img
    }
  } else {
    console.log("No img")
    return member;
  }
}

const teamLeadsInfo: CreateMemberCardProps[] = [
  { name: 'Lucas Keith' },
  { name: 'Mae Sliwinski' },
  { name: 'Natalie Shepherd' },
  { name: 'Chris Parker' },
  { name: 'William Ellis' },
  { name: 'Savaas Iqbal' },
  { name: 'Josephine Kelly' },
  { name: 'Richard Ballard' },
  { name: 'Abigail Jin' }
]

const engSubteamInfo: CreateMemberCardProps[] = [
  { name: 'Shannon Lin' },
  { name: 'Alan Wu' },
  { name: 'Rishabh Dholakia' },
  { name: 'Emily Wang' },
  { name: 'Liz Pappania' },
  { name: 'Ajaa-Sungma Sigri-Naah' },
  { name: 'Madhu Balaji' },
  { name: 'Selin Toker' },
  { name: 'Lila Alderete' },
  { name: 'Diya Sheth' },
  { name: 'Merve Tutar' },
  { name: 'Jay Zhu' },
  { name: 'Jenny Dong' },
  { name: 'Jayesha Sharma' },
  { name: 'Serena Inderjit' },
  { name: 'Sahana Behera' },
  { name: 'David Shepherd' },
  { name: 'Brian Xia' },
  { name: 'Saejoon Park' },
  { name: 'Neha Chigurupati' },
  { name: 'Elom Eskender' },
  { name: 'Mihika Mukherjee' },
]

const eduOutSubteamInfo: CreateMemberCardProps[] = [
  { name: 'Sarah Swee' },
  { name: 'Rafael Green Mendez' },
  { name: 'David Han' },
  { name: 'Evan Lee' },
  { name: 'Sophia Roache' },
  { name: 'Morgan Ogata' },
  { name: 'Rachel Turney' },
  { name: 'Vanessa Chen Hsieh' },
  { name: 'Zaid Al-Shoha' },
  { name: 'Omar Alkhitan' },
  { name: 'Chloe Jung' },
  { name: 'Scott Zinman' },
  { name: 'Neel Behari' }
]

const opsSubteamInfo: CreateMemberCardProps[] = [
  { name: 'Andy Chen' },
  { name: 'Ariana Sanchez' },
  { name: 'Sonya Zheng' },
  { name: 'Jason Yang' },
  { name: 'Dina Shlufman' },
  { name: 'William Chen' }
]

const alumniInfo: CreateMemberCardProps[] = [
  { name: 'Alum' },
]


const teamLeads: MemberCardInfo[] = teamLeadsInfo.map((member) => (createMemberCardInfo({ name: member.name })))

const engSubteam: MemberCardInfo[] = engSubteamInfo.map((member) => (createMemberCardInfo({ name: member.name })))

const eduOutSubteam: MemberCardInfo[] = eduOutSubteamInfo.map((member) => (createMemberCardInfo({ name: member.name })))

const opsSubteam: MemberCardInfo[] = opsSubteamInfo.map((member) => (createMemberCardInfo({ name: member.name })))

const alumni: MemberCardInfo[] = alumniInfo.map((member) => (createMemberCardInfo({ name: member.name })))

function MemberModal() {
  return (
    <div></div>
  )
}

function MemberCard(member: Pick<MemberCardInfo, "name" | "role" | "img" | "linkedin">) {
  const name = member.name
  const role = member.role
  const img = member.img
  const linkedin = member.linkedin

  return (
    <div className="h-100 min-w-70 w-70 flex flex-col rounded-[20px] cursor-pointer">
      {img !== undefined ? <Image src={img} alt={name} width={img.width} height={img.height}
        className="h-75 w-auto rounded-[15px]" /> : <div className="bg-text-grey h-75  w-full rounded-[15px]" />}
      <div className="flex flex-col pt-3 px-2">
        <div className="flex justify-between items-center">
          <h4 className={name.length <= 18 ? "membername" : "longmembername"}>{name}</h4>
          <img src="/assets/linkedin.svg" alt={`Visit ${name}'s LinkedIn profile`} className="h-7"
            onClick={() => window.open((linkedin !== undefined ? linkedin : ""), '_blank')} />
        </div>
        {role !== "" &&
          <div className="bg-theme-offwhite w-fit rounded-lg mt-4">
            <p className="membertag px-2 py-1">{role}</p>
          </div>
        }
      </div>
    </div>
  )
}

function TeamSection({ title, team }: SectionProps) {
  return (
    <div className={`flex flex-col universepad w-full pt-10 pb-15`}>
      <h2 className="teamheading">{title}</h2>
      <div className="grid grid-cols-4 gap-12 mt-10">
        {team.map((item, index) => {
          return (
            <MemberCard key={`Team Lead ` + index} name={item.name} role={item.role} img={item?.img} linkedin={item?.linkedin} />
          )
        })}
      </div>
    </div>
  )
}


export function Members() {
  return (
    <div className="bg-bg-dk-grey b-10 mt-5 relative pt-5">
      <TeamSection title="Our Team Leads" team={teamLeads} />
      <TeamSection title="Engineering Subteam" team={engSubteam} />
      <TeamSection title="Education & Outreach Subteam" team={eduOutSubteam} />
      <TeamSection title="Operations Subteam" team={opsSubteam} />
      <TeamSection title="Our Alumni" team={alumni} />
      <img src="/assets/AboutUs/wave-top.svg" alt="" className="absolute bottom-full left-0 w-full scale-x-[-1]" />
    </div>
  )
}