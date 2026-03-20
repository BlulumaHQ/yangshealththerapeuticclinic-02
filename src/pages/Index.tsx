import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionHeading from '@/components/SectionHeading';
import heroImg from '@/assets/hero-spa.jpg';
import acupunctureImg from '@/assets/acupuncture.jpg';
import massageImg from '@/assets/massage.jpg';
import cuppingImg from '@/assets/cupping.jpg';
import moxibustionImg from '@/assets/moxibustion.jpg';
import reflexologyImg from '@/assets/reflexology.jpg';
import guashaImg from '@/assets/guasha.jpg';
import sealsImg from '@/assets/rmt-cmt-seals.png';
import aboutBgImg from '@/assets/about-bg.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { img: massageImg, title: { en: 'Registered Massage Therapy', zh: '注册按摩治疗' }, link: '/rmt' },
    { img: acupunctureImg, title: { en: 'Acupuncture', zh: '针灸' }, link: '/tcm' },
    { img: cuppingImg, title: { en: 'Cupping Therapy', zh: '拔罐' }, link: '/tcm' },
    { img: moxibustionImg, title: { en: 'Moxibustion', zh: '艾灸' }, link: '/tcm' },
    { img: guashaImg, title: { en: 'Guasha (Scraping)', zh: '刮痧' }, link: '/tcm' },
    { img: reflexologyImg, title: { en: 'Foot Reflexology', zh: '足底按摩' }, link: '/tcm' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">
              {t('Years of Experience', '多年经验')}
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-7xl text-dark-section-foreground leading-tight mb-6">
              {t('A Lifetime of Relaxation', '一生的放松享受')}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-dark-section-foreground/80 font-body text-lg mb-4">
              {t(
                'Our hand let you really feel better! Integrating Traditional Chinese Medicine with Western therapy.',
                '我们的双手让您真正感受更好！融合传统中医与西方疗法。'
              )}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-gold text-accent-foreground px-8 py-3 font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
              >
                {t('Book Your Visit', '预约就诊')}
              </Link>
              <Link
                to="/about"
                className="border border-dark-section-foreground/50 text-dark-section-foreground px-8 py-3 font-body text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
              >
                {t('Learn More', '了解更多')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Insurance Banner */}
      <section className="bg-gold py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-sm md:text-base tracking-widest uppercase text-accent-foreground font-semibold">
            MSP · WCB · ICBC · {t('Extended Medical Insurance Accepted', '接受延伸医疗保险')}
          </p>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-3">
                {t('About Our Clinic', '关于诊所')}
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                {t('Experience the Healing Arts', '体验治愈之道')}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {t(
                  'Located in the Parker Place mall in central Richmond, Yang\'s Health Therapeutic Clinic is easily accessible via car or the Canada Line. We combine ancient Chinese medical wisdom with modern Western physical therapy techniques, focusing on predicting and healing pain.',
                  '百医堂中医诊所位于列治文中心的百家店商场内，交通便利，可驾车或乘坐加拿大线前往。我们将古老的中医智慧与现代西方物理治疗技术相结合，专注于疼痛的预防和治疗。'
                )}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {t(
                  'Our team has extensive experience treating disc herniation, frozen shoulder, thoracic outlet syndrome, sciatic nerve lesions, whiplash, headaches, and sports injuries.',
                  '我们的团队在治疗椎间盘突出、肩周炎、胸廓出口综合征、坐骨神经损伤、挥鞭伤、头痛和运动损伤方面拥有丰富经验。'
                )}
              </p>
              <img src={sealsImg} alt="RMT and CMT Certification Seals" className="h-16 object-contain" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <img
                src={aboutBgImg}
                alt="Zen wellness atmosphere"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy p-6 hidden lg:block">
                <p className="font-display text-3xl text-gold">20+</p>
                <p className="text-primary-foreground text-sm font-body tracking-wider uppercase">
                  {t('Years Experience', '年经验')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={{ en: 'What We Offer', zh: '我们的服务' }}
            title={{ en: 'Our Services', zh: '服务项目' }}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, delay: i * 0.1 } } }}
              >
                <Link to={service.link} className="group relative block h-80 overflow-hidden">
                  <img
                    src={service.img}
                    alt={t(service.title.en, service.title.zh)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 service-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl text-dark-section-foreground group-hover:text-gold transition-colors">
                      {t(service.title.en, service.title.zh)}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={{ en: 'Transparent Pricing', zh: '透明定价' }}
            title={{ en: 'Our Rates', zh: '价格表' }}
            light
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* RMT Pricing */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="border border-dark-section-foreground/20 p-8"
            >
              <h3 className="font-display text-2xl text-gold mb-6">
                {t('Registered Massage Therapy', '注册按摩治疗')}
              </h3>
              <p className="text-dark-section-foreground/60 text-xs font-body mb-4 tracking-wider uppercase">
                {t('GST Included', '含GST')}
              </p>
              <div className="space-y-4">
                {[
                  { dur: '30 min', price: '$60.00' },
                  { dur: '45 min', price: '$85.00' },
                  { dur: '60 min', price: '$115.00' },
                  { dur: '90 min', price: '$165.00' },
                ].map((item) => (
                  <div key={item.dur} className="flex justify-between items-center border-b border-dark-section-foreground/10 pb-3">
                    <span className="text-dark-section-foreground/80 font-body text-sm">{item.dur}</span>
                    <span className="text-gold font-display text-xl">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* TCM Pricing */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, delay: 0.2 } } }}
              className="border border-dark-section-foreground/20 p-8"
            >
              <h3 className="font-display text-2xl text-gold mb-6">
                {t('Chinese Medicine', '中医治疗')}
              </h3>
              <p className="text-dark-section-foreground/60 text-xs font-body mb-4 tracking-wider uppercase">
                {t('GST Included', '含GST')}
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-dark-section-foreground/10 pb-3">
                  <span className="text-dark-section-foreground/80 font-body text-sm">
                    {t('Standard Rate (per hour)', '标准费率（每小时）')}
                  </span>
                  <span className="text-gold font-display text-xl">$65.00</span>
                </div>
              </div>
              <p className="text-dark-section-foreground/60 font-body text-sm mt-6 leading-relaxed">
                {t(
                  'Patients can combine 2–3 treatments (e.g., Acupuncture + Cupping) in one session.',
                  '患者可以在一次疗程中组合2-3种治疗（例如针灸+拔罐）。'
                )}
              </p>
              <div className="mt-8 bg-navy/50 p-4">
                <h4 className="text-gold font-display text-lg mb-2">{t('ICBC Coverage', 'ICBC保险')}</h4>
                <p className="text-dark-section-foreground/70 font-body text-sm leading-relaxed">
                  {t(
                    '24 sessions of Acupuncture & RMT within 12 weeks post-accident. $0 user fee, no doctor referral required.',
                    '事故后12周内24次针灸和RMT治疗。$0费用，无需医生转介。'
                  )}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">
            {t('Ready to Feel Better?', '准备好感受更好了吗？')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-dark-section-foreground mb-8">
            {t('Book Your Visit Today', '立即预约就诊')}
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:6042854968"
              className="bg-gold text-accent-foreground px-8 py-3 font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
            >
              {t('Call Now: (604) 285-4968', '立即拨打: (604) 285-4968')}
            </a>
            <Link
              to="/contact"
              className="border border-dark-section-foreground/50 text-dark-section-foreground px-8 py-3 font-body text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
            >
              {t('Get Directions', '获取路线')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
