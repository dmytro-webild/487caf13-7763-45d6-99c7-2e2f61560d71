"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function AboutPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
           <NavbarStyleApple brandName="AnimeVerse" navItems={[{ name: "Home", id: "/" }, { name: "About Us", id: "/about" }, { name: "Fitness Programs", id: "/programs" }, { name: "Trainers", id: "/trainers" }]} />
        </div>
        <div id="about" data-section="about">
            <MediaAbout 
              title="About Our Fitness Community"
              description="Welcome to our fitness sanctuary where we combine anime culture with wellness."
              useInvertedBackground={false}
            />
        </div>
        <div id="footer" data-section="footer">
           <FooterBaseReveal logoText="AnimeVerse" columns={[{ title: "Links", items: [{ label: "Home", href: "/" }] }]} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}