import { useLang } from '@/contexts/LanguageContext';
import { Mountain, ExternalLink } from 'lucide-react';

const regions = [
  {
    titleFr: 'Cantal (15)',
    titlePt: 'Cantal (15)',
    colorClass: 'text-emerald-700',
    places: [
      {
        nameFr: 'Puy Mary',
        namePt: 'Puy Mary',
        descFr: 'Grand panorama volcanique, idéal pour une sortie nature à la journée.',
        descPt: 'Grande vista vulcânica, ideal para um passeio de um dia na natureza.',
        emoji: '🏔️',
        links: [
          { labelFr: 'Site officiel', labelPt: 'Site oficial', href: 'https://www.puymary.fr/' },
        ],
      },
      {
        nameFr: 'Plomb du Cantal (Le Lioran)',
        namePt: 'Plomb du Cantal (Le Lioran)',
        descFr: 'Accès facile en téléphérique pour profiter du sommet et de la vue.',
        descPt: 'Acesso fácil de teleférico para aproveitar o topo e a vista.',
        emoji: '🚠',
        links: [
          {
            labelFr: 'Téléphérique',
            labelPt: 'Teleférico',
            href: 'https://www.cantal-destination.com/fiche/telepherique-du-plomb-du-cantal/',
          },
        ],
      },
      {
        nameFr: 'Salers',
        namePt: 'Salers',
        descFr: 'Un des plus beaux villages de France, parfait pour flâner et déjeuner.',
        descPt: 'Um dos mais belos vilarejos da França, perfeito para passear e almoçar.',
        emoji: '🏘️',
        links: [
          { labelFr: 'Office de tourisme', labelPt: 'Turismo', href: 'https://www.salers-tourisme.fr/' },
        ],
      },
      {
        nameFr: 'Viaduc de Garabit',
        namePt: 'Viaduto de Garabit',
        descFr: 'Ouvrage emblématique de Gustave Eiffel, très belle vue sur la Truyère.',
        descPt: 'Obra emblemática de Gustave Eiffel, com bela vista sobre o Truyère.',
        emoji: '🌉',
        links: [
          {
            labelFr: 'Infos visite',
            labelPt: 'Informações',
            href: 'https://www.pays-saint-flour.fr/incontournables/viaduc-de-garabit/',
          },
        ],
      },
      {
        nameFr: 'Calsacy équitation (Maurs)',
        namePt: 'Calsacy équitation (Maurs)',
        descFr: 'Balades à cheval et équitation. Contact : 06 74 26 31 48.',
        descPt: 'Passeios a cavalo e equitação. Contato: 06 74 26 31 48.',
        emoji: '🐎',
        links: [
          {
            labelFr: 'Centre équestre',
            labelPt: 'Centro equestre',
            href: 'https://centre-equestre-maurs.ffe.com/',
          },
        ],
      },
      {
        nameFr: 'Aurillac',
        namePt: 'Aurillac',
        descFr: 'Centre-ville, promenade du Puy Courny et parc Hélitas pour une balade urbaine.',
        descPt: 'Centro da cidade, passeio no Puy Courny e parque Hélitas para um passeio urbano.',
        emoji: '🏙️',
        links: [
          {
            labelFr: 'Le Puy Courny',
            labelPt: 'Le Puy Courny',
            href: 'https://www.paysaurillactourisme.com/offres/le-puy-courny-aurillac-fr-6163913/',
          },
          {
            labelFr: 'Ville d’Aurillac',
            labelPt: 'Cidade de Aurillac',
            href: 'https://www.aurillac.fr/',
          },
        ],
      },
      {
        nameFr: 'Chaudes-Aigues',
        namePt: 'Chaudes-Aigues',
        descFr: 'Village thermal connu pour son eau chaude naturelle et son centre historique.',
        descPt: 'Vila termal conhecida por sua água quente natural e seu centro histórico.',
        emoji: '♨️',
        links: [
          {
            labelFr: 'Office de tourisme',
            labelPt: 'Turismo',
            href: 'https://www.pays-saint-flour.fr/incontournables/chaudes-aigues-station-thermale/',
          },
        ],
      },
      {
        nameFr: 'Marché de Maurs',
        namePt: 'Mercado de Maurs',
        descFr: 'Marché hebdomadaire le jeudi matin, pratique pour les produits locaux.',
        descPt: 'Mercado semanal na quinta de manhã, ideal para produtos locais.',
        emoji: '🛒',
        links: [
          {
            labelFr: 'Infos marché',
            labelPt: 'Informações',
            href: 'https://www.jours-de-marche.fr/15600-maurs/',
          },
        ],
      },
      {
        nameFr: 'Barrage de Saint-Étienne-Cantalès',
        namePt: 'Lago de Saint-Étienne-Cantalès',
        descFr: 'Puech des Ouilhes, plage de Rénac, base nautique et accrobranche.',
        descPt: 'Puech des Ouilhes, praia de Rénac, base náutica e arvorismo.',
        emoji: '🏖️',
        links: [
          {
            labelFr: 'Puech des Ouilhes',
            labelPt: 'Puech des Ouilhes',
            href: 'https://www.aurillacagglo.fr/fr/lac-saint-etienne-cantales/',
          },
          {
            labelFr: 'Plage de Rénac',
            labelPt: 'Praia de Rénac',
            href: 'https://www.inauvergnerhonealpes.com/fiches/plage-de-renac/',
          },
        ],
      },
      {
        nameFr: 'Château de Tournemire',
        namePt: 'Castelo de Tournemire',
        descFr: 'Visite du château d’Anjony et possibilité de déjeuner sur place dans le village, dont une table étoilée dans le secteur.',
        descPt: 'Visita ao castelo d’Anjony e possibilidade de almoçar no vilarejo, inclusive com uma mesa estrelada na região.',
        emoji: '🏰',
        links: [
          {
            labelFr: 'Château d’Anjony',
            labelPt: 'Castelo d’Anjony',
            href: 'https://www.anjony.fr/',
          },
          {
            labelFr: 'Tournemire',
            labelPt: 'Tournemire',
            href: 'https://www.salers-tourisme.fr/',
          },
        ],
      },
      {
        nameFr: 'Ferme pédagogique à Quézac',
        namePt: 'Fazenda pedagógica em Quézac',
        descFr: 'Animaux, visites et activités. Adresse : 1 route de la Barthe, Junhac. Contact : 06 84 50 29 10.',
        descPt: 'Animais, visitas e atividades. Endereço: 1 route de la Barthe, Junhac. Contato: 06 84 50 29 10.',
        emoji: '🐑',
        links: [
          {
            labelFr: 'La Prairie des Animaux',
            labelPt: 'La Prairie des Animaux',
            href: 'https://www.laprairiedesanimaux.fr/',
          },
        ],
      },
      {
        nameFr: 'Randonnées & Balades à cheval',
        namePt: 'Caminhadas & Passeios a cavalo',
        descFr: 'Sentiers et activités équestres dans le Cantal, à garder pour ceux qui veulent une sortie nature.',
        descPt: 'Trilhas e atividades equestres no Cantal, para quem quiser um passeio na natureza.',
        emoji: '🐴',
        links: [
          {
            labelFr: 'Idées équestres',
            labelPt: 'Ideias equestres',
            href: 'https://www.cantal-destination.com/activites-et-visites/randonnees-et-activites/randonnees-equestres-activites-cheval-cantal',
          },
        ],
      },
    ],
  },
  {
    titleFr: 'Lot',
    titlePt: 'Lot',
    colorClass: 'text-amber-600',
    places: [
      {
        nameFr: 'Figeac – Musée Champollion',
        namePt: 'Figeac – Museu Champollion',
        descFr: 'Belle visite culturelle autour de l’histoire des écritures.',
        descPt: 'Ótima visita cultural sobre a história das escritas.',
        emoji: '🏛️',
        links: [
          {
            labelFr: 'Musée',
            labelPt: 'Museu',
            href: 'https://www.musee-champollion.fr/',
          },
        ],
      },
      {
        nameFr: 'Forêt des Singes',
        namePt: 'Floresta dos Macacos',
        descFr: 'Parc animalier très apprécié près de Rocamadour.',
        descPt: 'Parque animal muito apreciado perto de Rocamadour.',
        emoji: '🐒',
        links: [
          {
            labelFr: 'Site officiel',
            labelPt: 'Site oficial',
            href: 'https://www.la-foret-des-singes.com/',
          },
        ],
      },
      {
        nameFr: 'Gouffre de Padirac',
        namePt: 'Gouffre de Padirac',
        descFr: 'Site souterrain incontournable, mieux vaut réserver à l’avance.',
        descPt: 'Local subterrâneo imperdível, melhor reservar com antecedência.',
        emoji: '🕳️',
        links: [
          {
            labelFr: 'Réserver',
            labelPt: 'Reservar',
            href: 'https://www.gouffredepadirac.com/',
          },
        ],
      },
      {
        nameFr: 'Rocamadour',
        namePt: 'Rocamadour',
        descFr: 'Village emblématique perché, idéal en complément de Padirac ou de la Forêt des Singes.',
        descPt: 'Vilarejo emblemático no alto, ideal em complemento a Padirac ou à Floresta dos Macacos.',
        emoji: '⛪',
        links: [
          {
            labelFr: 'Site officiel',
            labelPt: 'Site oficial',
            href: 'https://www.rocamadour.com/',
          },
        ],
      },
    ],
  },
  {
    titleFr: 'Aveyron (12)',
    titlePt: 'Aveyron (12)',
    colorClass: 'text-sky-700',
    places: [
      {
        nameFr: 'Ferme des Bornottes',
        namePt: 'Ferme des Bornottes',
        descFr: 'À Lacroix-Barrez. Très bonne option avec enfants. Réservation conseillée : 06 49 02 28 06.',
        descPt: 'Em Lacroix-Barrez. Ótima opção com crianças. Reserva recomendada: 06 49 02 28 06.',
        emoji: '🐐',
        links: [
          {
            labelFr: 'Infos pratique',
            labelPt: 'Informações',
            href: 'https://www.okupy.fr/animations-ateliers/ferme-pedagogique-des-bornottes/',
          },
        ],
      },
    ],
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

        <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          {t(
            'Voici une sélection de lieux à visiter autour de Quézac, avec plusieurs idées dans le Cantal ainsi que quelques belles escapades dans le Lot et l’Aveyron.',
            'Aqui está uma seleção de lugares para visitar ao redor de Quézac, com várias ideias no Cantal e também alguns passeios bonitos no Lot e no Aveyron.'
          )}
        </p>

        <div className="max-w-6xl mx-auto space-y-10">
          {regions.map((region) => (
            <div key={region.titleFr}>
              <h3 className={`font-display text-2xl text-center mb-5 ${region.colorClass}`}>
                {t(region.titleFr, region.titlePt)}
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.places.map((place) => (
                  <div key={place.nameFr} className="card-cantal p-5 text-center flex flex-col">
                    <span className="text-3xl mb-3 block">{place.emoji}</span>
                    <h4 className="font-display text-base font-semibold mb-2">
                      {t(place.nameFr, place.namePt)}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {t(place.descFr, place.descPt)}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {place.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gold text-xs inline-flex items-center gap-1.5"
                        >
                          <ExternalLink size={12} />
                          {t(link.labelFr, link.labelPt)}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CantalSection;
