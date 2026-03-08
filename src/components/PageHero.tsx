import { useLanguage } from '@/contexts/LanguageContext';

interface PageHeroProps {
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  bgImage: string;
}

const PageHero = ({ title, subtitle, bgImage }: PageHeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4">
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">
          {t(subtitle.en, subtitle.zh)}
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-section-foreground">
          {t(title.en, title.zh)}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;
