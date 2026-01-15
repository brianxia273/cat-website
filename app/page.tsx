"use client"
import Home from "./tabs/Home/page";
import { Analytics } from "@vercel/analytics/next"


export default function HomePage() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}
