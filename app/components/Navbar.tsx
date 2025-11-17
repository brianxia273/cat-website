"use client";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <nav className="w-full flex justify-end py-4 px-6">
      <div className="flex gap-10 text text-theme-dk-grey">
        <Link to="/" className={` ${isActive("/") ? "text-theme-red" : ""}`}>
          Home
        </Link>
        <Link
          to="/our-work"
          className={` ${isActive("/our-work") ? "text-theme-red" : ""}`}
        >
          Our Work
        </Link>
        <Link
          to="/about-us"
          className={` ${isActive("/about-us") ? "text-theme-red" : ""}`}
        >
          About Us
        </Link>
        <Link
          to="/blog"
          className={` ${isActive("/blog") ? "text-theme-red" : ""}`}
        >
          Blog
        </Link>
        <Link
          to="/diy"
          className={` ${isActive("/diy") ? "text-theme-red" : ""}`}
        >
          DIY
        </Link>
        <Link
          to="/join-us"
          className={` ${isActive("/join-us") ? "text-theme-red" : ""}`}
        >
          Join Us
        </Link>
        <Link
          to="/funding"
          className={` ${isActive("/funding") ? "text-theme-red" : ""}`}
        >
          Funding
        </Link>
        <Link
          to="/contact"
          className={` ${isActive("/contact") ? "text-theme-red" : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
