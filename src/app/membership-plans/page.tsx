"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';

export default function MembershipPlans() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          navItems={[{name: "Home", id: "/"}, {name: "Pricing", id: "/membership-plans"}, {name: "Nutrition", id: "/diet-nutrition"}, {name: "BMI Calculator", id: "/bmi-calculator"}]}
          brandName="AnimeVerse" 
        />
      </div>
      <div id="pricing" data-section="pricing">
        <PricingCardNine 
          title="Membership Plans"
          description="Choose the plan that fits your anime lifestyle."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            { id: "free", title: "Basic", price: "$0", period: "/mo", features: ["Access to library", "Limited quality"], button: { text: "Sign Up" } },
            { id: "pro", title: "Premium", price: "$9.99", period: "/mo", features: ["4K streaming", "Offline viewing", "No ads"], button: { text: "Go Pro" } }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}