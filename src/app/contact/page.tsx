"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const navItems = [
  { name: "Home", id: "/" },
  { name: "Trending", id: "/#trending" },
  { name: "Movies", id: "/#movies" },
  { name: "Contact Us", id: "/contact" },
  { name: "Login", id: "/login" }
];

export default function ContactPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple navItems={navItems} brandName="AnimeVerse" />
        <ContactCenter 
            title="Contact Us"
            description="Reach out for any inquiries or support."
            tag="Contact"
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
        />
        <FooterBaseReveal logoText="AnimeVerse" columns={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}