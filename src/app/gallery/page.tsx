"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function GalleryPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
           <NavbarStyleApple navItems={[{ name: "Home", id: "/" }, { name: "Success Stories", id: "/success-stories" }, { name: "Blog", id: "/blog" }, { name: "Gallery", id: "/gallery" }]} brandName="AnimeVerse" />
        </div>
        <div id="gallery" data-section="gallery">
          <ProductCardTwo title="Gallery" description="Explore our visual collection." gridVariant="bento-grid" animationType="blur-reveal" textboxLayout="default" useInvertedBackground={false} products={[]} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}