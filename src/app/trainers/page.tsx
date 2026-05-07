"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function TrainersPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple brandName="AnimeVerse" navItems={[{ name: "Home", id: "/" }, { name: "About Us", id: "/about" }, { name: "Fitness Programs", id: "/programs" }, { name: "Trainers", id: "/trainers" }]} />
        <div data-section="trainers">
            <TeamCardEleven 
              title="Meet Our Expert Trainers"
              animationType="slide-up"
              textboxLayout="default"
              groups={[
                {
                  id: "g1",                  groupTitle: "Core Team",                  members: [{ id: "m1", title: "Coach Alex", subtitle: "Expertise: Cardio", detail: "10+ years experience", imageSrc: "/placeholder.jpg" }]
                }
              ]}
            />
        </div>
        <FooterBaseReveal logoText="AnimeVerse" columns={[{ title: "Links", items: [{ label: "Home", href: "/" }] }]} />
      </ReactLenis>
    </ThemeProvider>
  );
}