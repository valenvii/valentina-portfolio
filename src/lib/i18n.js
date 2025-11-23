import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
          en: {
            translation: {
              "home": "Home",
              "about": "About",
              "about_me": "About Me",
              "me": "Me",
              "my": "My",
              "valentina" : "Valentina's", 
              "skills": "Skills",
              "projects": "Projects",
              "contact": "Contact",
              "scroll": "Scroll",
              "hi": "Hi! I'm",
              "contact_me":"Contact",
              "cv": "Download my CV",
              "tools": "Tools",
              "_me": "Me",
              "contact_info": "Contact Information",
              "phone": "Phone",
              "location": "Location",
              "connect": "Connect with me",
              "all":"All",
              "bio":"I am a fourth-year Computer Science student with a strong passion for learning and exploring new ideas. Creativity and curiosity drive my approach to problem-solving, and I’m eager to start gaining real-world experience in the field. I enjoy taking on challenges, expanding my skills, and contributing to meaningful projects as I continue to grow both academically and professionally.",
              "about_student": "about_student....",
              "about_experience": "about_experience....",
              "about_passionate": "about_passionate....",
              "web_development" : "web_development.......",
              "web_development_info" : "web_development_info...",
              "design" : "design....",
              "design_info" : "design_info....",
              "projects_info" : "projects_info....",
              "contact_me_bio" : "contact_me_bio...`",
              "toiggle_language" : "Traducir a Español",
              "advanced": "Advanced",
              "medium" : "Medium",
              "basic":"Basic",
              "page_title": "My Portfolio"
            }
          },
          es: {
            translation: {
              "home": "Home",
              "about": "Sobre",
              "about_me": "Sobre Mí",
              "me": "Mí",
              "my": "Mis",
              "valentina" : "Valentina: ", 
              "skills": "Habilidades",
              "projects": "Proyectos",
              "contact": "Contacto",
              "scroll": "Scroll",
              "hi": "Hola! soy",
              "contact_me":"Contacta",
              "cv": "Descargá mi CV",
              "tools": "Herramientas",
              "_me": "Conmigo",
              "contact_info": "Información de Contacto",
              "phone": "Teléfono",
              "location": "Ubicación",
              "connect": "Conectá Conmigo",
              "all":"Todas",
              "bio":"Soy una estudiante de cuarto año de la Licenciatura en Ciencias de la Computación, con una gran pasión por aprender y explorar nuevas ideas. La creatividad y la curiosidad impulsan mi manera de resolver problemas, y estoy entusiasmada por comenzar a adquirir experiencia en el ámbito profesional. Disfruto enfrentar desafíos, ampliar mis habilidades y contribuir a proyectos significativos mientras continúo creciendo tanto académica como profesionalmente.",
              "about_student": "about_student....",
              "about_experience": "about_experience....",
              "about_passionate": "about_passionate....",
              "web_development" : "web_development.......",
              "web_development_info" : "web_development_info...",
              "design" : "design....",
              "design_info" : "design_info....",
              "projects_info" : "projects_info....",
              "contact_me_bio" : "contact_me_bio...`",
              "toggle_language":"Translate to English",
              "advanced": "Avanzado",
              "medium" : "Intermedio",
              "basic": "Básico",
              "page_title": "Mi Portfolio"
            }
          }
        },
        lng: "es",
        fallbackLng: "es",
        interpolation: {
          escapeValue: false 
        }
      });

    export default i18n;