import { Button } from '@/components/ui/button';

export default function WordWizardsFooter() {
  return (
    <footer className="bg-[#0A0A1A] text-gray-300 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-transparent bg-clip-text">WordWizards</h3>
          <p className="text-base text-gray-400 text-center max-w-md">
            Transformando ideas en experiencias digitales excepcionales.
          </p>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} WordWizards. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 