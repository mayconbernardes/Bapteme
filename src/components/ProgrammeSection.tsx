import { useLang } from '@/contexts/LanguageContext';
import { Calendar } from 'lucide-react';

const ProgrammeSection = () => {
  const { t } = useLang();

  const days = [
    {
      dateFr: 'Vendredi 8 mai',
      datePt: 'Sexta-feira 8 de maio',
      titleFr: 'Arrivée & Découverte',
      titlePt: 'Chegada & Descoberta',
      itemsFr: [
        'Arrivée à Quézac et installation',
        'Balade dans le village et visite du Sanctuaire Notre-Dame',
        'Apéritif de bienvenue en soirée',
      ],
      itemsPt: [
        'Chegada a Quézac e acomodação',
        'Passeio pelo vilarejo e visita ao Santuário Notre-Dame',
        'Aperitivo de boas-vindas à noite',
      ],
    },
    {
      dateFr: 'Samedi 9 mai',
      datePt: 'Sábado 9 de maio',
      titleFr: 'Le Baptême',
      titlePt: 'O Batizado',
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
      titleFr: 'Excursion dans le Cantal',
      titlePt: 'Excursão no Cantal',
      itemsFr: [
        'Matin – Visite du Puy Mary (30 min) ou Village de Salers (25 min)',
        'Déjeuner – Spécialités régionales (truffade, aligot)',
        'Après-midi – Viaduc de Garabit ou randonnée libre',
      ],
      itemsPt: [
        'Manhã – Visita ao Puy Mary (30 min) ou Vilarejo de Salers (25 min)',
        'Almoço – Especialidades regionais (truffade, aligot)',
        'Tarde – Viaduto de Garabit ou caminhada livre',
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
