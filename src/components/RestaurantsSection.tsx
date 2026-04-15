import { useLang } from '@/contexts/LanguageContext';
import { UtensilsCrossed, ExternalLink } from 'lucide-react';

const restaurants = [
  {
    name: 'Brasserie Marguerite',
    location: 'Aurillac',
    descFr: 'Brasserie élégante à Aurillac, idéale pour un déjeuner ou un dîner en ville.',
    descPt: 'Brasserie elegante em Aurillac, ideal para um almoço ou jantar na cidade.',
    link: 'https://www.brasserie-marguerite.com/',
  },
  {
    name: 'Tables Zé Comptoir',
    location: 'Aurillac',
    descFr: 'Adresse conviviale pour bien manger dans une ambiance moderne et détendue.',
    descPt: 'Endereço acolhedor para comer bem em um ambiente moderno e descontraído.',
    link: 'https://www.tableszecomptoir.fr/',
  },
  {
    name: 'Lohala Bouche',
    location: 'Aurillac',
    descFr: 'Restaurant à Aurillac avec une cuisine soignée et une belle présentation.',
    descPt: 'Restaurante em Aurillac com cozinha caprichada e bela apresentação.',
    link: 'https://www.lohalabouche-restaurant-aurillac.fr/',
  },
  {
    name: 'La Table des Matières',
    location: 'Aurillac',
    descFr: 'Table gastronomique à Aurillac pour une expérience plus raffinée.',
    descPt: 'Mesa gastronômica em Aurillac para uma experiência mais refinada.',
    link: 'https://www.restaurant-latabledesmatieres-aurillac.com/',
  },
  {
    name: 'L\'à Côté',
    location: 'Aurillac',
    descFr: 'Petit restaurant de quartier recommandé pour une cuisine locale conviviale.',
    descPt: 'Pequeno restaurante de bairro recomendado para uma cozinha local acolhedora.',
    link: 'https://share.google/lQD60ePmrnkW7jYby',
  },
  {
    name: 'A la Mais\'Omps',
    location: 'Omps',
    descFr: 'Cuisine maison, locale et créative dans un cadre chaleureux.',
    descPt: 'Cozinha caseira, local e criativa em um ambiente acolhedor.',
    link: 'https://alamaisomps.eatbu.com/?lang=fr',
  },
  {
    name: 'Brasserie Côté Rive',
    location: 'Aurillac',
    descFr: 'Brasserie à consulter directement sur Facebook pour les infos et actualités.',
    descPt: 'Brasserie para consultar diretamente no Facebook para informações e novidades.',
    link: 'https://www.facebook.com/brasserie.cote.rive/',
  },
];

const RestaurantsSection = () => {
  const { t } = useLang();

  return (
    <section id="manger">
      <div className="section-container">
        <h2 className="section-title">
          <UtensilsCrossed className="inline-block mr-2 mb-1" size={28} />
          {t('Où manger', 'Onde comer')}
        </h2>
        <div className="section-divider" />

        <p className="font-body text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          {t(
            'Voici quelques restaurants que nous recommandons autour d’Aurillac.',
            'Aqui estão alguns restaurantes que recomendamos na região de Aurillac.'
          )}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {restaurants.map((r, i) => (
            <div key={i} className="card-cantal p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-display text-base font-semibold">{r.name}</h3>
                {r.link && (
                  <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-gold shrink-0 hover:text-foreground transition-colors" aria-label="Link">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="font-body text-xs text-gold mb-2">{r.location}</p>
              <p className="font-body text-sm text-muted-foreground">
                {t(r.descFr, r.descPt)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
