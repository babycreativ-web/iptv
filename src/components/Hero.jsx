import { MessageSquare, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  const isEnglish = window.location.pathname.startsWith('/en');
  const isSpanish = window.location.pathname.startsWith('/es');

  const getHeroText = () => {
    if (isEnglish) {
      return {
        badge: '#1 PREMIUM IPTV QUALITY',
        title: (
          <>
            PREMIUM 4K <br />
            <span style={{ color: 'var(--secondary)' }}>IPTV</span> SUBSCRIPTION
          </>
        ),
        desc: 'Over 120,000 International Channels & 60,000 VOD in 4K/UHD. 100% Guaranteed Stability with our Anti-Freeze technology.',
        btn: 'ORDER VIA WHATSAPP',
        payment: 'SECURE PAYMENT',
        activation: 'FAST ACTIVATION',
        imgSrc: '/usa_iptv_showcase.png',
        imgAlt: 'Premium 4K IPTV USA Subscription - Over 120,000 Channels & VOD'
      };
    }
    if (isSpanish) {
      return {
        badge: 'CALIDAD IPTV PREMIUM #1',
        title: (
          <>
            SUSCRIPCIÓN <br />
            <span style={{ color: 'var(--secondary)' }}>IPTV 4K</span> PREMIUM
          </>
        ),
        desc: 'Más de 120.000 canales internacionales y 60.000 VOD en 4K/UHD. Estabilidad 100% garantizada con tecnología Anti-Freeze.',
        btn: 'COMPRAR POR WHATSAPP',
        payment: 'PAGO SEGURO',
        activation: 'ACTIVACIÓN RÁPIDA',
        imgSrc: '/spain_iptv_showcase.png',
        imgAlt: 'Suscripción IPTV 4K Premium España - Más de 120.000 canales y VOD'
      };
    }
    return {
      badge: 'MEILLEURE QUALITÉ IPTV #1',
      title: (
        <>
          ABONNEMENT <br />
          <span style={{ color: 'var(--secondary)' }}>PREMIUM</span> IPTV 4K
        </>
      ),
      desc: 'Plus de 120,000 Chaînes Internationales & 60,000 VOD en 4K/UHD. Une stabilité garantie à 100% avec notre technologie Anti-Freeze.',
      btn: 'COMMANDER VIA WHATSAPP',
      payment: 'PAIEMENT SÉCURISÉ',
      activation: 'ACTIVATION RAPIDE',
      imgSrc: 'https://4ksmartiptv.com/wp-content/uploads/2025/09/Abonnement-France-IPTV-768x768.png',
      imgAlt: 'Abonnement IPTV 4K Premium France - Plus de 120 000 chaînes et VOD'
    };
  };

  const t = getHeroText();

  return (
    <section className="hero-section">
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 71, 255, 0.15) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          
          <div>
            <span style={{ 
              color: 'var(--secondary)', 
              fontWeight: '900', 
              fontSize: '14px', 
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '15px' 
            }}>{t.badge}</span>
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
              fontWeight: '900', 
              lineHeight: '1.1', 
              marginBottom: '30px' 
            }}>
              {t.title}
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', marginBottom: '40px', maxWidth: '550px' }}>
              {t.desc}
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="https://wa.me/212688407392" className="btn-primary" style={{ padding: '22px 50px' }}>
                <MessageSquare size={24} fill="#000" />
                {t.btn}
              </a>
            </div>

            <div style={{ display: 'flex', gap: '40px', marginTop: '60px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={24} color="var(--primary)" />
                <span style={{ fontSize: '13px', fontWeight: '800' }}>{t.payment}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap size={24} color="var(--primary)" />
                <span style={{ fontSize: '13px', fontWeight: '800' }}>{t.activation}</span>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img 
              src={t.imgSrc} 
              alt={t.imgAlt} 
              style={{ 
                width: '120%', 
                maxWidth: '850px', 
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))',
                animation: 'float 6s ease-in-out infinite',
                marginLeft: '-50px',
                borderRadius: (isEnglish || isSpanish) ? '24px' : '0px'
              }} 
            />
            {/* CSS Animation for floating */}
            <style>
              {`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
              `}
            </style>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
