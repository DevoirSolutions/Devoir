'use client';

import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import wordWizardsLogoSVG from "../assets/wordwizards_logo_vec-02.svg";

const wwColorScheme = {
  background: "bg-[#0A0A1A]/95", 
  navbarSolidBg: "bg-[#12121F]", 
  textPrimary: "text-gray-200",
  textHover: "text-white",
  accent: "bg-[#4A90E2]",
  accentHover: "bg-[#357ABD]",
  sheetBackground: "bg-[#1A1A2E]", 
};

export default function WordWizardsNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isProjectPage = location.startsWith("/proyecto/wordwizards"); 

  // Define sections. If on wordwizards project page, use project-specific links.
  // Otherwise, assume general site links (can be adapted)
  const sections = isProjectPage 
    ? [
        { name: "Descripción", href: "#heroP" }, // Maps to "Acerca del proyecto" in details page
        { name: "Detalles", href: "#about" },    // Maps to "Características principales"
        { name: "Galería", href: "#gallery" },   // Maps to gallery if it exists
      ]
    : [ // Fallback/general site links - adjust as needed
        { name: "Inicio", href: "/" }, // Link to home
        { name: "Talleres", href: "/#talleres" }, // Example general link
        { name: "Contacto", href: "/#contact" },
      ];
  
  const contactButtonText = "Contactanos";
  const contactButtonLink = "/#contact";


  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback if element not found on current page (e.g., navigating from a different page)
        const targetPath = isProjectPage ? `/proyecto/wordwizards${href}` : href;
        window.location.href = targetPath.startsWith("/#") ? targetPath.substring(1) : targetPath;
      }
    } else if (href.startsWith("http")) {
        window.open(href, "_blank", "noopener noreferrer");
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${wwColorScheme.navbarSolidBg} shadow-lg backdrop-blur-sm bg-opacity-95`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        {/* WordWizards Logo - Text based */}
        <Link href={isProjectPage ? "/proyecto/wordwizards" : "/"}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <img src={wordWizardsLogoSVG} alt="WordWizards" className="h-10" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          {sections.map((section) => (
            <button
              key={section.name}
              className={`${wwColorScheme.textPrimary} hover:${wwColorScheme.textHover} font-medium transition-colors`}
              onClick={() => scrollToSection(section.href)}
            >
              {section.name}
            </button>
          ))}
          <Button 
            className={`${wwColorScheme.accent} hover:${wwColorScheme.accentHover} text-white px-6`}
            onClick={() => scrollToSection(contactButtonLink)}
          >
            {contactButtonText}
          </Button>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2" aria-label="Menu">
                <Menu className={`w-6 h-6 ${wwColorScheme.textPrimary}`} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className={`${wwColorScheme.sheetBackground} ${wwColorScheme.textPrimary}`}>
              <div className="flex flex-col gap-6 mt-8">
                {sections.map((section) => (
                  <button
                    key={section.name}
                    className={`${wwColorScheme.textPrimary} hover:${wwColorScheme.textHover} font-medium transition-colors text-left`}
                    onClick={() => {
                      scrollToSection(section.href);
                    }}
                  >
                    {section.name}
                  </button>
                ))}
                <Button 
                  className={`${wwColorScheme.accent} hover:${wwColorScheme.accentHover} text-white mt-4`}
                  onClick={() => {
                    scrollToSection(contactButtonLink);
                  }}
                >
                  {contactButtonText}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
} 