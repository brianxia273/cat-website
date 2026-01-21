"use client"
import Home from "./Home/page";
import { Analytics } from "@vercel/analytics/next"


export default function HomePage() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}
