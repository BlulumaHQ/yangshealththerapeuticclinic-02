import { useLanguage } from '@/contexts/LanguageContext';

interface SectionHeadingProps {
  subtitle: { en: string; zh: string };
  title: { en: string; zh: string };
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, light }: SectionHeadingProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-12">
      <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-3">
        {t(subtitle.en, subtitle.zh)}
      </p>
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl gold-underline pb-4 ${light ? 'text-dark-section-foreground' : 'text-foreground'}`}>
        {t(title.en, title.zh)}
      </h2>
    </div>
  );
};

export default SectionHeading;
