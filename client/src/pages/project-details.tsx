import { useRoute } from "wouter";
import Navbar from "@/components/navbar";
import PalletNavbar from "@/components/pallet-navbar";
import WordWizardsNavbar from "@/components/wordwizards-navbar";
import Footer from "@/components/footer";
import PalletFooter from "@/components/pallet-footer";
import WordWizardsFooter from "@/components/wordwizards-footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import palletImage from "../assets/pallet-03-sin-nombre.png";
import wordWizardsImage from "../assets/wwtest.png";
import wordWizardsVideo from "../assets/wwvideo.mp4";
import palletLogoWithName from "../assets/pallet-02-con-nombre.png";
import wwlogo from "../assets/wordwizards_logo_fondoazul_2-03.png";
import wwhero from "../assets/wwhero.png";
import wwinscripcion from "../assets/wwinscripcion.png";
import wwvideomobile from "../assets/wwvideomobile.mp4";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ParticlesBackground from "@/components/particles-background";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
  type: "image" | "video";
}

interface ProjectDetails {
  title: string;
  description: string;
  fullDescription: string[];
  features: string[];
  benefits: string[];
  image: string;
  techStack: string[];
  gallery?: GalleryImage[];
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-transparent bg-clip-text">
          Galería
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="min-w-full">
                  {image.type === "video" ? (
                    <video
                      src={image.src}
                      className="w-full h-[500px] object-cover rounded-lg"
                      controls={false}
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0A0A1A]/80 text-white p-2 rounded-full hover:bg-[#0A0A1A] transition-colors"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0A0A1A]/80 text-white p-2 rounded-full hover:bg-[#0A0A1A] transition-colors"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#4A90E2]' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Datos de ejemplo para los sistemas de software
const projectsDetails: Record<string, ProjectDetails> = {
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
  },
  "tu-nuevo-proyecto": {
    title: "WordWizards",
    description: "Una web de inscripción para talleres de inglés, paso a paso, 100% responsive, optimizado para SEO y accesible desde cualquier dispositivo.",
    fullDescription: [
      "El sitio permite a los usuarios registrarse de forma guiada, con validación de correo electrónico, acceso a toda la información relevante sobre los turnos, y una experiencia completamente adaptada a cualquier dispositivo.", 
      "Nuestra solución permite inscribirse a un taller de inglés de manera simple, rápida y accesible. Analizamos las necesidades del cliente y las de sus usuarios, y diseñamos una experiencia paso a paso, guiada e intuitiva."
    ],
    features: [
      "Inscripción paso a paso",
      "Verificación de correo electrónico",
      "Diseño responsive",
      "Carga rápida",
      "Panel de administrador",
      //"Característica principal 6"
    ],
    benefits: [
      "Hecho 100% a medida",
      "Mantenimiento y soporte constantes",
      "Accesible desde cualquier dispositivo",
      "Experiencia de usuario optimizada",
      //"Beneficio 5"
    ],
    image: wwlogo,
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    gallery: [
      {
        src: wordWizardsVideo,
        alt: "Video demostrativo de WordWizards",
        description: "Video demostrativo de la plataforma",
        type: "video"
      },
      {
        src: wwhero,
        alt: "Hero de WordWizards",
        description: "Página principal de WordWizards",
        type: "image"
      },
      {
        src: wwinscripcion,
        alt: "Formulario de inscripción de WordWizards",
        description: "Proceso de inscripción paso a paso",
        type: "image"
      },
      {
        src: wwvideomobile,
        alt: "Video de la versión móvil de WordWizards",
        description: "Demostración de la experiencia móvil",
        type: "video"
      }
    ]
  }
};

export default function ProjectDetails() {
  const [, params] = useRoute("/proyecto/:id");
  const projectId = params?.id || "";
  const project = projectsDetails[projectId as keyof typeof projectsDetails];
  const isPallet = projectId === "Pallet";
  const isWordWizards = projectId === "tu-nuevo-proyecto";

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
  const bgColor = isDarkMode ? "bg-[#061624]" : "bg-[#0A0A1A]";
  const textColor = isDarkMode ? "text-gray-200" : "text-gray-100";
  const headingColor = isDarkMode ? "text-[#55a1e8]" : "text-[#4A90E2]";
  const cardBgColor = isDarkMode ? "bg-[#0a2a45]" : "bg-[#1A1A2E]";
  const buttonStyle = isDarkMode ? "bg-[#55a1e8] hover:bg-[#3d8bd7] text-white" : "bg-[#4A90E2] hover:bg-[#357ABD] text-white";

  return (
    <>
      {isPallet ? <PalletNavbar /> : isWordWizards ? <WordWizardsNavbar /> : <Navbar />}
      <WhatsAppButton />
      <ScrollArea className="h-[100vh] w-full">
        <main className={`min-h-screen pt-32 pb-16 relative ${isDarkMode ? "bg-[#051525]/95 text-gray-200" : "bg-[#0A0A1A]/95"}`}>
          <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
            <ParticlesBackground 
              starCount={200}
              starColor="rgba(255, 255, 255, 0.8)"
              speed={0.05}
              magicDustEnabled={true}
            />
          </div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <Link href="/">
              <Button 
                variant="ghost" 
                className={`mb-8 flex items-center gap-2 text-base ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"}`}
              >
                <ArrowLeft className="h-4 w-4" />
                Volver a Proyectos
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-16 mb-20"
            >
              <div className="max-w-2xl mx-auto md:mx-0 w-full">
                <img 
                  src={isPallet ? palletLogoWithName : project.image} 
                  alt={project.title}
                  className={`rounded-xl shadow-xl w-full h-auto object-contain max-h-[500px] ${isDarkMode ? "brightness-150 bg-[#081f32]/50 p-8" : "bg-[#1A1A2E]/50 p-8"}`}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? "text-[#55a1e8]" : "text-[#4A90E2]"}`}>{project.title}</h1>
                <p className={`text-xl mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-200"}`}>{project.description}</p>
                <div className="mb-8">
                  <h2 className={`text-2xl font-semibold mb-6 ${isDarkMode ? "text-[#55a1e8]" : "text-[#4A90E2]"}`}>Tecnologías utilizadas</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map(tech => (
                      <span key={tech} className={`${isDarkMode ? "bg-[#55a1e8]/20 text-[#55a1e8]" : "bg-[#4A90E2]/20 text-[#4A90E2]"} px-6 py-2 rounded-full text-base font-medium`}>
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
              className="mb-20"
              id="about"
            >
              <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-[#55a1e8]" : "text-[#4A90E2]"}`}>Acerca del proyecto</h2>
              <div className="grid md:grid-cols-2 gap-12">
                {project.fullDescription.map((paragraph, index) => (
                  <p key={index} className={`mb-6 text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-200"}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 mb-20" id="features">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`p-10 rounded-xl ${isDarkMode ? "bg-[#0a2a45] shadow-xl" : "bg-[#1A1A2E] shadow-xl"}`}
              >
                <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-[#55a1e8]" : "text-[#4A90E2]"}`}>Características principales</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`h-2.5 w-2.5 rounded-full mt-2 mr-3 ${isDarkMode ? "bg-[#55a1e8]" : "bg-[#4A90E2]"}`} />
                      <span className={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-200"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`p-10 rounded-xl ${isDarkMode ? "bg-[#0a2a45] shadow-xl" : "bg-[#1A1A2E] shadow-xl"}`}
              >
                <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-[#55a1e8]" : "text-[#4A90E2]"}`}>Beneficios</h2>
                <ul className="space-y-4">
                  {project.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`h-2.5 w-2.5 rounded-full mt-2 mr-3 ${isDarkMode ? "bg-[#55a1e8]" : "bg-[#4A90E2]"}`} />
                      <span className={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-200"}`}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {project.gallery && (
              <Gallery images={project.gallery} />
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-20 text-center bg-[#1A1A2E] rounded-xl p-12 shadow-xl"
            >
              <h2 className={`text-3xl font-bold mb-6 text-[#4A90E2]`}>¿Te gustaría saber más?</h2>
              <p className={`text-lg mb-10 max-w-3xl mx-auto text-gray-200`}>
                Explora el sitio en vivo o contáctanos para obtener más información sobre nuestros talleres de inglés.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://www.wordwizards.pro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="px-12 py-7 bg-[#4A90E2] hover:bg-[#357ABD] text-white font-medium text-lg"
                  >
                    Ver sitio en vivo
                  </Button>
                </a>
                <Link href="/#contact">
                  <Button 
                    size="lg" 
                    className="px-12 py-7 bg-[#1A1A2E] hover:bg-[#2A2A3E] text-[#4A90E2] border border-[#4A90E2] font-medium text-lg"
                  >
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
        {isPallet ? <PalletFooter /> : isWordWizards ? <WordWizardsFooter /> : <Footer />}
      </ScrollArea>
    </>
  );
} 