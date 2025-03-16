# Configuración de EmailJS para el formulario de contacto

Este proyecto utiliza EmailJS para enviar correos electrónicos desde el frontend sin necesidad de un servidor backend. A continuación, se detallan los pasos para configurar EmailJS en tu proyecto.

## Paso 1: Crear una cuenta en EmailJS

1. Ve a [EmailJS](https://www.emailjs.com/) y crea una cuenta gratuita.
2. El plan gratuito permite enviar hasta 200 correos electrónicos por mes, lo cual es suficiente para la mayoría de los sitios web pequeños.

## Paso 2: Configurar un servicio de correo electrónico

1. En el panel de control de EmailJS, ve a "Email Services" y haz clic en "Add New Service".
2. Selecciona el proveedor de correo electrónico que deseas utilizar (Gmail, Outlook, etc.).
3. Sigue las instrucciones para conectar tu cuenta de correo electrónico.
4. Una vez conectado, anota el "Service ID" que se te asigna.

## Paso 3: Crear una plantilla de correo electrónico

1. Ve a "Email Templates" y haz clic en "Create New Template".
2. Diseña tu plantilla de correo electrónico. Puedes usar las siguientes variables en tu plantilla:
   - `{{name}}`: Nombre del remitente
   - `{{email}}`: Email del remitente
   - `{{message}}`: Mensaje del remitente
   - `{{company}}`: Empresa del remitente (opcional)
   - `{{phone}}`: Teléfono del remitente (opcional)
3. Guarda la plantilla y anota el "Template ID" que se te asigna.

## Paso 4: Obtener tu clave pública

1. Ve a "Account" > "API Keys".
2. Anota tu "Public Key".

## Paso 5: Configurar las variables de entorno

1. Crea un archivo `.env` en la raíz de tu proyecto (o modifica el existente).
2. Añade las siguientes variables:

```
VITE_EMAILJS_PUBLIC_KEY=tu_clave_publica
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
```

3. Reemplaza los valores con los que obtuviste en los pasos anteriores.

## Paso 6: Probar el formulario

1. Ejecuta tu aplicación y ve al formulario de contacto.
2. Completa el formulario y envíalo.
3. Verifica que el correo electrónico se haya enviado correctamente.

## Solución de problemas

- Si no recibes correos electrónicos, verifica la consola del navegador para ver si hay errores.
- Asegúrate de que las variables de entorno estén correctamente configuradas.
- Verifica que la plantilla de correo electrónico esté utilizando las variables correctas.

## Recursos adicionales

- [Documentación de EmailJS](https://www.emailjs.com/docs/)
- [API de EmailJS para React](https://www.emailjs.com/docs/examples/reactjs/) 