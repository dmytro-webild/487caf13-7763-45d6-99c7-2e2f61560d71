"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function SuccessStoriesPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple navItems={[{ name: "Home", id: "/" }, { name: "Success Stories", id: "/success-stories" }, { name: "Blog", id: "/blog" }, { name: "Gallery", id: "/gallery" }]} brandName="AnimeVerse" />
        <MetricCardFourteen title="Transformations" tag="Impact" metrics={[{ id: '1', value: '10k+', description: 'Stories Shared' }, { id: '2', value: '500+', description: 'Community Events' }]} />
        <TestimonialCardFive title="Success Stories" description="See how our community has evolved." textboxLayout="default" testimonials={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}