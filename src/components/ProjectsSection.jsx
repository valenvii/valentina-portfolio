import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from 'react-i18next';

const projects = [
  {
    id: 1,
    title: "unco_descuentos",
    description: "unco_descr",
    image: "/projects/unco-descuentos.png",
    tags: ["ReactNative", "NestJS", "SQLLite"],
  },
  {
    id: 2,
    title: "page_title",
    description:
      "portfolio_descr",
    image: "/projects/portfolio.png",
    tags: ["TailwindCSS", "ReactJS"],
  },
  {
    id: 3,
    title: "juego_vida",
    description:
      "juego_vida_descr",
    image: "/projects/juego-vida.png",
    tags: ["ReactNative", "Node.js"],
  },
];

export const ProjectsSection = () => {
     const { t, i18n } = useTranslation();
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          {t('featured1')}  <span className="text-primary"> {t('featured2')} </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('featured_projects')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.title)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {t(project.title)}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(project.description)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/valenvii"
          >
            {t('check_github')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};