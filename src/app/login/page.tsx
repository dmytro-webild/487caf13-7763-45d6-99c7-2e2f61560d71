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

export default function LoginPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
           <NavbarStyleApple navItems={navItems} brandName="AnimeVerse" />
        </div>
        <div id="login" data-section="login">
          <ContactCenter 
              title="Login"
              description="Access your account and continue watching."
              tag="Auth"
              background={{ variant: "plain" }}
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