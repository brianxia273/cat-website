"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import CATLogo from "@/public/assets/cat-logo.png"
import Image from 'next/image';

export function Navbar() {
  type TabProps = {
    routeToPath: string;
    tabName: string;
  };

  const router = useRouter();
  const location = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return location === "/";
    }
    return location === path;
  };

  const Tab = ({ routeToPath, tabName }: TabProps) => {
    return <button
      onClick={() => router.push(routeToPath)}
      // won't change color on hover if current page
      className={`navtext hover:text-theme-dk-red cursor-pointer ${isActive(routeToPath) ? "text-theme-red hover:text-theme-red" : ""}`}>
      {tabName}
    </button>
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between h-24 bg-white">
      <Image src={CATLogo} alt="Cornell Assistive Technologies Logo" height={CATLogo.height} width={CATLogo.width} className="h-auto w-auto cursor-pointer"
        onClick={() => { router.push("/") }} />
      <nav className="flex justify-end">
        <div className="flex gap-16 mr-20">
          <Tab routeToPath="/" tabName="Home" />
          <Tab routeToPath="/OurWork" tabName="Our Work" />
          <Tab routeToPath="/AboutUs" tabName="About Us" />
          {/* <Tab routeToPath="/Blog" tabName="Blog" />
        <Tab routeToPath="/DIY" tabName="DIY" /> */}
          <Tab routeToPath="/JoinUs" tabName="Join Us" />
          <Tab routeToPath="/Contact" tabName="Contact" />
          <Tab routeToPath="/Support" tabName="Support" />
        </div>
      </nav>
    </div>
  );
}
