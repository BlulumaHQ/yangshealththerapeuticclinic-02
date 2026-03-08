import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import heroImg from '@/assets/hero-spa.jpg';
import parkerPlaceMap from '@/assets/parker-place-map.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div>
      <PageHero
        title={{ en: 'Contact Us', zh: '联系我们' }}
        subtitle={{ en: 'Get in Touch', zh: '与我们联系' }}
        bgImage={heroImg}
      />

      {/* Contact Info + Map */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-3">
                {t('Visit Us', '来访我们')}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                {t('Get in Touch', '联系方式')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">{t('Address', '地址')}</h4>
                    <p className="font-body text-muted-foreground text-sm">
                      Parker Place ({t('列治文百家店', '列治文百家店')})<br />
                      Unit 1140 - 4380 No. 3 Road<br />
                      Richmond, BC V6X 3V7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">{t('Phone', '电话')}</h4>
                    <a href="tel:6042854968" className="font-body text-muted-foreground text-sm hover:text-gold transition-colors">
                      (604) 285-4968
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">{t('Email', '邮箱')}</h4>
                    <a href="mailto:info@richmondacupuncturermt.ca" className="font-body text-muted-foreground text-sm hover:text-gold transition-colors">
                      info@richmondacupuncturermt.ca
                    </a>
                    <br />
                    <a href="mailto:therapy428@gmail.com" className="font-body text-muted-foreground text-sm hover:text-gold transition-colors">
                      therapy428@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">{t('Hours of Operation', '营业时间')}</h4>
                    <p className="font-body text-muted-foreground text-sm">
                      {t('Monday – Sunday', '周一 – 周日')}<br />
                      10:00am – 7:00pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="tel:6042854968"
                  className="inline-block bg-gold text-accent-foreground px-8 py-3 font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
                >
                  {t('Book Your Visit', '预约就诊')}
                </a>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.2!2d-123.1056!3d49.1656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486739f9e469c21%3A0x4cdd4d5d5b5c5e5e!2sParker+Place!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yang's Health Therapeutic Clinic Location"
                className="w-full h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parker Place Mall Map */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-3">
            {t('Inside Parker Place', '百家店内部')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 gold-underline pb-4">
            {t('Mall Directory', '商场平面图')}
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              'We are located at Unit 1140 on the Lower Level of Parker Place. Look for the blue marker on the map below.',
              '我们位于百家店下层1140号单元。请在下方地图上寻找蓝色标记。'
            )}
          </p>
          <img
            src={parkerPlaceMap}
            alt="Parker Place Mall Map - Unit 1140"
            className="max-w-4xl w-full mx-auto border border-border"
          />
        </div>
      </section>

      {/* Insurance Banner */}
      <section className="bg-gold py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-sm md:text-base tracking-widest uppercase text-accent-foreground font-semibold">
            MSP · WCB · ICBC · {t('Extended Medical Insurance Accepted', '接受延伸医疗保险')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
