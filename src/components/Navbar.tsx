import { useLang } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'ceremonie', fr: 'Cérémonie – 9 mai', pt: 'Cerimônia – 9 maio' },
  { id: 'liturgie', fr: 'Livret liturgique', pt: 'Guia litúrgico' },
  { id: 'musiques', fr: 'Musiques', pt: 'Músicas' },
  { id: 'programme', fr: 'Programme du weekend', pt: 'Programa do fim de semana' },
  { id: 'cantal', fr: 'Visiter le Cantal', pt: 'Visitar o Cantal' },
  { id: 'manger', fr: 'Où manger', pt: 'Onde comer' },
];

const Navbar = () => {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-card/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('accueil')} className="font-display text-sm sm:text-base font-semibold text-foreground">
            {t("Baptême d'Alba", "Batizado de Alba")}
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link"
              >
                {t(item.fr, item.pt)}
              </button>
            ))}
          </div>

          {/* Language toggle + mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/60 text-sm font-body transition-all hover:bg-primary"
              aria-label="Toggle language"
            >
              {lang === 'fr' ? '🇧🇷 PT' : '🇫🇷 FR'}
            </button>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left nav-link py-2"
              >
                {t(item.fr, item.pt)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
