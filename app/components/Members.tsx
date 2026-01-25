"use client"
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import data from "@/public/assets/AboutUs/team.json";
import { memo, useState } from "react";

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
  clickMember: (member: MemberCardInfo) => void;
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

function getMemberImage(name: string) {
  const [fName, lName] = name.split(" ");
  try {
    return require(`@/public/assets/AboutUs/ProfilePics/${fName.toLowerCase()}-${lName.toLowerCase()}.png`);
  } catch {
    return undefined;
  }
}

function createMemberCardInfo({ name }: CreateMemberCardProps): MemberCardInfo {
  const member = lookupHelper(name);
  const img = getMemberImage(name)
  // const img = undefined
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

function MemberModal({ member, closeModal }: { member: MemberCardInfo, closeModal: () => void }) {
  const imgSrc = () => {
    if (member.img) {
      return member.img
    } else {
      return "/assets/photo-placeholder.png"
    }
    
  }
  return (
    <div className="fixed flex justify-center items-center bg-black/50 inset-0 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
        <button className="absolute top-2 right-4 text-xl" onClick={closeModal}>
          <img src="/assets/close-x-svgrepo-com.svg" alt="Close" className="h-10 w-10" />
        </button>

        <div className="mt-4 flex flex-col items-center">
          <Image src={imgSrc()} width="300" height="300" alt={`Photo of ${member.name}`}/>
          <div className="mt-4 justify-start">
            <p><span className="font-semibold">Name:</span> {member.name}</p>
            <p><span className="font-semibold">Role:</span> {member.role}</p>
            <p><span className="font-semibold">Year:</span> {member.year}</p>
            <p><span className="font-semibold">Major:</span> {member.major}</p>
            <p><span className="font-semibold">College:</span> {member.college}</p>
            <p><span className="font-semibold">LinkedIn:</span> <a href={member.linkedin} target="_blank" className="text-red-600 visited:text-purple-600">{member.linkedin}</a></p>
          </div>

        </div>
      </div>

    </div>
  )
}

function MemberCard({ member, onClick }: { member: MemberCardInfo, onClick: () => void}) {
  const name = member.name
  const role = member.role
  const img = member.img
  const linkedin = member.linkedin

  return (
    <div className="h-125 w-auto flex flex-col rounded-[20px] cursor-pointer max-w-xs" onClick={onClick}>
      {img !== undefined ? <Image src={img} alt={name} width={img.width} height={img.height}
        className="h-100 w-auto rounded-[15px]" /> : <div className="bg-text-grey h-120 w-full rounded-[15px]" />}
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

function TeamSection({ title, team, clickMember }: SectionProps) {
  return (
    <div className={`flex flex-col universepad w-full pt-10 pb-15`}>
      <h2 className="teamheading">{title}</h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 mt-10">
        {team.map((item, index) => {
          return (
            <MemberCard key={`Team Lead ` + index} member={item} onClick={() => clickMember(item)} />
          )
        })}
      </div>
    </div>
  )
}


export function Members() {
  const [selectedMember, setSelectedMember] = useState<MemberCardInfo | null > (null);
  const clickMember = (member: MemberCardInfo) => {
    setSelectedMember(member)
  }

  let modal = null;
  if (selectedMember !== null) {
    modal = (
      <MemberModal member={selectedMember} closeModal={() => setSelectedMember(null)} />
    );
  }

  return (
    <div className="bg-bg-dk-grey b-10 mt-5 relative pt-5">
      <TeamSection title="Our Team Leads" team={teamLeads} clickMember={clickMember} />
      <TeamSection title="Engineering Subteam" team={engSubteam} clickMember={clickMember} />
      <TeamSection title="Education & Outreach Subteam" team={eduOutSubteam} clickMember={clickMember} />
      <TeamSection title="Operations Subteam" team={opsSubteam} clickMember={clickMember} />
      <TeamSection title="Our Alumni" team={alumni} clickMember={clickMember} />

      
      <img src="/assets/AboutUs/wave-top.svg" alt="" className="absolute bottom-full left-0 w-full scale-x-[-1]" />
      {modal}
    </div>
  )
}