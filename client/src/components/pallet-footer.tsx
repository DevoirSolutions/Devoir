import { Link } from "wouter";
import palletLogo from "../assets/pallet-02-con-nombre.png";

export default function PalletFooter() {
  return (
    <footer className="bg-[#0a2a45] text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="md:col-span-1">
            <img src={palletLogo} alt="Pallet" className="h-10 mb-4 brightness-150" />
            <p className="text-gray-300 text-sm max-w-md">
              Sistema integral para la gestión de inventario y ventas para empresas que buscan optimizar sus procesos.
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-[#144268] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-2 md:mb-0">
            © {new Date().getFullYear()} devoir solutions. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="/">
              <a className="text-gray-400 text-xs hover:text-white">Volver al inicio</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 