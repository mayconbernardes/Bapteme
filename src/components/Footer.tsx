import { useLang } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-10 text-center">
      <div className="flex items-center justify-center gap-2 mb-3 text-gold opacity-50" aria-hidden>
        <span>✿</span>
        <Heart size={14} />
        <span>✿</span>
      </div>
      <p className="font-display text-lg font-semibold text-foreground mb-1">
        {t("Baptême d'Alba", "Batizado de Alba")}
      </p>
      <p className="font-body text-sm text-muted-foreground mb-4">
        {t("9 mai 2026 – Quézac, Cantal, France", "9 de maio de 2026 – Quézac, Cantal, França")}
      </p>
      <p className="font-body text-xs text-muted-foreground">
        © 2026 – {t("Fait avec amour", "Feito com amor")} ❤️
      </p>
    </footer>
  );
};

export default Footer;
