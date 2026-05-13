import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, Zap, Tv } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
      paddingTop: '180px', 
      paddingBottom: '100px', 
      position: 'relative',
      background: 'var(--bg-dark)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '24px', textTransform: 'uppercase' }}>
              <span style={{ color: 'var(--primary)' }}>PREMIUM</span> IPTV 4K<br /> 
              <span className="text-gradient">LA RÉFÉRENCE #1</span>
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', lineHeight: '1.7' }}>
              Profitez d'un accès illimité à plus de 120 000 chaînes et 60 000 VOD en haute définition. Une expérience de divertissement sans précédent sur tous vos écrans.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/212688407392"
                style={{
                  padding: '20px 45px',
                  borderRadius: '50px',
                  background: 'var(--secondary)',
                  color: '#000',
                  fontWeight: '800',
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 10px 30px rgba(181, 226, 69, 0.3)'
                }}
              >
                <MessageSquare size={22} fill="#000" />
                Commander par WhatsApp
              </a>
            </div>

            <div style={{ display: 'flex', gap: '30px', marginTop: '50px', opacity: 0.7 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                <ShieldCheck size={18} color="var(--primary)" />
                PAIEMENT SÉCURISÉ
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                <Zap size={18} color="var(--primary)" />
                ACTIVATION INSTANTANÉE
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(0, 71, 255, 0.15) 0%, transparent 70%)',
              zIndex: -1
            }} />
            <img 
              src="https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2026/04/4K-Wallpaper-For-Smart-Tv-Gallery-2-e1775578714671.jpg"
              alt="IPTV Showcase"
              style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--border)' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
