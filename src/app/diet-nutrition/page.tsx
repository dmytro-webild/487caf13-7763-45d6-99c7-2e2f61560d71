"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import { Apple, Leaf, Utensils } from "lucide-react";

export default function NutritionPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          navItems={[{name: "Home", id: "/"}, {name: "Pricing", id: "/membership-plans"}, {name: "Nutrition", id: "/diet-nutrition"}, {name: "BMI Calculator", id: "/bmi-calculator"}]}
          brandName="AnimeVerse" 
        />
      </div>
      <div id="nutrition" data-section="nutrition">
        <FeatureCardSix
          title="Nutrition Guides"
          description="Fuel your body properly for an active lifestyle."
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
              { title: "Healthy Eating", description: "Balanced daily meal plans.", imageSrc: "/placeholder.jpg" },
              { title: "Plant-based", description: "Nutrient dense plant guides.", imageSrc: "/placeholder.jpg" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}