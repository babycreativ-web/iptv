import React from 'react';

const VODShowcase = () => {
  const posters = [
    { title: "Mufasa Le Roi Lion", url: "https://4ksmartiptv.com/wp-content/uploads/2025/03/mufasa_le_roi_lion.avif" },
    { title: "Sonic 3", url: "https://4ksmartiptv.com/wp-content/uploads/2025/03/sonic_3_le_film.avif" },
    { title: "Wicked", url: "https://4ksmartiptv.com/wp-content/uploads/2025/03/wicked.avif" },
    { title: "Gladiator II", url: "https://4ksmartiptv.com/wp-content/uploads/2025/03/gladiator_ii.avif" },
    { title: "Jamais Sans Mon Psy", url: "https://4ksmartiptv.com/wp-content/uploads/2025/03/jamais_sans_mon_psy.avif" }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-dark)', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '15px' }}>MEILLEUR ABONNEMENT SMART IPTV 4K FRANCE</h2>
        <p style={{ color: 'var(--text-gray)', marginBottom: '50px', fontSize: '1.1rem' }}>
          Nous avons une grande bibliothèque des derniers films et séries télévisées, ainsi que des chaînes premium.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {posters.map((poster, idx) => (
            <div key={idx} style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden' }}>
              <img 
                src={poster.url} 
                alt={poster.title} 
                style={{ width: '100%', height: 'auto', display: 'block', transition: '0.3s' }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VODShowcase;
