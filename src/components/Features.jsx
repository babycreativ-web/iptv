import { Tv, Crown, MonitorSmartphone } from 'lucide-react';

const Features = () => {
  const isEnglish = window.location.pathname.startsWith('/en');
  const isSpanish = window.location.pathname.startsWith('/es');

  const getFeatureText = (en, es, fr) => {
    if (isEnglish) return en;
    if (isSpanish) return es;
    return fr;
  };

  const cards = [
    {
      title: getFeatureText("4K Premium IPTV", "4K España IPTV", "4K France IPTV"),
      desc: getFeatureText(
        "Our high-performance server network ensures maximum streaming quality for all your channels.",
        "Nuestra red de servidores de alto rendimiento garantiza la mejor calidad de transmisión para su contenido.",
        "Notre réseau de serveurs performants assure une meilleure qualité de diffusion de vos contenus."
      ),
      Icon: Tv,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: getFeatureText("Best 4K IPTV Sub", "Mejor Suscripción IPTV 4K", "Meilleur Abonnement 4K France IPTV"),
      desc: getFeatureText(
        "IPTV Smarters subscription, the most complete and stable premium plan on the market!",
        "¡Suscripción IPTV Smarters, el plan de agencia IPTV más completo y estable del mercado!",
        "Abonnement IPTV Smarters, l'abonnement agence IPTV le plus complet !"
      ),
      Icon: Crown,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: getFeatureText("All Devices Compatible", "Compatible Todos Dispositivos", "Compatible Tous Appareils"),
      desc: getFeatureText(
        "Our service works seamlessly on all devices: Smart TV, Android, iOS, Firestick, and MAG.",
        "Nuestro servicio es compatible con todos los dispositivos: Smart TV, Android, iOS, MAG y más.",
        "Notre service est compatible avec tous les appareils : Smart TV, Android, iOS, MAG, et plus encore."
      ),
      Icon: MonitorSmartphone,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '45px 30px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon container */}
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '18px',
                background: card.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px',
                boxShadow: `0 8px 25px ${card.gradient.includes('#667eea') ? 'rgba(102,126,234,0.35)' : card.gradient.includes('#f093fb') ? 'rgba(245,87,108,0.35)' : 'rgba(79,172,254,0.35)'}`,
              }}>
                <card.Icon size={32} color="#fff" strokeWidth={2} />
              </div>

              <h3 style={{
                fontSize: '18px',
                fontWeight: '800',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>{card.title}</h3>
              <p style={{
                color: 'var(--text-gray)',
                fontSize: '14px',
                lineHeight: '1.7',
              }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
