import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage === "english") {
      setIsEnglish(true);
      document.documentElement.classList.add("english");
    } else {
      localStorage.setItem("language", "spanish");
      i18n.changeLanguage("es");
      setIsEnglish(false);
    }
    
  }, []);

  const toggleLanguage = () => {
    if (isEnglish) {
      document.documentElement.classList.remove("english");
      localStorage.setItem("language", "spanish");
      i18n.changeLanguage("es");
      setIsEnglish(false);
    } else {
      document.documentElement.classList.add("english");
      localStorage.setItem("language", "english");
      i18n.changeLanguage("en");
      setIsEnglish(true);
    }
    console.log("Salio del if-else toggle language")
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "fixed max-sm:hidden top-5 left-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
    {isEnglish ? (
        <div className="flex items-center gap-2"> 
             <span className="cosmic-button inline-flex"><Languages className="h-6 w-6 text-white-300" /> Traducí a Español </span>
        </div>
      ) : (
        <div className="flex items-center gap-2"> 
            <span className="cosmic-button inline-flex"><Languages className="h-6 w-6 text-white-300" /> Translate to English </span>
        </div>
      )}
    </button>
  );
};