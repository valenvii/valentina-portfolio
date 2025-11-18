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
        
            {/* Theme and Language Toggle */}
            <LanguageToggle />
            <ThemeToggle />
            {/* Background Effects*/}
            <StarBackground />
            {/* Navbar */}
            <Navbar />
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
