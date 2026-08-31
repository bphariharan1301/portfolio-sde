import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { Impact } from "@/components/sections/Impact";
import { Skills } from "@/components/sections/Skills";
import { WhatIBuild } from "@/components/sections/WhatIBuild";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIBuild />
      <FeaturedWork />
      <Impact />
      <Experience />
      <HowIWork />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
