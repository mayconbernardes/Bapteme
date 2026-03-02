import { useLang } from '@/contexts/LanguageContext';
import { UtensilsCrossed, ExternalLink } from 'lucide-react';

const restaurants = [
  {
    name: 'Le Relais de Bedou',
    location: 'Quézac',
    descFr: 'Cuisine régionale authentique du Cantal. Idéal pour découvrir les saveurs locales.',
    descPt: 'Cozinha regional autêntica do Cantal. Ideal para descobrir os sabores locais.',
    link: '',
  },
  {
    name: 'Auberge de la Jordanne',
    location: 'Aurillac',
    descFr: 'Restaurant traditionnel avec vue sur la vallée. Spécialités : truffade et aligot.',
    descPt: 'Restaurante tradicional com vista para o vale. Especialidades: truffade e aligot.',
    link: 'https://www.tripadvisor.fr/Restaurant_Review-g187096-d1234567-Reviews-Aurillac.html',
  },
  {
    name: 'La Table de Salers',
    location: 'Salers (25 min)',
    descFr: 'Dans l\'un des plus beaux villages de France. Fromage Salers et viande Salers.',
    descPt: 'Em um dos mais belos vilarejos da França. Queijo Salers e carne Salers.',
    link: 'https://www.google.com/maps/search/restaurant+salers+cantal',
  },
  {
    name: 'Brasserie du Marché',
    location: 'Maurs (4 km)',
    descFr: 'Cuisine du marché, ambiance conviviale. Parfait pour un déjeuner décontracté.',
    descPt: 'Cozinha do mercado, ambiente acolhedor. Perfeito para um almoço descontraído.',
    link: 'https://www.google.com/maps/search/restaurant+maurs+cantal',
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
            "Pour ceux qui arrivent le vendredi 8 mai ou avant, voici nos recommandations pour découvrir la cuisine du Cantal.",
            "Para quem chega na sexta-feira 8 de maio ou antes, aqui estão nossas recomendações para descobrir a culinária do Cantal."
          )}
        </p>

        {/* Specialties banner */}
        <div className="bg-primary/50 rounded-xl p-5 text-center mb-8 max-w-2xl mx-auto">
          <p className="font-display text-base font-semibold mb-1">
            {t('Spécialités à goûter', 'Especialidades para provar')}
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Truffade · Aligot · Fromage Cantal · Pounti · Salers
          </p>
        </div>

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
