import { useLang } from '@/contexts/LanguageContext';

const InvitationSection = () => {
  const { t } = useLang();

  return (
    <section id="invitation" className="bg-primary/30">
      <div className="section-container text-center">
        <h2 className="section-title">{t('Invitation', 'Convite')}</h2>
        <div className="section-divider" />

        <div className="max-w-2xl mx-auto">
          <p className="font-display text-xl sm:text-2xl italic text-foreground leading-relaxed mb-6">
            {t(
              "« C'est avec joie que nous vous invitons à célébrer le baptême de notre fille, Alba. »",
              "« É com grande alegria que vos convidamos a celebrar o batismo da nossa filha, Alba. »"
            )}
          </p>
          <div className="flex items-center justify-center gap-3 opacity-30 text-gold" aria-hidden>
            <span className="w-16 h-px bg-gold" />
            <span>✿</span>
            <span className="w-16 h-px bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
