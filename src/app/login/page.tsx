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

export default function LoginPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple navItems={navItems} brandName="AnimeVerse" />
        <div className="min-h-screen flex items-center justify-center pt-20">
            <ContactCenter 
                title="Login"
                description="Access your account and continue watching."
                tag="Auth"
                buttonText="Sign In"
                background={{ variant: "plain" }}
                useInvertedBackground={false}
            />
        </div>
        <FooterBaseReveal logoText="AnimeVerse" columns={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}