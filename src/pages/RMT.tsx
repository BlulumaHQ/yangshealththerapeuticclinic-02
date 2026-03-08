import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import massageImg from '@/assets/massage.jpg';
import sealsImg from '@/assets/rmt-cmt-seals.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const RMT = () => {
  const { t } = useLanguage();

  const techniques = [
    { en: 'Swedish Relaxation', zh: '瑞典式放松按摩' },
    { en: 'Deep Tissue Work', zh: '深层组织按摩' },
    { en: 'Trigger-Point Release', zh: '触发点释放' },
    { en: 'Myofascial Release', zh: '筋膜松解' },
    { en: 'Neuromuscular Therapy', zh: '神经肌肉疗法' },
    { en: 'Hydrotherapy', zh: '水疗' },
  ];

  return (
    <div>
      <PageHero
        title={{ en: 'Registered Massage Therapy', zh: '注册按摩治疗' }}
        subtitle={{ en: 'RMT Services', zh: 'RMT服务' }}
        bgImage={massageImg}
      />

      {/* Description */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-3">
                {t('Professional Care', '专业护理')}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                {t('Therapeutic Massage', '治疗性按摩')}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {t(
                  'Registered Massage Therapy involves the manipulation of soft tissues including muscles, connective tissues, tendons, ligaments, and joints. Our RMT treatments are designed to alleviate stress, reduce chronic pain, and restore your body\'s natural balance.',
                  '注册按摩治疗包括对软组织的操作，包括肌肉、结缔组织、肌腱、韧带和关节。我们的RMT治疗旨在缓解压力、减少慢性疼痛，并恢复身体的自然平衡。'
                )}
              </p>
              <img src={sealsImg} alt="RMT and CMT Certification Seals" className="h-14 object-contain" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={massageImg} alt="Massage therapy" className="w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={{ en: 'Our Expertise', zh: '我们的专长' }}
            title={{ en: 'Massage Techniques', zh: '按摩技术' }}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techniques.map((tech, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className="border border-border p-6 text-center hover:border-gold transition-colors"
              >
                <p className="font-display text-lg text-foreground">{t(tech.en, tech.zh)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={{ en: 'RMT Rates', zh: 'RMT价格' }}
            title={{ en: 'Pricing', zh: '价格表' }}
            light
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-lg mx-auto border border-dark-section-foreground/20 p-8"
          >
            <p className="text-dark-section-foreground/60 text-xs font-body mb-6 tracking-wider uppercase text-center">
              {t('All prices include GST', '所有价格包含GST')}
            </p>
            <div className="space-y-4">
              {[
                { dur: t('30 Minutes', '30分钟'), price: '$60.00' },
                { dur: t('45 Minutes', '45分钟'), price: '$85.00' },
                { dur: t('60 Minutes', '60分钟'), price: '$115.00' },
                { dur: t('90 Minutes', '90分钟'), price: '$165.00' },
              ].map((item) => (
                <div key={item.dur} className="flex justify-between items-center border-b border-dark-section-foreground/10 pb-3">
                  <span className="text-dark-section-foreground/80 font-body">{item.dur}</span>
                  <span className="text-gold font-display text-2xl">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-navy/50 p-4">
              <p className="text-dark-section-foreground/70 font-body text-sm leading-relaxed">
                {t(
                  'Coverage: MSP ($23/visit, 10 visits/year), WCB, ICBC, Extended Health Insurance accepted.',
                  '保险覆盖：MSP（$23/次，10次/年）、WCB、ICBC、延伸医疗保险。'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RMT;
