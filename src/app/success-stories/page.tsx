"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function SuccessStoriesPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
           <NavbarStyleApple navItems={[{ name: "Home", id: "/" }, { name: "Success Stories", id: "/success-stories" }, { name: "Blog", id: "/blog" }, { name: "Gallery", id: "/gallery" }]} brandName="AnimeVerse" />
        </div>
        <div id="metrics" data-section="metrics">
           <MetricCardFourteen title="Transformations" tag="Impact" metrics={[{ id: '1', value: '10k+', description: 'Stories Shared' }, { id: '2', value: '500+', description: 'Community Events' }]} useInvertedBackground={false} />
        </div>
        <div id="testimonials" data-section="testimonials">
           <TestimonialCardFifteen testimonial="This community changed my life!" rating={5} author="Alex" avatars={[]} ratingAnimation="slide-up" avatarsAnimation="slide-up" useInvertedBackground={false} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}