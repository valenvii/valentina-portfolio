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
              "bio":"Fourth-year Computer Science student, creative and curious. Passionate about learning, solving problems, and gaining experience through real projects.",
              "about_student": "Fourth-year Computer Science student at UNCo.",
              "about_experience": "I work as a Teaching Assistant at the departments of Programming and Computing Theory. This role allowed me to strengthen my technical foundation and improve my communication skills, as well as learn to approach problems from new perspectives.",
              "about_passionate": "Passionate about gaining real-world experience and continuing to grow professionally, applying everything I’ve learned throughout my studies.",
              "web_development" : "University Programming Analyst",
              "web_development_info" : "Facultad de Informática, UNCo. I am continuing my studies to obtain my Bachelor’s Degree in CS.",
              "design" : "Community",
              "design_info" : "Director of the Extension Project “Prolog for Teens.” Carrying out activities that help develop logical thinking in teenagers, promoting the connection between academia and society.",
              "projects_info" : "projects_info....",
              "contact_me_bio" : "contact_me_bio...`",
              "toggle_language" : "Traducir a Español",
              "advanced": "Advanced",
              "medium" : "Medium",
              "basic":"Basic",
              "page_title": "My Portfolio",
              "work": "Work"
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
              "bio":"Estudiante de cuarto año de Ciencias de la Computación, creativa y curiosa. Me apasiona aprender, resolver problemas y comenzar a ganar experiencia en proyectos reales.",
              "about_student": "Estudiante de cuarto año de Ciencias de la Computación en la UNCo",
              "about_experience": "Trabajo como ayudante en los departamentos de Programación y Teoría de la Computación. Este rol me permitió fortalecer mi base técnica y desarrollar mejores habilidades para comunicarme, además de aprender a analizar los problemas desde nuevas perspectivas. ",
              "about_passionate": "Apasionada por comenzar a ganar experiencia en el mundo real y seguir creciendo profesionalmente, aplicando todo lo aprendido a lo largo de mi carrera.",
              "web_development" : "Analista Programadora Universitaria",
              "web_development_info" : "Facultad de Informática, UNCo. Continuo estudiando para obtener la Lic. en Ciencias de la Computación",
              "design" : "Comunidad",
              "design_info" : "Directora del Proyecto de Extensión: \"Prolog for Teens\". Realizando actividades que desarrollen el pensamiento lógico en adolescentes, promoviendo el vínculo entre la academia y la sociedad.",
              "projects_info" : "En mi segundo año como ayudante. Trabajé en distintas materias, como Estructuras de Datos, Principios de Lenguajes de la Programación, Teoría de la Computación I y II",
              "contact_me_bio" : "contact_me_bio...`",
              "toggle_language":"Translate to English",
              "advanced": "Avanzado",
              "medium" : "Intermedio",
              "basic": "Básico",
              "page_title": "Mi Portfolio",
              "work": "Trabajo"
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