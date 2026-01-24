import Image from 'next/image';
import { ButtonRed, ButtonWhite } from './Buttons';
import ImgT from "@/public/assets/Landing/img-tr.png"
import ImgB from "@/public/assets/Landing/img-br.png"
import { loadingComplete, imgLoadStyles } from "../utils/imgLoad";

function MissionMainCard() {
  return (
    <div className="h-90 xl:h-130 w-full backdrop-blur-[2px] bg-theme-white/90 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)] 
    flex flex-col justify-between rounded-[20px] py-8 px-15 relative" >
      <div className="flex flex-col">
        <h2 className="heading">Our Mission</h2>
        <p className="subtext mt-6">At the Cornell Assistive Technologies Student Project Team, we develop assistive technologies for people with disabilities and raise awareness of their impact among communities in Ithaca and beyond.</p>
        <p className="subtext mt-6 w-3/4">We partner with individuals, families, and organizations to engineer accessible, needs-driven solutions.</p>
      </div>
      <div className="gap-6 mb-2 hidden xl:flex">
        <ButtonRed label="Join Us" to="/JoinUs" />
        <ButtonWhite label="Meet the Team" to="/AboutUs" />
      </div>
      {/* decorative squares, for large screens */}
      <img src="/assets/Landing/mission-square-t.svg" alt="" className="hidden xl:block absolute right-9 bottom-15" />
      <img src="/assets/Landing/mission-square-b.svg" alt="" className="hidden xl:block absolute right-20 -bottom-10" />
      {/* same squares for smaller screens */}
      <img src="/assets/Landing/mission-square-t.svg" alt="" className="xl:hidden absolute right-0 top-8 -scale-y-100 scale-[60%]" />
      <img src="/assets/Landing/mission-square-b.svg" alt="" className="xl:hidden absolute right-5 -top-12 -scale-y-100 scale-[60%]" />
    </div>
  )
}
function MissionGraphic() {
  const imgStyles =
    "h-50 w-full xl:h-60 xl:w-85 rounded-[20px] shadow-[0_-2px_4px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)]";
  return (
    <div className="flex flex-row-reverse justify-between xl:flex-col xl:h-130 gap-8 items-center w-full xl:w-1/3">
      <div className="flex-1 flex flex-col items-center gap-8 xl:flex-none xl:w-85">
        <Image
          src={ImgT}
          alt="Top mission image"
          className={`object-cover object-top ${imgStyles} ${imgLoadStyles}`}
          width={340}
          height={240}
          onLoadingComplete={(img) => loadingComplete(img)}
        />
        {/* Button only shows on small screens */}
        <div className="xl:hidden">
          <ButtonWhite label="Meet the Team" to="/AboutUs" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-8 xl:flex-none xl:w-85">
        <Image
          src={ImgB}
          alt="Bottom mission image"
          className={`object-cover ${imgStyles} ${imgLoadStyles}`}
          width={340}
          height={240}
          onLoadingComplete={(img) => loadingComplete(img)}
        />
        {/* Button only shows on small screens */}
        <div className="xl:hidden">
          <ButtonRed label="Join Us" to="/JoinUs" />
        </div>
      </div>
    </div>
  );
}


export function Mission() {
  return (
    <div className="xl:h-130 flex flex-col-reverse xl:flex-row gap-8 items-center universepad relative">

      <MissionGraphic />
      <MissionMainCard />
      {/* <div className="gap-6 mb-2 flex xl:hidden order-first">
        <ButtonRed label="Join Us" to="/JoinUs" />
        <ButtonWhite label="Meet the Team" to="/AboutUs" />
      </div> */}

      {/* <Image src={BlurM} alt="" height={BlurM.height} width={BlurM.width} className="absolute left-1/2 -translate-x-1/2 -bottom-70 -z-10" /> */}
    </div>
  )
}