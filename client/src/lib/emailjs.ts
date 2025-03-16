import { type InsertContact } from "@shared/schema";
import emailjs from '@emailjs/browser';

// Inicializar EmailJS con tu clave pública
// Debes registrarte en https://www.emailjs.com/ y obtener estas claves
const initEmailJS = () => {
  // La clave pública se puede exponer en el cliente
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");
};

// Función para enviar un correo electrónico usando EmailJS
export const sendContactEmail = async (data: InsertContact): Promise<void> => {
  try {
    // Asegurarse de que EmailJS esté inicializado
    initEmailJS();
    
    // Preparar los datos para el template
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
      company: data.companyName || 'No especificada',
      phone: data.phone || 'No especificado'
    };
    
    // Enviar el correo electrónico
    // Debes crear un servicio y una plantilla en EmailJS
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
      templateParams
    );
    
    console.log('Email enviado correctamente');
  } catch (error) {
    console.error('Error al enviar el email:', error);
    throw error;
  }
}; 