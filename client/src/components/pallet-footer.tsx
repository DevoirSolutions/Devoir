import { Link } from "wouter";
import { motion } from "framer-motion";
import palletLogo from "../assets/pallet-02-con-nombre.png";

export default function PalletFooter() {
  return (
    <footer className="bg-[#0a2a45] text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <img src={palletLogo} alt="Pallet" className="h-10 mb-4 brightness-150" />
            <p className="text-gray-300 text-sm">
              Sistema integral para la gestión de inventario y ventas para empresas que buscan optimizar sus procesos.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#55a1e8]">Producto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features">
                  <a className="text-gray-300 hover:text-white text-sm">Características</a>
                </Link>
              </li>
              <li>
                <Link href="/#pricing">
                  <a className="text-gray-300 hover:text-white text-sm">Precios</a>
                </Link>
              </li>
              <li>
                <Link href="/#demo">
                  <a className="text-gray-300 hover:text-white text-sm">Solicitar demo</a>
                </Link>
              </li>
              <li>
                <Link href="/#updates">
                  <a className="text-gray-300 hover:text-white text-sm">Actualizaciones</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#55a1e8]">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#help">
                  <a className="text-gray-300 hover:text-white text-sm">Centro de ayuda</a>
                </Link>
              </li>
              <li>
                <Link href="/#docs">
                  <a className="text-gray-300 hover:text-white text-sm">Documentación</a>
                </Link>
              </li>
              <li>
                <Link href="/#guides">
                  <a className="text-gray-300 hover:text-white text-sm">Guías de uso</a>
                </Link>
              </li>
              <li>
                <Link href="/#api">
                  <a className="text-gray-300 hover:text-white text-sm">API</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#55a1e8]">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">support@pallet.app</li>
              <li className="text-gray-300 text-sm">+54 9 11 5555-5555</li>
              <li className="text-gray-300 text-sm">Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-[#144268] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-2 md:mb-0">
            © {new Date().getFullYear()} Pallet. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="/terms">
              <a className="text-gray-400 text-xs hover:text-white">Términos de servicio</a>
            </Link>
            <Link href="/privacy">
              <a className="text-gray-400 text-xs hover:text-white">Política de privacidad</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 