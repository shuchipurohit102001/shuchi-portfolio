import Contact from "@/components/sections/Contact";
import Credentials from "@/components/sections/Credentials";
import Hero from "@/components/sections/Hero";
import Offerings from "@/components/sections/Offerings";
import Ventures from "@/components/sections/Ventures";
import WhatIDo from "@/components/sections/WhatIDo";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Ventures />
      <Offerings />
      <Credentials />
      <Contact />
    </>
  );
}
