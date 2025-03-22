import { useRoute } from "wouter";
import Navbar from "@/components/navbar";
import PalletNavbar from "@/components/pallet-navbar";
import Footer from "@/components/footer";
import PalletFooter from "@/components/pallet-footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import palletImage from "../assets/pallet-03-sin-nombre.png";
import palletLogoWithName from "../assets/pallet-02-con-nombre.png";

// Datos de ejemplo para los sistemas de software
const projectsDetails = {
  "Pallet": {
    title: "Pallet",
    description: "Sistema destinado a la gestión de inventario y ventas para empresas que buscan optimizar sus procesos.",
    fullDescription: [
      "Pallet es un sistema de gestión de inventario y ventas diseñado específicamente para empresas que necesitan un control eficiente de sus productos y operaciones comerciales.",
      "Nuestra solución permite administrar productos, categorías, clientes, proveedores y todas las operaciones de compra-venta, ofreciendo informes detallados para una mejor toma de decisiones."
    ],
    features: [
      "Gestión centralizada de inventario",
      "Control de ventas y facturación",
      "Administración de clientes y proveedores",
      "Reportes y estadísticas en tiempo real",
      "Sistema de alertas de stock mínimo",
      "Interfaz intuitiva y fácil de usar"
    ],
    benefits: [
      "Optimización del control de stock",
      "Reducción de tiempos en procesos de venta",
      "Acceso a información actualizada del negocio",
      "Mejora en la atención al cliente",
      "Toma de decisiones basada en datos reales"
    ],
    image: palletImage,
    techStack: ["React", "Node.js", "Express", "MongoDB"]
  },
  "marketing-digital-vinoteca": {
    title: "Marketing Digital para Vinoteca",
    description: "Estrategia integral de redes sociales y e-commerce para vinotecas y distribuidores de vinos.",
    fullDescription: [
      "Nuestra solución de Marketing Digital para Vinotecas está diseñada para potenciar la presencia online de negocios vinícolas, combinando estrategias específicas para el sector con tecnologías avanzadas de e-commerce.",
      "El sistema permite gestionar catálogos de productos, promociones especiales y campañas segmentadas, aumentando la visibilidad de la marca y mejorando las ventas a través de múltiples canales digitales."
    ],
    features: [
      "Gestión de catálogos de vinos",
      "Campañas segmentadas por tipos de consumidores",
      "Integración con redes sociales",
      "Estrategias de marketing por email",
      "Analytics avanzado para comportamiento de usuarios",
      "Optimización SEO para productos vinícolas"
    ],
    benefits: [
      "Aumento de visibilidad online en un 150%",
      "Incremento en ventas digitales",
      "Mayor fidelización de clientes",
      "Expansión de la base de clientes",
      "Mejora en la reputación de marca"
    ],
    image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=800&auto=format&fit=crop",
    techStack: ["Shopify", "Meta Business Suite", "Google Analytics", "MailChimp"]
  },
  "app-web-facturacion": {
    title: "App Web de Facturación",
    description: "Sistema de facturación electrónica integrado con AFIP para empresas argentinas.",
    fullDescription: [
      "Nuestra App Web de Facturación es una solución especializada para empresas argentinas que necesitan cumplir con los requisitos de facturación electrónica establecidos por AFIP de manera eficiente y confiable.",
      "El sistema automatiza todo el proceso de emisión, validación y almacenamiento de comprobantes, manteniendo un historial completo y facilitando la presentación de informes fiscales."
    ],
    features: [
      "Emisión de todos los tipos de comprobantes electrónicos",
      "Integración directa con servidores de AFIP",
      "Gestión de clientes y productos",
      "Reportes de ventas y fiscales",
      "Múltiples puntos de venta",
      "Control de pagos y cuentas corrientes"
    ],
    benefits: [
      "Cumplimiento fiscal garantizado",
      "Ahorro de tiempo en procesos administrativos",
      "Reducción de errores en facturación",
      "Acceso a información fiscal en tiempo real",
      "Mejora en gestión financiera"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    techStack: ["React", "Node.js", "AWS", "API AFIP"]
  }
};

export default function ProjectDetails() {
  const [, params] = useRoute("/proyecto/:id");
  const projectId = params?.id || "";
  const project = projectsDetails[projectId as keyof typeof projectsDetails];
  const isPallet = projectId === "Pallet";

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24">
          <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
          <p className="text-gray-600 mb-8">El proyecto que estás buscando no existe o ha sido eliminado.</p>
          <Link href="/#projects">
            <Button variant="default">Volver a Proyectos</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Definir clases específicas basadas en si es Pallet o no
  const isDarkMode = isPallet;
  const bgColor = isDarkMode ? "bg-[#061624]" : "bg-white";
  const textColor = isDarkMode ? "text-gray-200" : "text-gray-700";
  const headingColor = isDarkMode ? "text-[#55a1e8]" : "";
  const cardBgColor = isDarkMode ? "bg-[#0a2a45]" : "";
  const buttonStyle = isDarkMode ? "bg-[#55a1e8] hover:bg-[#3d8bd7] text-white" : "";

  return (
    <>
      {isPallet ? <PalletNavbar /> : <Navbar />}
      <WhatsAppButton />
      <ScrollArea className="h-[100vh] w-full">
        <main className={`min-h-screen pt-24 pb-12 ${isDarkMode ? "bg-[#051525] text-gray-200" : ""}`}>
          <div className="container mx-auto px-4 max-w-6xl">
            <Link href="/#projects">
              <Button 
                variant="ghost" 
                className={`mb-6 flex items-center gap-2 text-sm ${isDarkMode ? "text-gray-300 hover:text-white" : ""}`}
              >
                <ArrowLeft className="h-3 w-3" />
                Volver a Proyectos
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 mb-12"
            >
              <div className="max-w-xl mx-auto md:mx-0 w-full">
                <img 
                  src={isPallet ? palletLogoWithName : project.image} 
                  alt={project.title}
                  className={`rounded-xl shadow-xl w-full h-auto object-contain max-h-[320px] ${isDarkMode ? "brightness-150 bg-[#081f32]/50 p-4" : ""}`}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? "text-[#55a1e8]" : ""}`}>{project.title}</h1>
                <p className={`text-lg mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
                <div className="mb-6">
                  <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-[#55a1e8]" : ""}`}>Tecnologías utilizadas</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className={`${isDarkMode ? "bg-[#55a1e8]/20 text-[#55a1e8]" : "bg-primary/10 text-primary"} px-4 py-1.5 rounded-full text-sm font-medium`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-[#55a1e8]" : ""}`}>Acerca del proyecto</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {project.fullDescription.map((paragraph, index) => (
                  <p key={index} className={`mb-4 text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`p-8 rounded-xl ${isDarkMode ? "bg-[#0a2a45] shadow-xl" : ""}`}
              >
                <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-[#55a1e8]" : ""}`}>Características principales</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`h-2 w-2 rounded-full mt-1.5 mr-2 ${isDarkMode ? "bg-[#55a1e8]" : "bg-primary"}`} />
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`p-8 rounded-xl ${isDarkMode ? "bg-[#0a2a45] shadow-xl" : ""}`}
              >
                <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-[#55a1e8]" : ""}`}>Beneficios</h2>
                <ul className="space-y-3">
                  {project.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`h-2 w-2 rounded-full mt-1.5 mr-2 ${isDarkMode ? "bg-[#55a1e8]" : "bg-primary"}`} />
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 text-center bg-[#081f32] rounded-xl p-10 shadow-xl"
            >
              <h2 className={`text-2xl font-bold mb-3 text-[#55a1e8]`}>¿Interesado en este proyecto?</h2>
              <p className={`text-base mb-8 max-w-3xl mx-auto text-gray-300`}>
                Contáctanos para obtener más información sobre cómo podemos adaptar esta solución a las necesidades específicas de tu empresa.
              </p>
              <Link href="/#contact">
                <Button 
                  size="lg" 
                  className={`px-10 py-6 bg-[#55a1e8] hover:bg-[#3d8bd7] text-white font-medium text-base`}
                >
                  Solicitar Demo
                </Button>
              </Link>
            </motion.div>
          </div>
        </main>
        {isPallet ? <PalletFooter /> : <Footer />}
      </ScrollArea>
    </>
  );
} 