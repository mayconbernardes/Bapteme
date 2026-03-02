import { useLang } from '@/contexts/LanguageContext';
import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const ConfirmationSection = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="confirmation" className="bg-primary/30">
        <div className="section-container text-center">
          <div className="animate-fade-in">
            <CheckCircle size={48} className="mx-auto mb-4 text-moss" />
            <h2 className="section-title">{t('Merci !', 'Obrigado!')}</h2>
            <p className="font-body text-muted-foreground">
              {t(
                "Nous avons bien reçu votre confirmation. À très bientôt à Quézac !",
                "Recebemos sua confirmação. Até breve em Quézac!"
              )}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="confirmation" className="bg-primary/30">
      <div className="section-container">
        <h2 className="section-title">{t('Confirmation', 'Confirmação')}</h2>
        <div className="section-divider" />

        <p className="font-body text-center text-muted-foreground mb-8">
          {t(
            "Merci de nous confirmer votre présence avant le 12 février 2026.",
            "Por favor, confirme sua presença até 12 de fevereiro de 2026."
          )}
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            required
            placeholder={t("Nom complet", "Nome completo")}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
          />
          <input
            type="tel"
            placeholder={t("Téléphone", "Telefone")}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
          />
          <select
            required
            className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all text-muted-foreground"
          >
            <option value="">{t("Serez-vous présent ?", "Estará presente?")}</option>
            <option value="yes">{t("Oui, je serai présent(e)", "Sim, estarei presente")}</option>
            <option value="no">{t("Non, malheureusement", "Infelizmente, não poderei")}</option>
          </select>
          <input
            type="number"
            min="1"
            max="10"
            placeholder={t("Nombre de personnes", "Número de pessoas")}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
          />
          <textarea
            rows={3}
            placeholder={t("Message (optionnel)", "Mensagem (opcional)")}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
          />
          <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
            <Send size={16} />
            {t("Confirmer ma présence", "Confirmar minha presença")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConfirmationSection;
