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
              "bio":"bio ..............",
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
              "basic":"Basic"
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
              "scroll": "Scrolleá",
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
              "bio":"bio ..............",
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
              "basic": "Básico"
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