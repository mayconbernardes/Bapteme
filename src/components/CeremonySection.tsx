import { useLang } from '@/contexts/LanguageContext';
import { MapPin, Clock, Navigation } from 'lucide-react';
import anaisMariusPhoto from '@/assets/AnaisMarius.png';

const CeremonySection = () => {
  const { t } = useLang();

  return (
    <section id="ceremonie">
      <div className="section-container">
        <h2 className="section-title">
          {t('Cérémonie & Réception – 9 mai 2026', 'Cerimônia & Recepção – 9 de maio de 2026')}
        </h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Church */}
          <div className="card-cantal p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <Clock size={20} className="text-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              {t('Cérémonie – 11h00', 'Cerimônia – 11h00')}
            </h3>
            <p className="font-body text-muted-foreground mb-1 flex items-center justify-center gap-1.5">
              <MapPin size={14} />
              {t("Église de Quézac", "Igreja de Quézac")}
            </p>
            <p className="font-body text-sm text-muted-foreground mb-4">
              {t("Sanctuaire Notre-Dame de Quézac", "Santuário Notre-Dame de Quézac")}
            </p>
            <a
              href="https://maps.app.goo.gl/HNFFENNEYDirdUtt6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm inline-flex items-center gap-2"
            >
              <Navigation size={14} />
              {t("Comment y aller", "Como chegar")}
            </a>
          </div>

          {/* Reception */}
          <div className="card-cantal p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <MapPin size={20} className="text-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              {t('Réception', 'Recepção')}
            </h3>
            <p className="font-body text-muted-foreground mb-1">
              {t("Suivi d'un repas festif", "Seguido de um almoço festivo")}
            </p>
            <p className="font-body text-sm font-medium text-foreground mb-1">Maison Béthanie</p>
            <p className="font-body text-sm text-muted-foreground mb-4">
              1 Rue des Cèdres, 15600 Quézac
            </p>
            <a
              href="https://maps.app.goo.gl/dvydCp3W3avY1h1P9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm inline-flex items-center gap-2"
            >
              <Navigation size={14} />
              {t("Comment y aller", "Como chegar")}
            </a>
          </div>
        </div>

        <div id="liturgie" className="max-w-4xl mx-auto mt-10">
          <section className="card-cantal p-6 bg-background/60 rounded-lg border border-border">
            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <img
                src={anaisMariusPhoto}
                alt="Anaïs et Marius, le parrain et la marraine d'Alba"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-display text-lg text-center">Ana&iuml;s et Marius</p>
            <p className="font-body text-sm text-center text-muted-foreground">
              Parrain et marraine d&apos;Alba
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CeremonySection;
