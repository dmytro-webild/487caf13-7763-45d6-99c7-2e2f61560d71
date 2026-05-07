"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function BlogPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple navItems={[{ name: "Home", id: "/" }, { name: "Success Stories", id: "/success-stories" }, { name: "Blog", id: "/blog" }, { name: "Gallery", id: "/gallery" }]} brandName="AnimeVerse" />
        <BlogCardOne title="Our Blog" description="Latest news and insights from the team." animationType="slide-up" textboxLayout="default" blogs={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}