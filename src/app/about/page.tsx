"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function AboutPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple brandName="AnimeVerse" navItems={[{ name: "Home", id: "/" }, { name: "About Us", id: "/about" }, { name: "Fitness Programs", id: "/programs" }, { name: "Trainers", id: "/trainers" }]} />
        <div data-section="about">
            <InlineImageSplitTextAbout 
              heading={[{ type: "text", content: "About Our Fitness Community" }]}
              useInvertedBackground={false}
            />
        </div>
        <FooterBaseReveal logoText="AnimeVerse" columns={[{ title: "Links", items: [{ label: "Home", href: "/" }] }]} />
      </ReactLenis>
    </ThemeProvider>
  );
}