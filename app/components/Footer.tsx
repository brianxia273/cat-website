"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import CATLogo from "@/public/assets/cat-logo.png"
import Image from "next/image"

function TopFooter() {
  const router = useRouter()
  const location = usePathname();
  const iconStyles = "hover:grayscale grayscale-0 hover:brightness-75 brightness-100 transition-all cursor-pointer scale-90 xl:scale-100";
  return (
    <div className="h-50 bg-theme-grey flex justify-start px-5">
      <div className="flex items-center">
        <Image src={CATLogo} alt="Cornell Assistive Technologies Logo" height={CATLogo.height} width={CATLogo.width} className="h-auto w-auto cursor-pointer"
          onClick={() => {
            if (location === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              router.push("/");
            }
          }} />
      </div>
      <div className="flex flex-col mt-7 ml-25 gap-2">
        <h3 className="footerheading w-50">Find Us Online</h3>
        <div className="flex gap-4.5">
          <img src="/assets/linkedin.svg" alt="Visit Our LinkedIn" className={iconStyles}
            onClick={() => window.open('https://www.linkedin.com/company/cornellassist/', '_blank')} />
          <img src="/assets/instagram.svg" alt="Visit Our Instagram" className={iconStyles}
            onClick={() => window.open('https://www.instagram.com/cornellassist/', '_blank')} />
          <img src="/assets/youtube.svg" alt="Visit Our Youtube" className={iconStyles}
            onClick={() => window.open('https://www.youtube.com/@CornellAssistiveTechnologies', '_blank')} />
        </div>
      </div>
      <div className="flex flex-col mt-7 ml-20 xl:ml-50 gap-2">
        <h3 className="footerheading">Address</h3>
        <p className="subtext">Cornell University Ithaca, NY 14850 </p>
        <a href="mailto:assistivetech@cornell.edu" className="subtext underline underline-offset-3">assistivetech@cornell.edu</a>
      </div>
    </div>
  )
}

function BottomFooter() {
  return (
    <div className="flex flex-col items-center footerbottomtext">
      <a href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
        className="underline underline-offset-3 mt-4.5">
        Equal Education & Employment
      </a>
      <p className="mt-4.5">This organization is a registered student organization of Cornell University.</p>
      <p>© 2025 Cornell Assistive Technologies Project Team.</p>
    </div>
  )
}


export function Footer() {
  return (
    <div className="flex flex-col mb-10">
      <TopFooter />
      <BottomFooter />
    </div>
  )
}