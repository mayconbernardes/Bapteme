import { useLang } from '@/contexts/LanguageContext';
import albaPhoto from '@/assets/alba-photo.jpeg';

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section id="accueil" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Subtle floral decorations */}
      <div className="absolute top-20 left-8 text-6xl opacity-[0.07] select-none animate-float" aria-hidden>✿</div>
      <div className="absolute bottom-20 right-8 text-5xl opacity-[0.07] select-none animate-float" style={{ animationDelay: '1.5s' }} aria-hidden>❀</div>
      <div className="absolute top-1/3 right-16 text-4xl opacity-[0.05] select-none animate-float" style={{ animationDelay: '0.8s' }} aria-hidden>✿</div>

      {/* Oval photo frame */}
      <div className="oval-frame mb-8 animate-fade-in">
        <img
          src={albaPhoto}
          alt={t("Alba, notre petite fille", "Alba, nossa pequena")}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floral accent below frame */}
      <div className="flex items-center gap-3 mb-6 opacity-40 text-gold" aria-hidden>
        <span>✿</span>
        <span className="w-12 h-px bg-gold" />
        <span>❀</span>
        <span className="w-12 h-px bg-gold" />
        <span>✿</span>
      </div>

      {/* Title */}
      <h1 className="font-display text-3xl sm:text-5xl font-semibold text-foreground text-center leading-tight mb-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {t("Invitation au Baptême d'Alba", "Convite ao Batizado de Alba")}
      </h1>

      <p className="font-body text-muted-foreground text-lg sm:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        {t("9 mai 2026 – Quézac, Cantal", "9 de maio de 2026 – Quézac, Cantal")}
      </p>

      <a href="#invitation" className="btn-gold animate-fade-in" style={{ animationDelay: '0.6s' }}>
        {t("Découvrir l'invitation", "Ver o convite")}
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-float">
        <div className="w-5 h-8 rounded-full border-2 border-gold/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
