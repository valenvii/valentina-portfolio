import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return(
        <section 
            id="about" 
            className="py-24 px-4 relative"
        > 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 fap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> 
                            Estudiante ... 
                        </h3>

                        <p className="text-muted-foreground"> 
                            Con experiencia en .. me especializo en .. 
                        </p>

                        <p className="text-muted-foreground"> 
                            me apasiona...
                        </p>

                        <div className="flex flex-col sm:flex-row fap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Contactame 
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Descarga mi CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web development</h4>
                                    <p className="text-muted-foreground">
                                        Creando websites responsive ... 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Diseño </h4>
                                    <p className="text-muted-foreground">
                                        Creando interfaces intuitivas .. 
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
                                    <h4 className="font-semibold text-lg"> Proyectos </h4>
                                    <p className="text-muted-foreground">
                                        .......
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