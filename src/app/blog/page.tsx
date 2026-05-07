"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function BlogPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple navItems={[{ name: "Home", id: "/" }, { name: "Success Stories", id: "/success-stories" }, { name: "Blog", id: "/blog" }, { name: "Gallery", id: "/gallery" }]} brandName="AnimeVerse" />
        </div>
        <div id="blog" data-section="blog">
          <BlogCardTwo title="Our Blog" description="Latest news and insights from the team." animationType="slide-up" textboxLayout="default" useInvertedBackground={false} blogs={[]} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}