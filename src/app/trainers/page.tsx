"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function TrainersPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple brandName="AnimeVerse" navItems={[{ name: "Home", id: "/" }, { name: "About Us", id: "/about" }, { name: "Fitness Programs", id: "/programs" }, { name: "Trainers", id: "/trainers" }]} />
        </div>
        <div id="trainers" data-section="trainers">
            <TeamCardEleven 
              title="Meet Our Expert Trainers"
              animationType="slide-up"
              textboxLayout="default"
              useInvertedBackground={false}
              description="Learn from the best in the industry."
              groups={[
                {
                  id: "g1", 
                  groupTitle: "Core Team", 
                  members: [{ id: "m1", title: "Coach Alex", subtitle: "Expertise: Cardio", detail: "10+ years experience", imageSrc: "/placeholder.jpg" }]
                }
              ]}
            />
        </div>
        <div id="footer" data-section="footer">
          <FooterBaseReveal logoText="AnimeVerse" columns={[{ title: "Links", items: [{ label: "Home", href: "/" }] }]} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}