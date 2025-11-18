import { Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useTranslation } from 'react-i18next';

export const ContactSection = () => {
    const { t, i18n } = useTranslation();
    return(
        <section
            id="contact"
            className="py-24 px-4 bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t('contact_me')} <span className="text-primary"> {t('_me')} </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t('contact_me_bio')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {t('contact_info')}
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:valentina.villarroel@fi.uncoma.edu.ar" className="text-muted-foreground hover:text-primary transition-colors">
                                        valentina.villarroel@fi.uncoma.edu.ar
                                    </a>    
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('phone')}</h4>
                                    <a href="tel:+5402994021366" className="text-muted-foreground hover:text-primary transition-colors">
                                        (+54) 0299 4021366
                                    </a>    
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('location')}</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Neuquén, Argentina
                                    </a>    
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="font-medium mb-4">{t('connect')} </h4>
                                <div className="flex space-x-4 justify-center"> 
                                    <a href="https://www.linkedin.com/in/valentina-villarroel-51a459348/" target="_blank">
                                        <Linkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}