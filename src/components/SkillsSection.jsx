import { useState } from "react";
import {cn} from '@/lib/utils'
import { useTranslation } from 'react-i18next';

const skills = [
  // Frontend
  { name: "HTML/CSS", level: "advanced", category: "frontend" },
  { name: "JavaScript", level: "medium", category: "frontend" },
  { name: "React", level: "basic", category: "frontend" },
  { name: "TypeScript", level: "basic", category: "frontend" },
  { name: "Tailwind CSS", level: "basic", category: "frontend" },

  // Backend
  { name: "Node.js", level: "basic", category: "backend" },
  { name: "Express", level: "basic", category: "backend" },
  { name: "MongoDB", level: "basic", category: "backend" },
  { name: "PostgreSQL", level: "basic", category: "backend" },

  // Tools
  { name: "Git/GitHub", level: "medium", category: "tools" },
  { name: "VS Code", level: "medium", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
        const [activeCategory, setActiveCategory] = useState("all")
        const { t, i18n } = useTranslation();
        const filteredSkills = skills.filter(
            (skill) => activeCategory === "all" || skill.category === activeCategory
        )
    return (
        <section 
            id="skills"
            className="py-24 px-4 relative bgf-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                     {t('my')} <span className="text-primary"> {t('skills')} </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        > 
                            {t(category)} 
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> 
                                    {skill.name}
                                </h3>
                            </div>   
                            <div className="text-right mt-1">
                               <span className={`level-badge level-${skill.level}`}>{t(skill.level)}</span> 
                            </div>                              
                        </div>
                    ))}
                </div>
            </div>
        </section>
    ) 
}