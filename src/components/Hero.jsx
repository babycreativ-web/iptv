import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Tv, Smartphone, Monitor, Laptop, PlayCircle, MessageSquare } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  const devices = [
    { icon: <Tv size={24} />, name: 'Smart TV' },
    { icon: <Smartphone size={24} />, name: 'Android/iOS' },
    { icon: <Laptop size={24} />, name: 'PC/Mac' },
    { icon: <PlayCircle size={24} />, name: 'MAG/Firestick' },
  ];

  return (
    <section style={{ 
      paddingTop: '160px', 
      paddingBottom: '100px', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        zIndex: -1
      }} />
      
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ 
              display: 'inline-block',
              padding: '8px 16px',
              borderRadius: '100px',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              color: 'var(--primary)',
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '24px'
            }}>
              ✨ {t('hero.badge')}
            </span>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '24px' }}>
              {t('hero.title').split('Premium IPTV')[0]}
              <span className="text-gradient">Premium IPTV</span>
            </h1>
            
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.6' }}>
              {t('hero.subtitle')}
            </p>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
              <a 
                href="#pricing"
                style={{
                  padding: '18px 40px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                  fontWeight: '800',
                  fontSize: '16px',
                  boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)'
                }}
              >
                {t('hero.cta_order')}
              </a>
              <a 
                href="https://wa.me/212688407392"
                className="glass"
                style={{
                  padding: '18px 40px',
                  borderRadius: '12px',
                  fontWeight: '800',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <MessageSquare size={20} />
                {t('hero.cta_whatsapp')}
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.8 }}>
              {devices.map((device, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ color: 'var(--primary)' }}>{device.icon}</div>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>{device.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
