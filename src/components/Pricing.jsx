import React from 'react';
import { Check, ShoppingCart } from 'lucide-react';

const Pricing = () => {
  const plans = [
    { duration: '1 MOIS', price: 11, popular: false },
    { duration: '3 MOIS', price: 21, popular: false },
    { duration: '6 MOIS', price: 31, popular: false },
    { duration: '12 MOIS', price: 51, popular: true },
    { duration: '24 MOIS', price: 81, popular: false },
  ];

  const features = [
    "+ 120.000 Chaines",
    "+ 60.000 Films & Séries",
    "Qualité 4K / UHD / HEVC",
    "Assistance 24/7",
    "Mise à jour gratuite",
    "Anti-Freeze Technologie",
    "Compatible Tous Appareils",
  ];

  return (
    <section id="pricing" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900' }}>NOS <span style={{ color: 'var(--secondary)' }}>OFFRES</span> D'ABONNEMENT</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '15px',
          width: '100%',
          overflowX: 'auto'
        }}>
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={plan.popular ? 'pricing-card-premium' : ''}
              style={{
                background: plan.popular ? '' : 'var(--card-bg)',
                padding: '50px 25px',
                borderRadius: '30px',
                textAlign: 'center',
                position: 'relative',
                transition: '0.3s',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--primary)',
                  color: '#000',
                  padding: '5px 25px',
                  borderRadius: '50px',
                  fontSize: '11px',
                  fontWeight: '900'
                }}>MEILLEURE VENTE</div>
              )}

              <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '25px' }}>{plan.duration}</h3>
              <div style={{ marginBottom: '35px' }}>
                <span style={{ fontSize: '50px', fontWeight: '900' }}>{plan.price}€</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '45px', textAlign: 'left', fontSize: '13px' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} color={plan.popular ? '#fff' : 'var(--secondary)'} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/212688407392" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '18px',
                borderRadius: '50px',
                background: plan.popular ? '#fff' : 'var(--secondary)',
                color: plan.popular ? 'var(--secondary)' : '#fff',
                fontWeight: '900',
                fontSize: '13px'
              }}>
                <ShoppingCart size={18} />
                COMMANDER
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
