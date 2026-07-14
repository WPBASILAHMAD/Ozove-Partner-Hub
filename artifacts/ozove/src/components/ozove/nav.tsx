import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#services', label: 'Services' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#results', label: 'Results' },
  { href: '#fit', label: 'Fit' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled || menuOpen ? 'bg-background/80 backdrop-blur-md border-border/50' : '',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl font-bold tracking-tighter" data-testid="link-home">
          ozove
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="hidden md:block font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-talent-login"
          >
            Talent login
          </button>
          <a
            href="#cta"
            className="bg-foreground text-background hover:bg-foreground/90 font-mono text-xs uppercase tracking-wider px-5 py-2.5 transition-all active:scale-95"
            data-testid="link-book-audit"
          >
            Book audit
          </a>
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
          >
            <nav className="flex flex-col px-6 py-6 gap-6 font-mono text-sm uppercase tracking-wider text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                className="text-left hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Talent login
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
