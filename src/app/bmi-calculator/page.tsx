"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    if (weight && height) {
      const h = parseFloat(height) / 100;
      setBmi(parseFloat(weight) / (h * h));
    }
  };

  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          navItems={[{name: "Home", id: "/"}, {name: "Pricing", id: "/membership-plans"}, {name: "Nutrition", id: "/diet-nutrition"}, {name: "BMI Calculator", id: "/bmi-calculator"}]}
          brandName="AnimeVerse" 
        />
      </div>
      <div className="pt-32 pb-20 px-6 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">BMI Calculator</h1>
        <div className="flex flex-col gap-4 mb-6">
          <input type="number" placeholder="Weight (kg)" className="p-4 rounded-xl border" value={weight} onChange={e => setWeight(e.target.value)} />
          <input type="number" placeholder="Height (cm)" className="p-4 rounded-xl border" value={height} onChange={e => setHeight(e.target.value)} />
          <button onClick={calculate} className="p-4 bg-primary text-white rounded-xl font-bold">Calculate BMI</button>
        </div>
        {bmi !== null && <div className="text-2xl">Your BMI is: {bmi.toFixed(1)}</div>}
      </div>
    </ThemeProvider>
  );
}