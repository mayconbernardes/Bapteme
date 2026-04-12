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
        'Suggestion : visite de la région',
      ],
      itemsPt: [
        'Dia livre (não organizado): chegada a Quézac e acomodação',
        'Sugestão: visita pela região',
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
        'Repas ensemble pour ceux qui le souhaitent',
      ],
      itemsPt: [
        '11h00 – Cerimônia na Igreja de Quézac',
        '12h30 – Almoço festivo na Maison Béthanie',
        'Almoço juntos para quem desejar',
      ],
    },
    {
      dateFr: 'Dimanche 10 mai',
      datePt: 'Domingo 10 de maio',
      titleFr: 'Brunch',
      titlePt: 'Brunch',
      itemsFr: [
        'Brunch pour ceux qui le souhaitent au 9 Les Aygades',
      ],
      itemsPt: [
        'Brunch para quem desejar no 9 Les Aygades',
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
