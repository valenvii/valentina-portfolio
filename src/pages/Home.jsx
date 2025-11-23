import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectsSection"
import { SkillsSection } from "../components/SkillsSection"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { LanguageToggle } from "@/components/LanguageToggle"
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Home = ({}) => {
    document.title = "Mi Portfolio";
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <div className="container mx-auto max-w-5xl flex items-center justify-between py-4">
                    {/* Theme and Language Toggle */}
                    <LanguageToggle />
                    <ThemeToggle />
                    {/* Navbar */}
                    <Navbar />
                </div>    

            {/* Background Effects*/}
            <StarBackground />
            
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            {/* Footer */}

        </div>
    )
}
