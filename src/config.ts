export const siteConfig = {
  // Información básica
  name: "Mathew Pardo Contreras", //[cite: 1]
  title: "Ingeniero Informático | Backend & Full Stack", //[cite: 1]
  description: "Portfolio de Mathew Pardo, Ingeniero Informático especializado en Backend, APIs y automatización.", //[cite: 1]
  accentColor: "#1d4ed8", 

  // Redes sociales
  social: {
    email: "mathew.pardo@usach.cl", //[cite: 1]
    linkedin: "https://linkedin.com/in/mathewpardo", 
    github: "https://github.com/mathewpardo", //[cite: 1]
    twitter: "", 
  },

  // Sobre ti
  aboutMe: "Ingeniero Informático con sólida base en desarrollo backend y arquitectura de software. Me motiva diseñar soluciones escalables, optimizar flujos operativos y escribir código limpio y mantenible. Cuento con experiencia en automatización de procesos, despliegue contenerizado y desarrollo de APIs, trabajando bajo metodologías ágiles.", //[cite: 1]

  // Skills
  skills: [
    "Java (Spring Boot)", //[cite: 1]
    "Python / Django", //[cite: 1]
    "Node.js / Express", //[cite: 1]
    "JavaScript / TypeScript", //[cite: 1]
    "React.js / Vue.js", //[cite: 1]
    "PostgreSQL / MySQL / MongoDB", //[cite: 1]
    "Docker / CI/CD", //[cite: 1]
    "Web Scraping (Playwright)", //[cite: 1]
  ],

  // Proyectos (Solo debes reemplazar los enlaces 'link' por las URLs exactas de tus repositorios)
  projects: [
    {
      name: "Pipeline de Web Scraping y Procesamiento con IA", //[cite: 2]
      description: "Extracción automatizada de catálogos con manejo de paginación y rate limiting. Limpieza y almacenamiento de datos no estructurados para análisis con modelos de IA.", //[cite: 2]
      link: "https://github.com/mathewpardo/web-scraper", 
      skills: ["Python", "Playwright", "Scrapy", "ETL"], //[cite: 1, 2]
    },
    {
      name: "Arquitectura de Microservicios con Spring Boot", //[cite: 2]
      description: "Contenerización de arquitectura multi-servicio con Docker Compose (backend, base de datos y servicios auxiliares) e implementación de pruebas de rendimiento.", //[cite: 2]
      link: "https://github.com/mathewpardo/github-ev2-mingeso",
      skills: ["Java", "Spring Boot", "Docker Compose", "JMeter"], //[cite: 1, 2]
    },
    {
      name: "Plataforma Web Full Stack", //[cite: 2]
      description: "Desarrollo full stack con backend REST en Spring Boot y frontend en React.js, configurado con Maven bajo principios de diseño SOLID.", //[cite: 2]
      link: "https://github.com/mathewpardo/demoapp",
      skills: ["React.js", "Spring Boot", "REST APIs", "SOLID"], //[cite: 1, 2]
    },
  ],

  // Experiencia laboral
  experience: [
    {
      company: "InTeraction Lab (Universidad de Santiago de Chile)", //[cite: 1]
      title: "Desarrollador Full Stack (Automatización)", //[cite: 1]
      dateRange: "Marzo 2024 - Febrero 2025", //[cite: 1]
      bullets: [
        "Diseñé e implementé un módulo de automatización de despliegue que redujo el tiempo de puesta en producción en más del 95%.", //[cite: 1]
        "Reemplacé el flujo de configuración manual por un proceso guiado, eliminando la tasa de errores humanos del proceso de despliegue.", //[cite: 1]
        "Integré backend en Node.js con scripts en Ansible, habilitando la gestión de múltiples instancias sin aumentar la carga del equipo.", //[cite: 1]
      ],
    },
    {
      company: "Myra Salud", //[cite: 1]
      title: "Desarrollador Full Stack", //[cite: 1]
      dateRange: "Marzo 2023 - Julio 2023", //[cite: 1]
      bullets: [
        "Diseñé la arquitectura de software y lideré decisiones técnicas del backend (API REST) estructurando los datos del sistema original.", //[cite: 2]
        "Desarrollé un sistema de gestión de turnos que centralizó la administración de cuidadoras, eliminando el uso de planillas manuales dispersas.", //[cite: 1]
        "Implementé módulos de control de asistencia y corrección de pagos, automatizando la detección de inconsistencias.", //[cite: 1]
      ],
    },
  ],

  // Educación
  education: [
    {
      school: "Universidad de Santiago de Chile (USACH)", //[cite: 2]
      degree: "Ingeniería en Ejecución de Computación e Informática", //[cite: 2]
      dateRange: "2019 - 2025", //[cite: 2]
      achievements: [
        "Titulado.", //[cite: 2]
        "Especialización en Ciencias de la Computación Aplicada.", //[cite: 2]
        "Proyectos destacados en Cómputo Científico intensivo (NumPy/CuPy) y diseño de algoritmos en C.", //[cite: 2]
      ],
    },
  ],
};
