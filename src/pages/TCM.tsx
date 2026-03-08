import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import acupunctureImg from '@/assets/acupuncture.jpg';
import cuppingImg from '@/assets/cupping.jpg';
import moxibustionImg from '@/assets/moxibustion.jpg';
import guashaImg from '@/assets/guasha.jpg';
import reflexologyImg from '@/assets/reflexology.jpg';
import sealsImg from '@/assets/rmt-cmt-seals.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const TCM = () => {
  const { t } = useLanguage();

  const services = [
    {
      img: acupunctureImg,
      title: { en: 'Acupuncture', zh: '针灸' },
      desc: {
        en: 'Treatment based on zang-fu organ theory and energetic meridians. Involves the insertion of fine needles to "obtain the qi," regulating flow to achieve yin-yang balance.',
        zh: '基于脏腑理论和经络学说的治疗。通过将细针刺入特定穴位来"得气"，调节气血流通以达到阴阳平衡。',
      },
    },
    {
      img: cuppingImg,
      title: { en: 'Cupping Therapy', zh: '拔罐' },
      desc: {
        en: 'Application of suction to the skin using glass or bamboo cups to improve circulation, relieve muscle tension, and promote healing.',
        zh: '使用玻璃或竹罐在皮肤上产生吸力，改善血液循环、缓解肌肉紧张并促进愈合。',
      },
    },
    {
      img: guashaImg,
      title: { en: 'Guasha (Scraping)', zh: '刮痧' },
      desc: {
        en: 'Skin is scraped with a smooth tool (ceramic or horn) to improve local circulation, dispel fever, and boost immunity.',
        zh: '使用光滑工具（陶瓷或牛角）刮擦皮肤，改善局部血液循环、驱散发热并增强免疫力。',
      },
    },
    {
      img: moxibustionImg,
      title: { en: 'Moxibustion', zh: '艾灸' },
      desc: {
        en: 'Application of heat from burning moxa (mugwort) to acupoints. Includes direct and indirect methods using ginger or garlic slices for enhanced therapeutic effect.',
        zh: '将燃烧的艾草（艾绒）的热量施于穴位。包括直接灸和使用姜片或蒜片的间接灸，以增强治疗效果。',
      },
    },
    {
      img: reflexologyImg,
      title: { en: 'Foot Reflexology', zh: '足底按摩' },
      desc: {
        en: 'Application of electrical energy and pressure to specific points on the feet to relieve pain, restore energy, and synchronize body and mind.',
        zh: '将电能和压力施于足部特定穴位，以缓解疼痛、恢复能量，并协调身心。',
      },
    },
  ];

  return (
    <div>
      <PageHero
        title={{ en: 'Chinese Medicine', zh: '中医治疗' }}
        subtitle={{ en: 'Traditional Healing', zh: '传统疗法' }}
        bgImage={acupunctureImg}
      />

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-3">
              {t('Acupressure & More', '穴位按压及更多')}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              {t('Traditional Chinese Medicine Services', '传统中医服务')}
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              {t(
                'Acupressure involves manual manipulation of specific body locations and channels to prevent disease and recover function in tendons and joints. Our practitioners combine multiple TCM modalities for comprehensive treatment.',
                '穴位按压通过手动操作身体特定部位和经络来预防疾病，恢复肌腱和关节的功能。我们的医师结合多种中医疗法进行综合治疗。'
              )}
            </p>
            <img src={sealsImg} alt="RMT and CMT Certification Seals" className="h-14 object-contain mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={{ en: 'Our Treatments', zh: '我们的治疗' }}
            title={{ en: 'TCM Services', zh: '中医服务项目' }}
          />
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <img src={service.img} alt={t(service.title.en, service.title.zh)} className="w-full h-80 object-cover" />
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                    {t(service.title.en, service.title.zh)}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {t(service.desc.en, service.desc.zh)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={{ en: 'TCM Rates', zh: '中医价格' }}
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
              {t('GST Included', '含GST')}
            </p>
            <div className="flex justify-between items-center border-b border-dark-section-foreground/10 pb-4 mb-4">
              <span className="text-dark-section-foreground/80 font-body">
                {t('Standard Rate (per hour)', '标准费率（每小时）')}
              </span>
              <span className="text-gold font-display text-2xl">$65.00</span>
            </div>
            <p className="text-dark-section-foreground/60 font-body text-sm leading-relaxed mb-6">
              {t(
                'Combine 2–3 treatments in one session (e.g., Acupuncture + Cupping + Guasha).',
                '一次疗程可组合2-3种治疗（例如针灸+拔罐+刮痧）。'
              )}
            </p>
            <div className="bg-navy/50 p-4">
              <h4 className="text-gold font-display text-lg mb-2">{t('ICBC Rehabilitation', 'ICBC康复')}</h4>
              <p className="text-dark-section-foreground/70 font-body text-sm leading-relaxed">
                {t(
                  '24 sessions of Acupuncture & RMT within 12 weeks post-accident. $0 user fee, no doctor referral required.',
                  '事故后12周内24次针灸和RMT治疗。$0费用，无需医生转介。'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TCM;
