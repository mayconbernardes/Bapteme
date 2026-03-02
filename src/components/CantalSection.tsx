import { useLang } from '@/contexts/LanguageContext';
import { Mountain, ExternalLink } from 'lucide-react';

const places = [
  {
    nameFr: 'Sanctuaire Notre-Dame de Quézac',
    namePt: 'Santuário Notre-Dame de Quézac',
    descFr: "Lieu de pèlerinage marial dédié aux enfants et aux familles. Église remarquable pour ses peintures murales colorées (années 1920) et son atmosphère paisible au cœur du village.",
    descPt: "Local de peregrinação mariana dedicado às crianças e famílias. Igreja notável pelas suas pinturas murais coloridas (anos 1920) e a sua atmosfera tranquila no coração do vilarejo.",
    emoji: '⛪',
    link: 'https://chataigneraie-cantal.com/que-voir/quezac',
  },
  {
    nameFr: 'Puy Mary – Grand Site de France',
    namePt: 'Puy Mary – Grand Site de France',
    descFr: "Volcan emblématique culminant à 1 787 m, classé Grand Site de France. Panorama 360° exceptionnel. Ascension depuis le Pas de Peyrol : environ 30–45 min de marche.",
    descPt: "Vulcão emblemático a 1.787 m de altitude, classificado Grand Site de France. Panorama 360° excepcional. Subida desde o Pas de Peyrol: cerca de 30–45 min de caminhada.",
    emoji: '🏔️',
    link: 'https://www.puymary.fr/',
  },
  {
    nameFr: 'Village de Salers',
    namePt: 'Vilarejo de Salers',
    descFr: "Classé parmi Les Plus Beaux Villages de France. Cité médiévale en pierre volcanique avec tourelles et portes fortifiées. Centre d'appellation du fromage Salers. À 35–40 min de Quézac.",
    descPt: 'Classificado entre os "Plus Beaux Villages de France". Cidade medieval em pedra vulcânica com torres e portas fortificadas. Centro de denominação do queijo Salers. A 35–40 min de Quézac.',
    emoji: '🏘️',
    link: 'https://www.salers-tourisme.fr/',
  },
  {
    nameFr: 'Viaduc de Garabit',
    namePt: 'Viaduto de Garabit',
    descFr: "Chef-d'œuvre de Gustave Eiffel (1884), viaduc de 122 m de haut surplombant les gorges de la Truyère. Vue spectaculaire depuis l'Aire de Garabit. Idéal au lever/coucher du soleil.",
    descPt: "Obra-prima de Gustave Eiffel (1884), viaduto de 122 m de altura sobre as gargantas do Truyère. Vista espetacular da Área de Garabit. Ideal ao nascer/pôr do sol.",
    emoji: '🌉',
    link: 'https://www.pays-saint-flour.fr/incontournables/viaduc-de-garabit',
  },
  {
    nameFr: 'Randonnées & Balades à cheval',
    namePt: 'Caminhadas & Passeios a cavalo',
    descFr: "Sentiers superbes entre volcans, estives et vallées verdoyantes. Sorties à l'heure, demi-journée ou multi-jours proposées par plusieurs structures.",
    descPt: "Trilhas magníficas entre vulcões, pastagens e vales verdejantes. Passeios por hora, meio dia ou vários dias oferecidos por diversas estruturas.",
    emoji: '🐴',
    link: 'https://www.cantal-destination.com/activites-et-visites/randonnees-et-activites/randonnees-equestres-activites-cheval-cantal',
  },
  {
    nameFr: 'Maurs',
    namePt: 'Maurs',
    descFr: "« Maurs-la-Jolie », cité médiévale à 4 km de Quézac. Ruelles pittoresques et marché du jeudi matin : fromages, charcuteries, produits régionaux.",
    descPt: "\"Maurs-la-Jolie\", cidade medieval a 4 km de Quézac. Ruelas pitorescas e mercado de quinta-feira de manhã: queijos, charcutaria, produtos regionais.",
    emoji: '🛒',
    link: 'https://chataigneraie-cantal.com/que-voir/maurs-cite-medievale',
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

        <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          {t(
            "Tous ces lieux sont accessibles en une journée depuis Quézac. La Châtaigneraie est une zone verte, peu touristique, parfaite pour un séjour authentique.",
            "Todos estes lugares são acessíveis em um dia a partir de Quézac. A Châtaigneraie é uma zona verde, pouco turística, perfeita para uma estadia autêntica."
          )}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {places.map((place, i) => (
            <div key={i} className="card-cantal p-5 text-center flex flex-col">
              <span className="text-3xl mb-3 block">{place.emoji}</span>
              <h3 className="font-display text-base font-semibold mb-2">
                {t(place.nameFr, place.namePt)}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {t(place.descFr, place.descPt)}
              </p>
              <a
                href={place.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs inline-flex items-center gap-1.5 mx-auto"
              >
                <ExternalLink size={12} />
                {t('En savoir plus', 'Saiba mais')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CantalSection;
