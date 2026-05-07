"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

const navItems = [
  { name: "Home", id: "/" },
  { name: "Trending", id: "/#trending" },
  { name: "Movies", id: "/#movies" },
  { name: "Contact Us", id: "/contact" },
  { name: "Login", id: "/login" }
];

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="blurBottom"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple navItems={navItems} brandName="AnimeVerse" />
  </div>

  <div id="home" data-section="home">
      <HeroOverlay
      title="Welcome to AnimeVerse"
      description="Experience the ultimate cinematic anime streaming portal, featuring cutting-edge visuals and neon aesthetics."
      imageSrc="http://img.b2bpic.net/free-photo/pink-haired-cyberpunk-vigilante-neon-cityscape_23-2152031331.jpg"
      showDimOverlay={true}
      textPosition="bottom"
    />
  </div>

  <div id="trending" data-section="trending">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[]}
      title="Trending Anime"
      description="Catch the most talked-about series, updated daily for your viewing pleasure."
    />
  </div>

  <div id="movies" data-section="movies">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      title="Must-Watch Movies"
      description="Full-length cinematic masterpieces curated for true fans."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="AnimeVerse"
      columns={[]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}