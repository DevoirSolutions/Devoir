import { useRoute } from "wouter";
import Navbar from "@/components/navbar";
import PalletNavbar from "@/components/pallet-navbar";
import Footer from "@/components/footer";
import PalletFooter from "@/components/pallet-footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
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
    techStack: ["Python", "PySide6", "PostreSQL", "SQLAlchemy"]
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

  // Get WhatsApp number from environment variables
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER; 

  const handleDemoRequest = () => {
    const message = `Hola, me gustaría consultar sobre ${project.title}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

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

  // Use isPallet directly for conditional styling
  const isDarkMode = isPallet;

  return (
    <>
      {isPallet ? <PalletNavbar /> : <Navbar />}
      <WhatsAppButton />
      <ScrollArea className="h-[100vh] w-full">
        {/* Apply subtle gradient background for dark mode */}
        <main className={`min-h-screen pt-28 pb-20 ${isDarkMode ? "bg-gradient-to-br from-[#051525] via-[#061a2e] to-[#051525] text-gray-200" : "bg-gray-50 text-gray-800"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> {/* Wider container */}
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link href="/">
                <Button 
                  variant="ghost" 
                  className={`inline-flex items-center gap-2 text-sm font-medium ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver al inicio
                </Button>
              </Link>
            </motion.div>

            {/* Hero Section */}
            <motion.div
              id="heroP"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-16 mb-20 items-center" // Increased gap and bottom margin
            >
              {/* Image Column */}
              <div className="w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
                <img 
                  src={isPallet ? palletLogoWithName : project.image} 
                  alt={project.title}
                  // Adjusted styling for better presentation
                  className={`rounded-xl shadow-2xl w-full h-auto object-contain max-h-[400px] ${isDarkMode ? "bg-[#081f32]/60 p-6 border border-white/10" : "bg-white p-4 border"}`} 
                />
              </div>
              {/* Text Column */}
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h1 className={`text-4xl lg:text-5xl font-bold mb-5 ${isDarkMode ? "text-sky-400" : "text-gray-900"}`}>{project.title}</h1>
                <p className={`text-lg lg:text-xl mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
                <div>
                  <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-sky-300" : "text-gray-800"}`}>Tecnologías utilizadas</h2>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {project.techStack.map(tech => (
                      <span key={tech} className={`px-5 py-2 rounded-full text-sm font-medium ${isDarkMode ? "bg-sky-500/10 text-sky-300 ring-1 ring-inset ring-sky-500/20" : "bg-primary/10 text-primary"}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Unified Content Section - About, Features, Benefits */}
            <div 
              id="details"
              className={`${isDarkMode ? 'bg-[#081f32]/50' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} mb-20`}
            >
              {/* About Part */}
              <motion.div
                id="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`p-8 sm:p-12 ${isDarkMode ? 'border-b border-white/10' : 'border-b'}`} // Separator
              >
                <h2 className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? "text-sky-400" : "text-gray-900"}`}>Acerca del proyecto</h2>
                <div className="max-w-3xl mx-auto space-y-5">
                  {project.fullDescription.map((paragraph, index) => (
                    <p key={index} className={`text-base lg:text-lg leading-relaxed text-center ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Features & Benefits Part - Integrated Layout */}
              <div className="grid md:grid-cols-2 gap-0"> {/* Remove gap, use padding inside */}
                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`p-8 sm:p-12 ${isDarkMode ? 'md:border-r border-white/10' : 'md:border-r'}`} // Vertical separator on md+
                >
                  <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-sky-300" : "text-gray-900"}`}>Características</h3>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${isDarkMode ? "text-sky-400" : "text-primary"}`} />
                        <span className={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`p-8 sm:p-12 ${isDarkMode ? 'border-t border-white/10 md:border-t-0' : 'border-t md:border-t-0'}`} // Top border on mobile, removed on md+
                >
                  <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-sky-300" : "text-gray-900"}`}>Beneficios</h3>
                  <ul className="space-y-4">
                    {project.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${isDarkMode ? "text-sky-400" : "text-primary"}`} />
                        <span className={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Call to Action Section - Restyled and Integrated */}
            <motion.div
              id="contact-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`mt-0 text-center rounded-2xl p-10 lg:p-12 ${isDarkMode ? "bg-[#0a2a45]/70 border border-white/10" : "bg-gray-100 border"} shadow-lg`}
            >
              <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? "text-sky-300" : "text-gray-900"}`}>¿Interesado en este proyecto?</h2>
              <p className={`text-lg mb-8 max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Contáctanos para obtener más información sobre cómo podemos adaptar esta solución a las necesidades específicas de tu empresa.
              </p>
              <Button 
                onClick={handleDemoRequest}
                size="lg" 
                className={`px-10 py-3 text-base font-semibold rounded-md shadow-md transition-transform transform hover:scale-105 ${isDarkMode ? "bg-sky-500 hover:bg-sky-400 text-white" : "bg-primary hover:bg-primary/90 text-white"}`}
              >
                Solicitar Demo
              </Button>
            </motion.div>
          </div>
        </main>
        {isPallet ? <PalletFooter /> : <Footer />}
      </ScrollArea>
    </>
  );
} 