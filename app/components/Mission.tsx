import ImgTL from "@/public/assets/Landing/img-tl.webp"
import ImgBL from "@/public/assets/Landing/img-bl.webp"
import ImgTR from "@/public/assets/Landing/img-tr.png"
import ImgBR from "@/public/assets/Landing/img-br.png"
import Image from 'next/image';
import BlurM from "@/public/assets/blur-m.png"


function ImgGrid({ className }: { className?: string }) {
  const imgStyles = "h-42.5 w-56.75 rounded-[20px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300"
  return (<div className={`${className} flex gap-5 w-full justify-center`}>
    <div className="flex flex-col gap-5">
      <Image src={ImgTL} alt="Cornell Assistive Tech team photo" height={ImgTL.height} width={ImgTL.width}
        className={imgStyles} />
      <Image src={ImgBL} alt="The team helping students" height={ImgBL.height} width={ImgBL.width}
        className={imgStyles} />
    </div>
    <div className="flex flex-col gap-5">
      <Image src={ImgTR} alt="The team helping a child in a modified car" height={ImgTR.height} width={ImgTR.width}
        className={imgStyles} />
      <Image src={ImgBR} alt="The team's tactile coding block project" height={ImgBR.height} width={ImgBR.width}
        className={imgStyles} />
    </div>
  </div>)
}

function MissionGraphic() {
  return (
    <div className="flex flex-col justify-center z-10 mt-9">
      <div className="w-139 h-117 relative">
        <img src="/assets/Landing/mission-blob.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <ImgGrid className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  )
}

function MissionText() {
  return (
    <div className="flex flex-col w-110 justify-center z-10">
      <h2 className="heading mb-9">Our Mission</h2>
      <p className="subtext mb-8">At the Cornell Assistive Technologies Student Project Team, we develop assistive technologies for people with disabilities
        and raise awareness of their impact among communities in Ithaca and beyond.</p>
      <p className="subtext">We partner with individuals, families, and organizations to build needs-driven solutions and educational opportunities.</p>
    </div>
  )
}

export function Mission() {
  const centered = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"

  return (
    <div className="h-130 w-full universepad flex items-center justify-between relative">
      <MissionGraphic />
      <MissionText />
      <img src="/assets/Landing/Union.svg" alt="" className={`${centered} w-full mt-5 z-5`} />
      <Image src={BlurM} alt="" height={BlurM.height} width={BlurM.width} className="absolute left-1/2 -translate-x-1/2 -bottom-70 -z-10" />

    </div>
  )
}