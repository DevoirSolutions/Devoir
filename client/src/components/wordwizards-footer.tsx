import { Link } from "wouter";
import wordWizardsLogoSVG from "../assets/wordwizards_logo_vec-02.svg"; // Import the SVG logo

const wwFooterColorScheme = {
  background: "bg-[#0A0A1A]", 
  textPrimary: "text-gray-300",
  textSecondary: "text-gray-400",
  textLinkHover: "hover:text-white", // Or hover:text-[#4A90E2]
  borderColor: "border-gray-700", // Adjusted for #0A0A1A background
};

export default function WordWizardsFooter() {
  return (
    <footer className={`${wwFooterColorScheme.background} text-white py-12`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="md:col-span-1">
            <img src={wordWizardsLogoSVG} alt="WordWizards" className="h-10 mb-4" />
            <p className={`${wwFooterColorScheme.textPrimary} text-sm max-w-md`}>
            Inglés, cerveza, y charlas sin presiones. Un taller social para soltarte y disfrutar el idioma con encuentros online y en bares.
            </p>
          </div>
        </div>
        
        <div className={`mt-10 pt-6 border-t ${wwFooterColorScheme.borderColor} flex flex-col md:flex-row justify-between items-center`}>
          <p className={`${wwFooterColorScheme.textSecondary} text-xs mb-2 md:mb-0`}>
            © {new Date().getFullYear()} devoir solutions. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="/">
              <a className={`${wwFooterColorScheme.textSecondary} text-xs ${wwFooterColorScheme.textLinkHover}`}>Volver al inicio</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 