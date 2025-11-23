
import { Briefcase, GraduationCap, School } from "lucide-react"
import { useTranslation } from 'react-i18next';

export const AboutSection = () => {
    const { t, i18n } = useTranslation();

    return(
        <section 
            id="about" 
            className="py-24 px-4 relative"
        > 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t('about')} <span className="text-primary"> {t('me')}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> 
                            {t('about_student')}
                        </h3>

                        <p className="text-muted-foreground"> 
                             {t('about_experience')}. 
                        </p>

                        <p className="text-muted-foreground"> 
                            {t('about_passionate')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                <p> {t('contact_me')} {t('_me')}  </p>
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {t('cv')}
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> {t('web_development')} </h4>
                                    <p className="text-muted-foreground">
                                        {t('web_development_info')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <School className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg"> {t('design')} </h4>
                                    <p className="text-muted-foreground">
                                        {t('design_info')} 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg"> {t('work')}  </h4>
                                    <p className="text-muted-foreground">
                                        {t('projects_info')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    ) 
}