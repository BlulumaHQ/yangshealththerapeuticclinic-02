import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logoWhite from '@/assets/yang-logo-white.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img src={logoWhite} alt="Yang's Health Therapeutic Clinic" className="h-16 object-contain" />
            <p className="mt-4 text-dark-section-foreground/70 text-sm max-w-xs font-body">
              {t(
                'Integrating Traditional Chinese Medicine with Western therapy for your optimal health.',
                '融合传统中医与西方疗法，为您的健康保驾护航。'
              )}
            </p>
          </div>

          {/* Center spacer - minimum 75px */}
          <div className="hidden md:block min-w-[75px] flex-grow" />

          {/* Right: Nav + Contact */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Navigation */}
            <div>
              <h4 className="font-display text-lg text-gold mb-4">{t('Navigation', '导航')}</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-sm text-dark-section-foreground/70 hover:text-gold transition-colors font-body">{t('Home', '首页')}</Link>
                <Link to="/about" className="text-sm text-dark-section-foreground/70 hover:text-gold transition-colors font-body">{t('About', '关于我们')}</Link>
                <Link to="/rmt" className="text-sm text-dark-section-foreground/70 hover:text-gold transition-colors font-body">{t('Massage Therapy', '注册按摩')}</Link>
                <Link to="/tcm" className="text-sm text-dark-section-foreground/70 hover:text-gold transition-colors font-body">{t('Chinese Medicine', '中医治疗')}</Link>
                <Link to="/contact" className="text-sm text-dark-section-foreground/70 hover:text-gold transition-colors font-body">{t('Contact', '联系我们')}</Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg text-gold mb-4">{t('Contact', '联系方式')}</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:6042854968" className="flex items-center gap-2 text-sm text-dark-section-foreground/70 hover:text-gold transition-colors font-body">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  (604) 285-4968
                </a>
                <a href="mailto:info@richmondacupuncturermt.ca" className="flex items-center gap-2 text-sm text-dark-section-foreground/70 hover:text-gold transition-colors font-body">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  info@richmondacupuncturermt.ca
                </a>
                <div className="flex items-start gap-2 text-sm text-dark-section-foreground/70 font-body">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>Unit 1140 - 4380 No. 3 Road<br />Richmond, BC V6X 3V7</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-dark-section-foreground/70 font-body">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  {t('Mon–Sun: 10:00am – 7:00pm', '周一至周日: 10:00am – 7:00pm')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-section-foreground/10">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-dark-section-foreground/50 font-body">
          © {new Date().getFullYear()} Yang's Health Therapeutic Clinic. All rights reserved. | Web Design by{' '}
          <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
            Bluluma Design
          </a>
        {" "}<span className="block mt-1 opacity-80" data-concept-note>Design concept for portfolio purposes only. Not the official website of Yang's Health Therapeutic Clinic.</span></div>
      </div>
    </footer>
  );
};

export default Footer;
