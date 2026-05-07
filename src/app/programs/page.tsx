"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ProgramsPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
           <NavbarStyleApple brandName="AnimeVerse" navItems={[{ name: "Home", id: "/" }, { name: "About Us", id: "/about" }, { name: "Fitness Programs", id: "/programs" }, { name: "Trainers", id: "/trainers" }]} />
        </div>
        <div id="programs" data-section="programs">
            <TeamCardEleven 
              title="Our Fitness Programs"
              animationType="slide-up"
              textboxLayout="default"
              useInvertedBackground={false}
              description="Explore our curated fitness programs designed for all levels."
              groups={[
                { 
                    id: "g1", 
                    groupTitle: "Fitness Classes", 
                    members: [
                        { id: "p1", title: "Yoga Flow", subtitle: "Flexibility", detail: "Join for daily balance.", imageSrc: "/placeholder.jpg" },
                        { id: "p2", title: "HIIT", subtitle: "Cardio", detail: "Burn energy fast.", imageSrc: "/placeholder.jpg" }
                    ]
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