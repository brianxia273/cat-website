"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import catLogo from "./assets/catLogo.png"
import Image from 'next/image';

export default function Navbar() {
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
      className={`${isActive(routeToPath) ? "text-theme-red" : ""} hover:text-theme-dk-red`}>
      {tabName}
    </button>
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between h-24 bg-white">
      <Image src={catLogo} alt="Cornell Assistive Technologies Logo" height={catLogo.height} width={catLogo.width} className="ml-16 h-auto w-auto" />
      <nav className="flex justify-end">
        <div className="flex gap-16 mr-20 text-base text-theme-dk-grey font-medium">
          <Tab routeToPath="/" tabName="Home" />
          <Tab routeToPath="/tabs/OurWork" tabName="Our Work" />
          <Tab routeToPath="/tabs/AboutUs" tabName="About Us" />
          {/* <Tab routeToPath="/tabs/Blog" tabName="Blog" />
        <Tab routeToPath="/tabs/DIY" tabName="DIY" /> */}
          <Tab routeToPath="/tabs/JoinUs" tabName="Join Us" />
          <Tab routeToPath="/tabs/Contact" tabName="Contact" />
          <Tab routeToPath="/tabs/Support" tabName="Support" />
        </div>
      </nav>
    </div>
  );
}
