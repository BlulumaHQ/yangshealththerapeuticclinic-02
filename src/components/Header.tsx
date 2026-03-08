import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logoMain from '@/assets/yang-logo-main.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: t('Home', '首页') },
    { path: '/about', label: t('About', '关于我们') },
    { path: '/rmt', label: t('Massage Therapy', '注册按摩') },
    { path: '/tcm', label: t('Chinese Medicine', '中医治疗') },
    { path: '/contact', label: t('Contact', '联系我们') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy shadow-lg py-2'
          : 'bg-navy/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoMain} alt="Yang's Health Therapeutic Clinic" className="h-12 w-12 rounded-full object-cover" />
          <div className="hidden sm:block">
            <p className="font-display text-lg text-primary-foreground leading-tight">Yang's Health</p>
            <p className="text-xs text-gold tracking-widest uppercase">百医堂中医诊所</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm tracking-wider uppercase transition-colors hover:text-gold ${
                location.pathname === item.path ? 'text-gold' : 'text-primary-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switch */}
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="text-sm font-body tracking-wider text-primary-foreground hover:text-gold transition-colors border border-primary-foreground/30 px-3 py-1 rounded"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>

          {/* Phone */}
          <a href="tel:6042854968" className="hidden md:flex items-center gap-2 text-gold text-sm">
            <Phone className="w-4 h-4" />
            (604) 285-4968
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-primary-foreground"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="lg:hidden bg-navy border-t border-primary-foreground/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm tracking-wider uppercase py-2 transition-colors hover:text-gold ${
                  location.pathname === item.path ? 'text-gold' : 'text-primary-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:6042854968" className="flex items-center gap-2 text-gold text-sm py-2">
              <Phone className="w-4 h-4" />
              (604) 285-4968
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
