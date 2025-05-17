import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import WhyUs from "@/components/sections/why-us";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    if (location.startsWith("/") && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <ScrollArea className="h-[100vh] w-full">
        <main className="min-h-screen pt-16">
          <Hero />
          <WhyUs />
          <Services />
          <Projects />
          <Team />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </main>
      </ScrollArea>
    </>
  );
}