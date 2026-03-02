import { useLang } from '@/contexts/LanguageContext';
import { Mountain, MapPin } from 'lucide-react';

const places = [
  {
    nameFr: 'Sanctuaire Notre-Dame de Quézac',
    namePt: 'Santuário Notre-Dame de Quézac',
    descFr: "Le lieu même du baptême – un sanctuaire de pèlerinage dédié aux enfants, au cœur du village.",
    descPt: "O próprio local do batizado – um santuário de peregrinação dedicado às crianças, no coração do vilarejo.",
    emoji: '⛪',
  },
  {
    nameFr: 'Puy Mary – Grand Site de France',
    namePt: 'Puy Mary – Grand Site de France',
    descFr: "L'icône du Cantal ! Vue panoramique à 360° depuis le sommet. Accessible à pied (30 min de marche).",
    descPt: "O ícone do Cantal! Vista panorâmica 360° do topo. Acessível a pé (30 min de caminhada).",
    emoji: '🏔️',
  },
  {
    nameFr: 'Village de Salers',
    namePt: 'Vilarejo de Salers',
    descFr: "Un des « Plus Beaux Villages de France ». Architecture médiévale et fromage Salers à déguster.",
    descPt: 'Um dos "Plus Beaux Villages de France". Arquitetura medieval e queijo Salers para degustar.',
    emoji: '🏘️',
  },
  {
    nameFr: 'Viaduc de Garabit',
    namePt: 'Viaduto de Garabit',
    descFr: "Chef-d'œuvre de Gustave Eiffel, surplombant la Truyère. Magnifique pour des photos !",
    descPt: "Obra-prima de Gustave Eiffel, sobre o rio Truyère. Magnífico para fotos!",
    emoji: '🌉',
  },
  {
    nameFr: 'Randonnées & Balades à cheval',
    namePt: 'Caminhadas & Passeios a cavalo',
    descFr: "Sentiers balisés autour de Quézac, entre volcans et vallées verdoyantes du Cantal.",
    descPt: "Trilhas sinalizadas ao redor de Quézac, entre vulcões e vales verdejantes do Cantal.",
    emoji: '🐴',
  },
  {
    nameFr: 'Maurs',
    namePt: 'Maurs',
    descFr: "Marché local, centre historique charmant. À seulement 4 km de Quézac.",
    descPt: "Mercado local, centro histórico encantador. A apenas 4 km de Quézac.",
    emoji: '🛒',
  },
];

const CantalSection = () => {
  const { t } = useLang();

  return (
    <section id="cantal" className="bg-primary/30">
      <div className="section-container">
        <h2 className="section-title">
          <Mountain className="inline-block mr-2 mb-1" size={28} />
          {t('Visiter le Cantal', 'Visitar o Cantal')}
        </h2>
        <div className="section-divider" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {places.map((place, i) => (
            <div key={i} className="card-cantal p-5 text-center">
              <span className="text-3xl mb-3 block">{place.emoji}</span>
              <h3 className="font-display text-base font-semibold mb-2">
                {t(place.nameFr, place.namePt)}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t(place.descFr, place.descPt)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CantalSection;
