import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import palletLogo from "../assets/pallet-02-con-nombre.png";
import { useState } from "react";

export default function PalletNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const sections = [
    { name: "Inicio", href: "/#hero" },
    { name: "Funcionalidades", href: "/#features" },
    { name: "Precios", href: "/#pricing" },
    { name: "Contacto", href: "/#contact" }
  ];

  const scrollToSection = (id: string) => {
    // Si estamos en la página de Pallet, volver a la página principal y luego desplazarse
    if (window.location.pathname.includes("/proyecto")) {
      window.location.href = id;
    } else {
      const element = document.getElementById(id.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e3251] shadow-lg backdrop-blur-sm bg-opacity-90">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <img src={palletLogo} alt="Pallet" className="h-10 brightness-150" />
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
              className="text-gray-200 hover:text-white font-medium transition-colors"
              onClick={() => scrollToSection(section.href)}
            >
              {section.name}
            </button>
          ))}
          <Button 
            className="bg-[#55a1e8] hover:bg-[#3d8bd7] text-white px-6"
            onClick={() => scrollToSection("/#contact")}
          >
            Solicitar Demo
          </Button>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2" aria-label="Menu">
                <Menu className="w-6 h-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0a2a45] text-white">
              <div className="flex flex-col gap-6 mt-8">
                {sections.map((section) => (
                  <button
                    key={section.name}
                    className="text-gray-200 hover:text-white font-medium transition-colors text-left"
                    onClick={() => {
                      scrollToSection(section.href);
                      setIsOpen(false);
                    }}
                  >
                    {section.name}
                  </button>
                ))}
                <Button 
                  className="bg-[#55a1e8] hover:bg-[#3d8bd7] text-white mt-4"
                  onClick={() => {
                    scrollToSection("/#contact");
                    setIsOpen(false);
                  }}
                >
                  Solicitar Demo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
} 