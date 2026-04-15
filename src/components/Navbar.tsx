import { useLang } from '@/contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'ceremonie', fr: 'Cérémonie – 9 mai', pt: 'Cerimônia – 9 maio' },
  { id: 'liturgie', fr: 'Parrain et Marraine', pt: 'Padrinho e Madrinha' },
  { id: 'musiques', fr: 'Musiques', pt: 'Músicas' },
  { id: 'programme', fr: 'Programme du weekend', pt: 'Programa do fim de semana' },
  { id: 'cantal', fr: 'Visiter le Cantal', pt: 'Visitar o Cantal' },
  { id: 'manger', fr: 'Où manger', pt: 'Onde comer' },
];

const Navbar = () => {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (mobileOpen && window.scrollY > 0) {
        closeMobileMenu();
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current);
      }
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    if (!mobileOpen || menuClosing) return;
    setMenuClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setMobileOpen(false);
      setMenuClosing(false);
      closeTimer.current = null;
    }, 200);
  };

  const openMobileMenu = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setMenuClosing(false);
    setMobileOpen(true);
  };

  const scrollTo = (id: string) => {
    closeMobileMenu();
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
              onClick={() => {
                if (mobileOpen) {
                  closeMobileMenu();
                } else {
                  openMobileMenu();
                }
              }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {(mobileOpen || menuClosing) && (
        <div className="lg:hidden fixed inset-0 z-40">
          <button
            className="absolute inset-0 bg-black/20"
            onClick={closeMobileMenu}
            aria-label="Fermer le menu"
          />
          <div
            className={`absolute left-0 right-0 top-16 bg-card shadow-2xl border-t border-border transition-transform duration-200 ${
              menuClosing ? '-translate-y-full' : 'translate-y-0'
            }`}
          >
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
