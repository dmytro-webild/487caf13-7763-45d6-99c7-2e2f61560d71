"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ProgramsPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple brandName="AnimeVerse" navItems={[{ name: "Home", id: "/" }, { name: "About Us", id: "/about" }, { name: "Fitness Programs", id: "/programs" }, { name: "Trainers", id: "/trainers" }]} />
        <div data-section="programs">
            <ProductCardThree 
              title="Our Fitness Programs"
              animationType="slide-up"
              gridVariant="bento-grid"
              products={[
                { id: "p1", name: "Yoga Flow", price: "$49", imageSrc: "/placeholder.jpg" },
                { id: "p2", name: "High Intensity", price: "$89", imageSrc: "/placeholder.jpg" }
              ]}
            />
        </div>
        <FooterBaseReveal logoText="AnimeVerse" columns={[{ title: "Links", items: [{ label: "Home", href: "/" }] }]} />
      </ReactLenis>
    </ThemeProvider>
  );
}