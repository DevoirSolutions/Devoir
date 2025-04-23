'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WordWizardsNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: 'about', label: 'Descripción' },
    { id: 'features', label: 'Detalles' },
    { id: 'gallery', label: 'Galería' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A1A]/95 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-24">
          <a href="#" className="flex items-center" onClick={(e) => handleClick(e, 'top')}>
            <span className="text-3xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-transparent bg-clip-text">WordWizards</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className="text-base font-medium text-gray-300 hover:text-[#4A90E2] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="https://www.wordwizards.pro/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white text-base px-6 py-2">
                Ver sitio en vivo
              </Button>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-300 hover:text-[#4A90E2]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0A0A1A]/95 backdrop-blur-md absolute top-24 left-0 right-0 py-6 px-6">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className="text-base font-medium text-gray-300 hover:text-[#4A90E2] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="https://www.wordwizards.pro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-[#4A90E2] hover:bg-[#357ABD] text-white text-base">
                  Ver sitio en vivo
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 