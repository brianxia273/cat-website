import Image from 'next/image';
import { ButtonRed, ButtonWhite } from './Buttons';
import ImgT from "@/public/assets/Landing/img-tr.png"
import ImgB from "@/public/assets/Landing/img-br.png"
import BlurM from "@/public/assets/blur-m.png"

function MissionMainCard() {
  return (
    <div className="h-130 w-full max-w-219 backdrop-blur-[2px] bg-theme-white/90 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)] 
    flex flex-col justify-between rounded-[20px] py-8 px-15 relative" >
      <div className="flex flex-col">
        <h2 className="heading">Our Mission</h2>
        <p className="subtext mt-6">At the Cornell Assistive Technologies Student Project Team, we develop assistive technologies for people with disabilities and raise awareness of their impact among communities in Ithaca and beyond.</p>
        <p className="subtext mt-6">We partner with individuals, families, and organizations to engineer accessible, needs-driven solutions.</p>
      </div>
      <div className="flex gap-6 mb-2">
        <ButtonRed label="Join Us" to="/JoinUs" />
        <ButtonWhite label="Meet the Team" to="/AboutUs" />
      </div>
      <img src="/assets/Landing/mission-square-t.svg" alt="" className="absolute right-9 bottom-15" />
      <img src="/assets/Landing/mission-square-b.svg" alt="" className="absolute right-20 -bottom-10" />
    </div>
  )
}

function MissionGraphic() {
  const imgStyles = "h-60 w-85 rounded-[20px] overflow-hidden relative shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)] hover:scale-102 transition-transform duration-300"
  return (
    <div className="flex flex-col h-130 gap-10 items-center">
      <div className={imgStyles}>
        <Image src={ImgT} alt="" fill className="object-cover" />
      </div>
      <div className={imgStyles}>
        <Image src={ImgB} alt="" fill className="object-cover" />
      </div>
    </div>
  )
}



export function Mission() {
  return (
    <div className="h-130 flex gap-10 items-center universepad relative">
      <MissionGraphic />
      <MissionMainCard />
      <Image src={BlurM} alt="" height={BlurM.height} width={BlurM.width} className="absolute left-1/2 -translate-x-1/2 -bottom-70 -z-10" />
    </div>
  )
}