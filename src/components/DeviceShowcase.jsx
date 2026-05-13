import React from 'react';

const DeviceShowcase = () => {
  const highlights = [
    {
      title: "Tarifs avantageux",
      desc: "Économisez considérablement par rapport aux prix du câble traditionnel avec nos forfaits IPTV abordables !",
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_39.webp"
    },
    {
      title: "Chaînes Premium",
      desc: "Profitez des sports en direct, du PPV, des chaînes 24h/24 et 7j/7 et plus encore sans frais supplémentaires !",
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_42.webp"
    },
    {
      title: "Streaming de haute qualité",
      desc: "Profitez d'un streaming HD et 8K pour une expérience visuelle supérieure avec un minimum de mise en mémoire tampon.",
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_47-1.webp"
    },
    {
      title: "Nouveau contenu",
      desc: "Nous mettons fréquemment à jour nos serveurs, en ajoutant les dernières chaînes, films et émissions !",
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_44.webp"
    }
  ];

  return (
    <section style={{ 
      padding: '100px 0', 
      background: 'radial-gradient(circle at center, #0a0b2e 0%, #050614 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Red Glow Overlays */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #800020, transparent)',
        boxShadow: '0 0 50px 10px rgba(128, 0, 32, 0.4)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #800020, transparent)',
        boxShadow: '0 0 50px 10px rgba(128, 0, 32, 0.4)'
      }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <div style={{ textAlign: 'center' }}>
            <img 
              src="https://firstiptv-4k.com/wp-content/uploads/2024/10/TVIP.webp" 
              alt="TV Interface" 
              style={{ width: '100%', maxWidth: '750px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {highlights.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                <div style={{ flex: '0 0 auto' }}>
                  <img src={item.icon} alt={item.title} style={{ width: '60px', height: 'auto' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', color: '#fff' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-gray)', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
