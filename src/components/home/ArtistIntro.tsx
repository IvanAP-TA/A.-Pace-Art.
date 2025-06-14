import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const ArtistIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useI18n();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("artist-intro");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="artist-intro"
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <img 
                src="/paintings/artist.webp" 
                alt="Annibale Pace" 
                className="w-full h-full object-cover"
                width={600}
                height={750}
              />
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >            <h2 className="text-3xl md:text-4xl font-serif mb-6">{t('home.intro.title')}</h2>
            <p className="text-lg mb-4 text-muted-foreground">
              {t('home.intro.bio1')}
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              {t('home.intro.bio2')}
            </p>
            <Link 
              to="/about" 
              className="inline-block px-6 py-2 border border-foreground text-foreground font-medium transition-colors hover:bg-foreground/10"
            >
              {t('home.intro.readMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistIntro;
