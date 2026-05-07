"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import { Apple, Leaf, Utensils } from "lucide-react";

export default function NutritionPage() {
  return (
    <ThemeProvider>
      <NavbarStyleApple 
        navItems={[{name: "Home", id: "/"}, {name: "Pricing", id: "/membership-plans"}, {name: "Nutrition", id: "/diet-nutrition"}, {name: "BMI Calculator", id: "/bmi-calculator"}]}
        brandName="AnimeVerse" 
      />
      <FeatureCardTwentySix
        title="Nutrition Guides"
        description="Fuel your body properly for an active lifestyle."
        textboxLayout="default"
        useInvertedBackground={false}
        features={[
            { title: "Healthy Eating", description: "Balanced daily meal plans.", buttonIcon: Apple },
            { title: "Plant-based", description: "Nutrient dense plant guides.", buttonIcon: Leaf },
            { title: "Performance", description: "Fuel for high energy days.", buttonIcon: Utensils },
            { title: "Recovery", description: "Post-workout nourishment.", buttonIcon: Utensils }
        ]}
      />
    </ThemeProvider>
  );
}