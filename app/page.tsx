"use client"
import dynamic from "next/dynamic";

const AppRouter = dynamic(() => import("./components/RouterProvider"), {
  ssr: false,
});


export default function Page() {
  return <AppRouter />;
}