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
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Trending",
          id: "trending",
        },
        {
          name: "Characters",
          id: "characters",
        },
        {
          name: "Movies",
          id: "movies",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
      ]}
      brandName="AnimeVerse"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlay
      title="Welcome to AnimeVerse"
      description="Experience the ultimate cinematic anime streaming portal, featuring cutting-edge visuals and neon aesthetics."
      imageSrc="http://img.b2bpic.net/free-photo/pink-haired-cyberpunk-vigilante-neon-cityscape_23-2152031331.jpg"
      showDimOverlay={true}
      textPosition="bottom"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100189.jpg",
          alt: "Androgynous avatar of non-binary queer person",
        },
        {
          src: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100243.jpg",
          alt: "Androgynous avatar of non-binary queer person",
        },
        {
          src: "http://img.b2bpic.net/free-photo/digital-art-young-student-school_23-2151065209.jpg",
          alt: "Digital art of young student in school",
        },
        {
          src: "http://img.b2bpic.net/free-photo/digital-art-young-student-school_23-2151065219.jpg",
          alt: "Digital art of young student in school",
        },
        {
          src: "http://img.b2bpic.net/free-photo/anime-character-using-virtual-reality-glasses-metaverse_23-2151568825.jpg",
          alt: "Anime character using virtual reality glasses in the metaverse",
        },
      ]}
      avatarText="Join 50k+ anime enthusiasts"
    />
  </div>

  <div id="trending" data-section="trending">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Neo-Cyber Tokyo",
          description: "A thrilling journey through a futuristic neon metropolis.",
          imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-samurai-with-pink-hair_23-2152007983.jpg",
        },
        {
          title: "Starlight Pilots",
          description: "Epic space battles inspired by classic mecha tropes.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-rainbow-nature_23-2151498235.jpg",
        },
        {
          title: "Shadow Runners",
          description: "Intense mystery thriller with dark atmospheric animation.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-alien-spooky-landscape_1048-14515.jpg",
        },
      ]}
      title="Trending Anime"
      description="Catch the most talked-about series, updated daily for your viewing pleasure."
    />
  </div>

  <div id="characters" data-section="characters">
      <TeamCardTen
      useInvertedBackground={true}
      title="Legendary Characters"
      tag="Iconic Figures"
      membersAnimation="slide-up"
      members={[
        {
          id: "c1",
          name: "Captain V",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-anime-character-with-stars_23-2151556354.jpg",
        },
        {
          id: "c2",
          name: "Luna Star",
          imageSrc: "http://img.b2bpic.net/free-photo/mountain-landscape-with-fantasy-style-scene_23-2151125189.jpg",
        },
        {
          id: "c3",
          name: "Shadow Knight",
          imageSrc: "http://img.b2bpic.net/free-photo/anime-style-character-space_23-2151134155.jpg",
        },
        {
          id: "c4",
          name: "Nova Tech",
          imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-woman-long-coat_23-2151975922.jpg",
        },
      ]}
      memberVariant="card"
    />
  </div>

  <div id="movies" data-section="movies">
      <ProductCardFour
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "m1",
          name: "Cyber Rain",
          price: "4.99",
          variant: "4K Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-boy-illustration_23-2151728224.jpg",
        },
        {
          id: "m2",
          name: "Neon Horizons",
          price: "5.99",
          variant: "4K Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/fantasy-magic-landscape_23-2151502940.jpg",
        },
        {
          id: "m3",
          name: "Silent Glitch",
          price: "3.99",
          variant: "HD Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-portrait-young-girl-with-high-tech_23-2151133526.jpg",
        },
        {
          id: "m4",
          name: "Void Chase",
          price: "4.99",
          variant: "HD Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/anime-character-using-virtual-reality-glasses-metaverse_23-2151568854.jpg",
        },
        {
          id: "m5",
          name: "Digital Dreams",
          price: "6.99",
          variant: "4K Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-flower-landscape-painting_23-2151596902.jpg",
        },
        {
          id: "m6",
          name: "Memory Core",
          price: "3.99",
          variant: "HD Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/galaxy-background-illustration_23-2151909851.jpg",
        },
      ]}
      title="Must-Watch Movies"
      description="Full-length cinematic masterpieces curated for true fans."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Rei A.",
          role: "Super Fan",
          testimonial: "The best anime streaming experience ever!",
          imageSrc: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100261.jpg",
        },
        {
          id: "2",
          name: "Shinji K.",
          role: "Reviewer",
          testimonial: "Visually stunning and incredibly smooth.",
          imageSrc: "http://img.b2bpic.net/free-photo/flower-robot-environment-cute-concept_53876-147714.jpg",
        },
        {
          id: "3",
          name: "Asuka M.",
          role: "Content Creator",
          testimonial: "Neon visuals perfectly fit the cyberpunk vibe.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-hoodie-cartoon-style_23-2151134234.jpg",
        },
        {
          id: "4",
          name: "Kaworu N.",
          role: "Fan",
          testimonial: "Can't wait for more content to drop.",
          imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-anime-kawaii-illustration_23-2150559286.jpg",
        },
        {
          id: "5",
          name: "Mari I.",
          role: "Subscriber",
          testimonial: "Professional UI and amazing collection.",
          imageSrc: "http://img.b2bpic.net/free-photo/art-nouveau-portrait-beautiful-woman_23-2151467726.jpg",
        },
      ]}
      title="Fan Reviews"
      description="Hear what the community thinks of our latest releases."
    />
  </div>

  <div id="news" data-section="news">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Community Updates"
      description="Latest news and updates regarding our platform and new anime seasons."
      blogs={[
        {
          id: "b1",
          category: "News",
          title: "New Season Announced",
          excerpt: "The next season of our biggest hit arrives soon.",
          imageSrc: "http://img.b2bpic.net/free-photo/anime-style-student-attending-school_23-2151066375.jpg",
          authorName: "AnimeVerse",
          authorAvatar: "http://img.b2bpic.net/free-photo/cartoon-woman-wearing-glasses_23-2151136868.jpg",
          date: "Oct 2023",
        },
        {
          id: "b2",
          category: "Updates",
          title: "UI Overhaul",
          excerpt: "Experience the brand new neon theme.",
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-experts-working-with-tech-devices-neon-lights_23-2151645655.jpg",
          authorName: "AnimeVerse",
          authorAvatar: "http://img.b2bpic.net/free-photo/anime-girl-cyberpunk-city_23-2152008009.jpg",
          date: "Nov 2023",
        },
        {
          id: "b3",
          category: "Event",
          title: "Anime Con Virtual",
          excerpt: "Join our global online fan event.",
          imageSrc: "http://img.b2bpic.net/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252453.jpg",
          authorName: "AnimeVerse",
          authorAvatar: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100254.jpg",
          date: "Dec 2023",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Is the content free?",
          content: "We offer both free and premium tiers.",
        },
        {
          id: "f2",
          title: "Can I watch offline?",
          content: "Yes, premium users can download for offline viewing.",
        },
        {
          id: "f3",
          title: "Are trailers included?",
          content: "Yes, every title includes a cinematic trailer.",
        },
      ]}
      sideTitle="Questions?"
      sideDescription="Check our FAQ for common queries."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact"
      title="Join the Verse"
      description="Sign up for updates, new trailers, and exclusive anime content."
      imageSrc="http://img.b2bpic.net/free-photo/fantasy-scene-anime-style_23-2151135283.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="AnimeVerse"
      columns={[
        {
          title: "Platform",
          items: [
            {
              label: "Watchlist",
              href: "#",
            },
            {
              label: "Reviews",
              href: "#reviews",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com",
            },
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
