import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();
  const [connections, setConnections] = useState(1);

  const basePlans = [
    { duration: 1, label: t('pricing.month'), price: 15, popular: false },
    { duration: 3, label: `3 ${t('pricing.months')}`, price: 35, popular: false },
    { duration: 6, label: `6 ${t('pricing.months')}`, price: 55, popular: true },
    { duration: 12, label: `12 ${t('pricing.year')}`, price: 85, popular: false },
  ];

  const getPrice = (basePrice) => {
    const multipliers = { 1: 1, 2: 1.7, 3: 2.3 };
    return Math.floor(basePrice * (multipliers[connections] || 1));
  };

  const features = [
    t('pricing.features.channels'),
    t('pricing.features.vod'),
    t('pricing.features.quality'),
    t('pricing.features.catchup'),
    t('pricing.features.support'),
    t('pricing.features.antifreeze'),
  ];

  return (
    <section id="pricing" style={{ padding: '100px 0', background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>{t('pricing.title')}</h2>
          <p style={{ color: 'var(--text-muted)' }}>{t('pricing.subtitle')}</p>
          
          {/* Connection Selector */}
          <div style={{ 
            marginTop: '40px',
            display: 'inline-flex',
            background: 'var(--bg-card)',
            padding: '4px',
            borderRadius: '12px',
            border: '1px solid var(--border)'
          }}>
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => setConnections(num)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '700',
                  background: connections === num ? 'var(--primary)' : 'transparent',
                  color: connections === num ? 'white' : 'var(--text-muted)',
                  transition: '0.3s'
                }}
              >
                {num} {num === 1 ? 'Screen' : 'Screens'}
              </button>
            ))}
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '30px',
          paddingTop: '20px'
        }}>
          {basePlans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass"
              style={{
                padding: '40px 30px',
                position: 'relative',
                border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border)',
                background: plan.popular ? 'rgba(99, 102, 241, 0.05)' : 'var(--bg-card)'
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--primary)',
                  padding: '4px 16px',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: '800',
                  textTransform: 'uppercase'
                }}>
                  Most Popular
                </div>
              )}

              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{plan.label}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '30px' }}>
                <span style={{ fontSize: '40px', fontWeight: '800' }}>€{getPrice(plan.price)}</span>
                <span style={{ color: 'var(--text-muted)', marginLeft: '4px' }}>/{plan.duration === 12 ? 'year' : 'term'}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                    <div style={{ color: 'var(--success)' }}><Check size={16} /></div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/212688407392?text=Hello, I want to order the ${plan.label} plan for ${connections} connection(s).`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '16px',
                  borderRadius: '12px',
                  background: plan.popular ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
                  border: plan.popular ? 'none' : '1px solid var(--border)',
                  fontWeight: '800',
                  transition: '0.3s'
                }}
              >
                <Zap size={18} />
                {t('pricing.order_now')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
