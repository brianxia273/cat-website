import { useState } from "react"

interface CommHighProps {
  events: Array<[string, string, string]>;
}

function GalleryTabs({ events }: CommHighProps) {
  const [activeTab, setActiveTab] = useState(0);
  return (<div>{
    events.map(([subtitle, descrip, date], index) => {
      return (
        <div key={index} className="flex flex-col cursor-pointer"
          onClick={() => { setActiveTab(index) }}>
          <h3 className={`${activeTab === index ? "text-theme-dk-grey" : "text-theme-lt-grey"}`}>{subtitle}</h3>
          <p className="">{descrip}</p>
          <p className="">{date}</p>
          <img src="/assets/Landing/line-full.svg" alt="" />
        </div>
      )
    })}</div>)
}

function CommHighText() {
  return (
    <div className="flex flex-col">
      <h2 className="heading">Community Highlights</h2>
    </div>
  )
}

export function CommunityHighlights({ events }: CommHighProps) {
  return (
    <div className="h-250 w-full px-20 flex justify-between">
    </div>
  )
}