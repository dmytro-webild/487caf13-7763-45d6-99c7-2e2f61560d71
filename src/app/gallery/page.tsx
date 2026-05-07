"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function GalleryPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple navItems={[{ name: "Home", id: "/" }, { name: "Success Stories", id: "/success-stories" }, { name: "Blog", id: "/blog" }, { name: "Gallery", id: "/gallery" }]} brandName="AnimeVerse" />
        <ProductCardTwo title="Gallery" description="Explore our visual collection." gridVariant="bento-grid" animationType="blur-reveal" textboxLayout="default" products={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}