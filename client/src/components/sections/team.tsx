import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import imageFede from "../../assets/fotoFede.jpg";
import imageJuanma from "../../assets/fotoJuanma.png";
import imageMora from "../../assets/fotoMora.jpeg";
import imageLeo from "../../assets/fotoLeo.jpeg";
import imageNico from "../../assets/fotoNico.png";

const team = [
  {
    name: "Federico Ruiz Castilla",
    image: imageFede,
    rol: ["Product Owner", "Desarrollador Full Stack", "Estratega en Marketing Digital"],
    description: "Lidera la visión del producto, la estrategia UX/UI y el desarrollo full-stack, trabajando junto a los clientes para materializar sus ideas. Combina su experiencia en multimedia, comunicación y desarrollo de software para entregar productos al mercado.",
    isFounder: true
  },
  {
    name: "Nicolas Vargas Elizondo",
    image: imageNico,
    rol: ["Diseñador gráfico", "Animador", "Diseñador UX/UI"],
    description: "Crea identidades visuales, animaciones y experiencias de usuario optimizadas para el entorno digital, combinando diseño, UX/UI y estrategia de contenido para potenciar marcas en línea y en redes sociales.",
    isFounder: false
  },
  {
    name: "Juan Cruz Mora",
    image: imageMora,
    rol: ["Desarrollador Full Stack", "Coordinador de gestión"],
    description: "Combina el desarrollo full-stack con la supervisión de la gestión y operaciones, aportando una perspectiva estratégica desde Sistemas de Información para asegurar la excelencia técnica, la optimización de procesos y el alineamiento de objetivos empresariales.",
    isFounder: true
  },
  {
    name: "Leonardo Cricco",
    image: imageLeo,
    rol: ["Desarrollador Full Stack", "Software Engineer"],
    description: "Se especializa en la arquitectura y desarrollo de soluciones de software escalables, aplicando su conocimiento en Ciencias de la Computación para crear productos digitales confiables, desde la lógica hasta las interfaces de usuario.",
    isFounder: false
  },
  {
    name: "Juan Martín López Frau",
    image: imageJuanma,
    rol: ["Desarrollador Full Stack", "Software Engineer"],
    description: "Desarrolla soluciones web integrales, combinando interfaces intuitivas con arquitecturas robustas, aplicando su formación en Ciencias de la Computación para crear productos escalables y eficientes.",
    isFounder: true
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#F8F7F3]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-gray-600">Profesionales apasionados por la innovación</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8 max-w-10xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_-5px_rgba(84,105,44,0.3)] h-full flex flex-col group">
                <CardContent className="pt-6 flex flex-col flex-grow">
                  <Avatar className="h-32 w-32 mx-auto mb-4">
                    <AvatarImage src={member.image} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <ul className="flex flex-col gap-1 justify-center mb-3">
                    {member.rol.map((rol, index) => (
                      <li
                        key={index}
                        className="text-xs px-2 py-1 text-primary rounded-full bg-primary/10 font-medium transition-all duration-300 transform group-hover:scale-110 group-hover:bg-primary/20"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {rol}
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 flex-grow text-sm">{member.description}</p>
                  
                  {member.isFounder && (
                    <div className="relative mt-3">
                      <span className="text-xs px-3 py-1 text-white rounded-full bg-gradient-to-r from-primary to-primary/80 font-semibold inline-block shadow-sm 
                        transition-all duration-300
                        opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0">
                        Co-Founder
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
