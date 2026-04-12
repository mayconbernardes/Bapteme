import { useLang } from '@/contexts/LanguageContext';
import { Calendar } from 'lucide-react';

const ProgrammeSection = () => {
  const { t } = useLang();

  const days = [
    {
      dateFr: 'Vendredi 8 mai',
      datePt: 'Sexta-feira 8 de maio',
      titleFr: 'Suggestions libres',
      titlePt: 'Sugestões livres',
      itemsFr: [
        'Journée libre (non organisée) : arrivée à Quézac et installation',
        'Suggestion : balade dans le village et visite du Sanctuaire Notre-Dame',
      ],
      itemsPt: [
        'Dia livre (não organizado): chegada a Quézac e acomodação',
        'Sugestão: passeio pelo vilarejo e visita ao Santuário Notre-Dame',
      ],
    },
    {
      dateFr: 'Samedi 9 mai',
      datePt: 'Sábado 9 de maio',
      titleFr: 'Journée du baptême',
      titlePt: 'Dia do batizado',
      itemsFr: [
        '11h00 – Cérémonie à l\'Église de Quézac',
        '12h30 – Repas festif à la Maison Béthanie',
        'Après-midi – Célébration en famille',
      ],
      itemsPt: [
        '11h00 – Cerimônia na Igreja de Quézac',
        '12h30 – Almoço festivo na Maison Béthanie',
        'Tarde – Celebração em família',
      ],
    },
    {
      dateFr: 'Dimanche 10 mai',
      datePt: 'Domingo 10 de maio',
      titleFr: 'Suggestions libres dans le Cantal',
      titlePt: 'Sugestões livres no Cantal',
      itemsFr: [
        'Journée libre (non organisée), chacun organise son programme',
        'Suggestion matin : visite du Puy Mary (30 min) ou du village de Salers (25 min)',
        'Suggestion déjeuner : spécialités régionales (truffade, aligot)',
        'Suggestion après-midi : viaduc de Garabit ou randonnée libre',
      ],
      itemsPt: [
        'Dia livre (não organizado), cada um organiza o seu programa',
        'Sugestão de manhã: visita ao Puy Mary (30 min) ou ao vilarejo de Salers (25 min)',
        'Sugestão de almoço: especialidades regionais (truffade, aligot)',
        'Sugestão à tarde: viaduto de Garabit ou caminhada livre',
      ],
    },
  ];

  return (
    <section id="programme">
      <div className="section-container">
        <h2 className="section-title">
          <Calendar className="inline-block mr-2 mb-1" size={28} />
          {t('Programme du weekend', 'Programa do fim de semana')}
        </h2>
        <div className="section-divider" />
        <p className="max-w-3xl mx-auto mb-8 font-body text-sm text-muted-foreground">
          {t(
            'Seule la journée du 9 mai est organisée pour le baptême. Les autres jours sont des suggestions d\'activités, chacun s\'organise librement.',
            'Apenas o dia 9 de maio é organizado para o batizado. Os outros dias são sugestões de atividades, cada um se organiza livremente.'
          )}
        </p>

        <div className="max-w-3xl mx-auto space-y-8">
          {days.map((day, i) => (
            <div key={i} className="card-cantal p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-display text-sm font-bold text-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">{t(day.dateFr, day.datePt)}</p>
                  <p className="font-body text-sm text-gold">{t(day.titleFr, day.titlePt)}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-11">
                {(t(day.itemsFr.join('||'), day.itemsPt.join('||'))).split('||').map((item, j) => (
                  <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-gold mt-1 shrink-0">✿</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
