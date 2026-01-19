"use client"
import { useState } from "react";

interface SocialTagProps {
  iconsrc: string;
  label: string;
  link: string;
  className?: string;
}

interface TextFieldProps {
  label: string;
  size: "Line" | "Area";
  val: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

// TODO: Firebase API


function SocialTag({ iconsrc, label, link, className }: SocialTagProps) {
  const iconStyles = "h-6 w-auto";
  return (
    <a href={link} className="cursor-pointer flex gap-2 hover:grayscale grayscale-0 hover:brightness-80 brightness-100 transition-all">
      <img src={iconsrc} alt="" className={iconStyles} />
      <p className={`text-base leading-normal text-theme-white ${className}`}>{label}</p>
    </a>
  )
}


function ContactHeader({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img src="/assets/Contact/blob-bg.svg" alt="" className="absolute left-1/2 -translate-x-1/2 -top-10 w-full -z-10"></img>
      {/* Note the heading and socialtags arent meant to be aligned */}
      <div className={`h-60 w-full universepad flex justify-between`}>
        <h1 className="contactheading pt-12">Contact Us</h1>
        <div className="flex flex-col gap-4 justify-center">
          <SocialTag iconsrc="/assets/Contact/white-email.svg" label="assistivetech@cornell.edu" link="mailto:assistivetech@cornell.edu" className="underline underline-offset-3" />
          <SocialTag iconsrc="/assets/Contact/white-linkedin.svg" label="Cornell Assistive Technologies" link="https://www.linkedin.com/company/cornellassist/" />
          <SocialTag iconsrc="/assets/Contact/white-insta.svg" label="cornellassist" link="https://www.instagram.com/cornellassist/" />
        </div>
      </div>
    </div>
  )
}

function TextField({ label, size, val, setter, className }: TextFieldProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <p className="formlabel text-text-dk-grey">{label}
        <span className="text-theme-red ml-1">*</span>
      </p>
      {size === "Line" ? (
        <input
          type="text"
          value={val}
          onChange={event => { setter(event.target.value) }}
          className="border-2 rounded-sm border-text-grey"
          required
        />
      ) : (
        <textarea
          value={val}
          rows={10}
          onChange={(event) => setter(event.target.value)}
          className="border-2 rounded-sm border-text-grey"
          required
        />
      )}
    </div>
  );
}


function Form({ className }: { className?: string }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isValidForm = firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "" && message.trim() !== ""

  return (
    <div className={`flex flex-col bg-theme-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] h-160 w-141 rounded-[20px] px-10 pt-4 ${className}`}>
      <h2 className="heading">Send a Message</h2>
      <div className="flex pt-6 gap-10">
        <TextField
          label="First Name"
          size="Line"
          val={firstName}
          setter={setFirstName}
        />
        <TextField
          label="Last Name"
          size="Line"
          val={lastName}
          setter={setLastName}
        />
      </div>
      <TextField
        label="Email"
        size="Line"
        val={email}
        setter={setEmail}
        className="mt-4"
      />
      <TextField
        label="Message"
        size="Area"
        val={message}
        setter={setMessage}
        className="mt-4"
      />
      <button type="submit" className="mt-6 w-full h-10 text-center formlabel text-theme-white bg-theme-red rounded-sm
      hover:bg-theme-dk-red cursor-pointer transition-colors duration-200"
        disabled={!isValidForm}>
        Submit
      </button>
    </div>
  );
}

export function ContactForm() {
  return (
    <div className="h-220 mt-24 relative">
      <ContactHeader className="absolute left-0 top-0" />
      <Form className="absolute left-24 top-50" />

    </div>
  )
}