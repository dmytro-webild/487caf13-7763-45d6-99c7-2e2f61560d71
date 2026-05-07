"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const navItems = [
  { name: "Home", id: "/" },
  { name: "Contact", id: "/contact" },
  { name: "Login", id: "/login" }
];

export default function ContactPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
           <NavbarStyleApple navItems={navItems} brandName="AnimeVerse" />
        </div>
        <div id="contact" data-section="contact">
          <ContactCenter 
              title="Contact Us"
              description="Reach out for any inquiries or support."
              tag="Contact"
              background={{ variant: "sparkles-gradient" }}
              useInvertedBackground={false}
          />
        </div>
        <div id="footer" data-section="footer">
           <FooterBaseReveal logoText="AnimeVerse" columns={[]} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}