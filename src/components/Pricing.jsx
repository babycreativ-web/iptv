import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Zap, ShoppingCart } from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    { duration: 1, label: '1 MOIS', price: 11, popular: false },
    { duration: 3, label: '3 MOIS', price: 21, popular: false },
    { duration: 6, label: '6 MOIS', price: 31, popular: false },
    { duration: 12, label: '12 MOIS', price: 51, popular: true },
    { duration: 24, label: '24 MOIS', price: 81, popular: false },
  ];

  const features = [
    "+ 120.000 Chaines",
    "+ 60.000 Films & Séries",
    "Qualité 4K / UHD / HEVC",
    "Assistance 24/7",
    "Mise à jour gratuite",
    "Anti-Freeze Technologie",
    "Compatible Smart TV, Android, MAG...",
  ];

  return (
    <section id="pricing" style={{ padding: '100px 0', background: '#080917' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '20px' }}>NOS ABONNEMENTS <span style={{ color: 'var(--primary)' }}>PREMIUM</span></h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Choisissez le plan qui vous convient et profitez de la meilleure expérience IPTV en France et à l'international.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '20px',
          alignItems: 'flex-start'
        }}>
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              style={{
                background: plan.popular 
                  ? 'linear-gradient(180deg, #6a11cb 0%, #2575fc 100%)' 
                  : 'var(--bg-card)',
                padding: '40px 25px',
                borderRadius: '24px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                boxShadow: plan.popular ? '0 20px 40px rgba(106, 17, 203, 0.3)' : 'none'
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--secondary)',
                  color: '#000',
                  padding: '5px 20px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '900',
                  textTransform: 'uppercase'
                }}>
                  Meilleur Choix
                </div>
              )}

              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>{plan.label}</h3>
              
              <div style={{ marginBottom: '30px' }}>
                <span style={{ fontSize: '48px', fontWeight: '900' }}>{plan.price}€</span>
                <div style={{ fontSize: '14px', color: plan.popular ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)' }}>
                  Paiement unique
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px', 
                marginBottom: '40px',
                textAlign: 'left',
                fontSize: '13px'
              }}>
                {features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} color={plan.popular ? '#fff' : 'var(--primary)'} strokeWidth={3} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/212688407392?text=Bonjour, je souhaite commander le pack ${plan.label} à ${plan.price}€.`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  width: '100%',
                  padding: '16px',
                  borderRadius: '15px',
                  background: plan.popular ? '#fff' : 'var(--primary)',
                  color: plan.popular ? 'var(--primary)' : '#fff',
                  fontWeight: '800',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  transition: '0.3s'
                }}
              >
                <ShoppingCart size={18} />
                COMMANDER
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
