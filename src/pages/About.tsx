import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import aboutBgImg from '@/assets/about-bg.jpg';
import heroImg from '@/assets/hero-spa.jpg';
import sealsImg from '@/assets/rmt-cmt-seals.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const About = () => {
  const { t } = useLanguage();

  return (
    <div>
      <PageHero
        title={{ en: 'About Our Clinic', zh: '关于诊所' }}
        subtitle={{ en: 'Our Story', zh: '我们的故事' }}
        bgImage={heroImg}
      />

      {/* Story */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-3">
                {t('Yang\'s Health Therapeutic Clinic', '百医堂中医诊所')}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                {t('Ancient Wisdom, Modern Healing', '古老智慧，现代疗愈')}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {t(
                  'Located in the Parker Place mall in central Richmond, our clinic is easily accessible via car or the Canada Line. We specialize in the integration of Traditional Chinese Medication treatments and Western therapy, combining the best of both worlds for optimal patient outcomes.',
                  '我们的诊所位于列治文中心的百家店商场内，交通便利，可驾车或乘坐加拿大线前往。我们专注于将传统中医治疗与西方疗法相结合，融合两者之精华，以获得最佳的患者治疗效果。'
                )}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {t(
                  'Our focus is on predicting and healing pain. We have extensive experience in treating disc herniation (C-spine and L-spine), Thoracic Outlet Syndrome (TOS), frozen shoulder, sciatic nerve lesions, whiplash, headaches, and sports injuries.',
                  '我们的重点是预防和治疗疼痛。我们在治疗椎间盘突出（颈椎和腰椎）、胸廓出口综合征（TOS）、肩周炎、坐骨神经损伤、挥鞭伤、头痛和运动损伤方面拥有丰富经验。'
                )}
              </p>
              <img src={sealsImg} alt="RMT and CMT Certification Seals" className="h-16 object-contain" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={aboutBgImg} alt="Zen wellness" className="w-full h-[500px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={{ en: 'Meet Our Team', zh: '认识我们的团队' }}
            title={{ en: 'Our Therapists', zh: '我们的治疗师' }}
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="border border-border p-8 text-center"
            >
              <div className="w-24 h-24 bg-navy rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="font-display text-2xl text-primary-foreground">PL</span>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-1">Philip Lu</h3>
              <p className="text-gold font-body text-sm tracking-wider uppercase mb-4">
                {t('Registered Massage Therapist (RMT)', '注册按摩治疗师 (RMT)')}
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {t(
                  'Graduated from Vancouver College of Massage Therapy with a background in Chinese Acupressure from Chengdu University of TCM. Specializes in Swedish massage, kinesiology, and neurophysiology.',
                  '毕业于温哥华按摩治疗学院，拥有成都中医药大学中国指压按摩背景。专长瑞典按摩、运动学和神经生理学。'
                )}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, delay: 0.2 } } }}
              className="border border-border p-8 text-center"
            >
              <div className="w-24 h-24 bg-navy rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="font-display text-2xl text-primary-foreground">CY</span>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-1">Celia Yang</h3>
              <p className="text-gold font-body text-sm tracking-wider uppercase mb-4">
                {t('Registered Acupuncturist (R.AC)', '注册针灸师 (R.AC)')}
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {t(
                  'Graduated from Chengdu Chinese Medicine University. Specialist in TCM diagnosis and needle manipulation with years of clinical experience.',
                  '毕业于成都中医药大学。TCM诊断和针刺操作专家，拥有多年临床经验。'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={{ en: 'Insurance Coverage', zh: '保险覆盖' }}
            title={{ en: 'We Accept', zh: '接受的保险' }}
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['MSP', 'WCB', 'ICBC', t('Extended Health', '延伸医疗')].map((item) => (
              <div key={item} className="border border-dark-section-foreground/20 p-6 text-center">
                <p className="font-display text-xl text-gold">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-dark-section-foreground/60 font-body text-sm mt-8">
            {t(
              'MSP Coverage: $23.00 per visit (limit of 10 combined visits/year)',
              'MSP覆盖：每次$23.00（每年限10次综合就诊）'
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
