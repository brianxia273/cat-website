// import { StaticImageData } from 'next/image'
// import Image from 'next/image';
// import ImgL from "@/public/assets/Landing/img-br.png"
// import ImgM from "@/public/assets/Landing/img-tr.png"
// import ImgR from "@/public/assets/Landing/img-bl.webp"


// interface MissionCardProps {
//   title: string;
//   descrip: string;
//   img: {
//     src: StaticImageData;
//     alt: string;
//   }
// }

// function MissionCard({ title, descrip, img }: MissionCardProps) {
//   const imgStyles = "h-42.5 w-56.75 rounded-[20px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300"

//   return (
//     <div className="h-110 w-90 px-5 rounded-[20px] bg-theme-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" >
//       <Image src={img.src} alt={img.alt} className={imgStyles} />
//       <h3 className="subheading text-text-dk-grey mt-5">{title}</h3>
//       <p className="descriptext text-text-grey w-95 mt-2">{descrip}</p>
//     </div>
//   )
// }

// function MissionContent() {
//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="heading mt-10">Our Mission</h2>
//       <div className="flex w-full universepad justify-between mt-10">
//         <MissionCard title="Empower Through Tech" descrip="We develop assistive technologies to empower people with disabilities and improve accessibility."
//           img={{ src: ImgL, alt: "The team's tactile coding block project" }} />
//         <MissionCard title="Broaden Access" descrip="We work to expand access to assistive technology and raise awareness in Ithaca and beyond."
//           img={{ src: ImgM, alt: "The team helping a child in a modified car" }} />
//         <MissionCard title="Support the Community" descrip="We partner with individuals, families, and organizations to build solutions and educational opportunities."
//           img={{ src: ImgR, alt: "A Cornell Assistive Tech community event" }} />
//       </div>
//     </div>
//   )
// }



// export function Mission2() {
//   return (
//     <div className="h-160 relative">
//       <MissionContent />
//       <img src="/assets/Landing/mission-bg-f.svg" alt="" className="absolute left-0 top-0 -z-10 w-full" />
//       <img src="/assets/Landing/mission-bg-b.svg" alt="" className="absolute left-0 top-0 -z-20 w-full" />
//     </div>
//   )
// }