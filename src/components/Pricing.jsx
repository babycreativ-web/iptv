import React from 'react';
import { Check, ShoppingCart } from 'lucide-react';

const Pricing = () => {
  const plans = [
    { duration: '1 Mois', price: '9.99', period: '/mois', tagline: "Tester l'abonnement IPTV 4K", popular: false },
    { duration: '3 Mois', price: '29.99', period: '/3 mois', tagline: 'Excellent abonnement IPTV 4K', popular: false },
    { duration: '6 Mois', price: '39.99', period: '/6 mois', tagline: 'Meilleur abonnement IPTV 4K', popular: true },
    { duration: '12 Mois', price: '59', period: '/12 mois', tagline: 'Offre IPTV 4K Premium annuelle', popular: false },
  ];

  const features = [
    "20 000+ chaînes internationales",
    "50 000+ films & séries VOD",
    "Qualité HD / Full HD / 4K",
    "Compatible Smart TV, Android, iPhone",
    "Support IPTV 24/7 WhatsApp",
  ];

  return (
    <section id="pricing" style={{ padding: '100px 20px', background: 'linear-gradient(180deg, var(--bg-dark) 0%, #0d1030 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '900', marginBottom: '15px' }}>
            NOS <span style={{ color: 'var(--secondary)' }}>OFFRES</span> D'ABONNEMENT
          </h2>
          <p style={{ color: 'var(--text-gray)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
            Choisissez l'abonnement qui vous convient le mieux
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px',
          alignItems: 'stretch'
        }}>
          {plans.map((plan, idx) => {
            const isPop = plan.popular;
            return (
              <div 
                key={idx} 
                style={{
                  background: isPop
                    ? 'linear-gradient(135deg, #0066FF 0%, #0044CC 100%)'
                    : 'linear-gradient(180deg, #e8f0fe 0%, #d4e4fc 100%)',
                  padding: isPop ? '3px' : '0',
                  borderRadius: '20px',
                  position: 'relative',
                  transform: isPop ? 'scale(1.04)' : 'none',
                  zIndex: isPop ? 2 : 1,
                  boxShadow: isPop
                    ? '0 20px 60px rgba(0, 102, 255, 0.4)'
                    : '0 8px 30px rgba(0,0,0,0.15)',
                }}
              >
                {/* Popular ribbon */}
                {isPop && (
                  <div style={{
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    width: '90px',
                    height: '90px',
                    overflow: 'hidden',
                    borderRadius: '0 20px 0 0',
                    zIndex: 3,
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '18px',
                      right: '-28px',
                      width: '140px',
                      textAlign: 'center',
                      transform: 'rotate(45deg)',
                      background: '#e53e3e',
                      color: '#fff',
                      fontSize: '10px',
                      fontWeight: '800',
                      padding: '5px 0',
                      letterSpacing: '0.5px',
                      boxShadow: '0 2px 8px rgba(229, 62, 62, 0.4)',
                    }}>
                      POPULAIRE
                    </div>
                  </div>
                )}

                <div style={{
                  background: isPop
                    ? 'linear-gradient(135deg, #0066FF 0%, #003FBF 100%)'
                    : '#fff',
                  borderRadius: isPop ? '18px' : '20px',
                  padding: '35px 25px 30px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  color: isPop ? '#fff' : '#1a202c',
                }}>
                  {/* Title */}
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: '800',
                    marginBottom: '20px',
                    textTransform: 'none',
                    letterSpacing: '0',
                    color: isPop ? '#fff' : '#1e3a5f',
                  }}>
                    Abonnement IPTV 4K – {plan.duration}
                  </h3>

                  {/* Price */}
                  <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '2px', whiteSpace: 'nowrap', flexWrap: 'nowrap' }}>
                    <span style={{
                      fontSize: 'clamp(32px, 3.5vw, 46px)',
                      fontWeight: '900',
                      lineHeight: 1,
                      color: isPop ? '#fff' : '#0047ff',
                    }}>
                      {plan.price}
                    </span>
                    <span style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: '900', color: isPop ? '#fff' : '#0047ff' }}>€</span>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: isPop ? 'rgba(255,255,255,0.7)' : '#718096',
                      marginLeft: '2px',
                    }}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p style={{
                    fontSize: '12px',
                    color: isPop ? 'rgba(255,255,255,0.7)' : '#718096',
                    marginBottom: '25px',
                    fontWeight: '500',
                    fontStyle: 'italic',
                  }}>
                    {plan.tagline}
                  </p>

                  {/* Divider */}
                  <div style={{
                    height: '1px',
                    background: isPop ? 'rgba(255,255,255,0.15)' : '#e2e8f0',
                    marginBottom: '20px',
                  }} />

                  {/* Features */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    marginBottom: '30px',
                    flex: 1,
                  }}>
                    {features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '5px',
                          background: isPop ? 'rgba(255,255,255,0.2)' : '#e8f4f8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Check size={12} color={isPop ? '#fff' : '#0047ff'} strokeWidth={3} />
                        </div>
                        <span style={{
                          fontSize: '13px',
                          lineHeight: '20px',
                          fontWeight: '600',
                          color: isPop ? 'rgba(255,255,255,0.9)' : '#2d3748',
                        }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/212688407392"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      background: isPop
                        ? '#fff'
                        : 'linear-gradient(135deg, #0066FF 0%, #0044CC 100%)',
                      color: isPop ? '#0047ff' : '#fff',
                      fontWeight: '800',
                      fontSize: '14px',
                      border: isPop ? 'none' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      boxShadow: isPop
                        ? '0 4px 15px rgba(255,255,255,0.3)'
                        : '0 4px 15px rgba(0, 102, 255, 0.3)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = isPop
                        ? '0 8px 25px rgba(255,255,255,0.4)'
                        : '0 8px 25px rgba(0, 102, 255, 0.5)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = isPop
                        ? '0 4px 15px rgba(255,255,255,0.3)'
                        : '0 4px 15px rgba(0, 102, 255, 0.3)';
                    }}
                  >
                    <ShoppingCart size={16} />
                    Acheter IPTV Maintenant
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          #pricing > div > div:last-of-type {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 600px) {
          #pricing > div > div:last-of-type {
            grid-template-columns: 1fr !important;
            max-width: 380px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
