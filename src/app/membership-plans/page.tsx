"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';

export default function MembershipPlans() {
  return (
    <ThemeProvider>
      <NavbarStyleApple 
        navItems={[{name: "Home", id: "/"}, {name: "Pricing", id: "/membership-plans"}, {name: "Nutrition", id: "/diet-nutrition"}, {name: "BMI Calculator", id: "/bmi-calculator"}]}
        brandName="AnimeVerse" 
      />
      <PricingCardOne 
        title="Membership Plans"
        description="Choose the plan that fits your anime lifestyle."
        animationType="slide-up"
        plans={[
          { id: "free", badge: "Basic", price: "$0", subtitle: "Essential access", features: ["Access to library", "Limited quality"] },
          { id: "pro", badge: "Premium", price: "$9.99", subtitle: "Unlimited access", features: ["4K streaming", "Offline viewing", "No ads"] }
        ]}
      />
    </ThemeProvider>
  );
}