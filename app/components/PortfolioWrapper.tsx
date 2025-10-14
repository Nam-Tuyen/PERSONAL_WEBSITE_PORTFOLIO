"use client";
import { useState, useEffect } from "react";
import PortfolioLayout from "./PortfolioLayout";

export default function PortfolioWrapper({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en");
  const [activeSection, setActiveSection] = useState("about");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <PortfolioLayout
      language={language}
      onLanguageChange={setLanguage}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    >
      {children}
    </PortfolioLayout>
  );
}
