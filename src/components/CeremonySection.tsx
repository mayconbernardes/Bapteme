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
            <div className="rounded-lg overflow-hidden mb-4 aspect-video">
              <iframe
                title={t("Carte Église de Quézac", "Mapa Igreja de Quézac")}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.5!2d2.2284!3d44.8674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ad4a3079dde70b%3A0x890ab91c7a82a72e!2s%C3%89glise%20de%20Qu%C3%A9zac!5e0!3m2!1sfr!2sfr!4v1709400000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
            <div className="rounded-lg overflow-hidden mb-4 aspect-video">
              <iframe
                title={t("Carte Maison Béthanie", "Mapa Maison Béthanie")}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.5!2d2.228!3d44.867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ad4a0e6b8f9c0d%3A0x4b2c1d3e5f6a7b8c!2sMaison%20B%C3%A9thanie!5e0!3m2!1sfr!2sfr!4v1709400000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
