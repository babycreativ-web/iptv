import React from 'react';

const Features = () => {
  const cards = [
    {
      title: "4k France iptv",
      desc: "Notre réseau de serveurs performants assure une meilleure qualité de diffusion de vos contenus.",
      icon: "https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/FilmStrip.png"
    },
    {
      title: "Meilleur abonnement 4K france iptv",
      desc: "Abonnement iptv smarters , l'abonnement agence iptv le plus Complet !",
      icon: "https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/HandCoins.png"
    },
    {
      title: "COMPATIBLE TOUS APPAREILS",
      desc: "Notre service est compatible avec tous les appareils : Smart TV, les appareils Android et iOS, MAG, et …",
      icon: "https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/FlagBanner.png"
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {cards.map((card, idx) => (
            <div key={idx} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '40px 30px',
              textAlign: 'center'
            }}>
              <img src={card.icon} alt="Icon" style={{ width: '64px', marginBottom: '25px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '14px', lineHeight: '1.6' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
