import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { ButtonRed, ButtonWhite } from './Buttons';

interface EventCardProps {
  title: string;
  description: string;
  img?: { pic: StaticImageData; alt: string };
  redirect?: string;
}

const event1: EventCardProps = {
  title: "Title",
  description: "Some description",
  redirect: "",
}

const event2: EventCardProps = {
  title: "Title",
  description: "Some description",
  redirect: "",
}

const allEvents = [event1, event2]


function OurEventsTopText() {
  return (
    <div className="flex flex-col">
      <h2 className="heading">Our Events</h2>
      <p className="subtext mt-3">Learn more about our upcoming STEM education and community outreach events.</p>
    </div>
  )
}

function EventCard({ title, description, img, redirect }: EventCardProps) {
  return (
    <div className="flex gap-10">
      {/* image */}
      {(img === undefined) ?
        <div className="bg-theme-grey rounded-[20px] h-40 w-40 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]" /> :
        <Image src={img.pic} alt={img.alt} height={img.pic.height} width={img.pic.width}
          className="rounded-[20px] h-40 w-40 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]" />}
      {/* text */}
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <h3 className="cardheading">{title}</h3>
          <p className="cardtext mt-3">{description}</p>
        </div>
        {redirect !== undefined && <ButtonRed label="Learn More" to={redirect} size="S" />}
      </div>
    </div>
  )
}

function OurEventsBottomText() {
  return (
    <div className="flex flex-col">
      <p className="subtext mb-8">Check out our past events on our blog!</p>
      <ButtonRed label="Visit Our Blog" to="/tabs/Blog" size="M" />
    </div>
  )
}

export function OurEvents() {
  return (
    <div className="flex flex-col h-auto w-full universepad py-24" id="our-events">
      <OurEventsTopText />
      <div className="flex flex-col gap-15 my-20">
        {allEvents.map((item, index) => {
          return (
            <EventCard key={`event-${index}`} title={item.title} description={item.description} img={item?.img} redirect={item?.redirect} />
          )
        })}
      </div>
      <OurEventsBottomText />
    </div>
  )
}
