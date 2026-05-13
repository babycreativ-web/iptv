import React from 'react';

const AppCompatibility = () => {
  const apps = [
    { name: 'Smarters Pro', url: 'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/smart-tv-1.png' },
    { name: 'IBO Player', url: 'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/smart-tv-1.png' }, // Placeholder icons
    { name: 'Set IPTV', url: 'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/smart-tv-1.png' },
    { name: 'Net IPTV', url: 'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/smart-tv-1.png' },
    { name: 'Apple TV', url: 'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/smart-tv-1.png' },
    { name: 'Android TV', url: 'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/smart-tv-1.png' },
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <h3 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2rem', fontWeight: '800' }}>COMPATIBLE AVEC TOUTES LES APPLICATIONS</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
          gap: '30px', 
          justifyContent: 'center' 
        }}>
          {apps.map((app, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div className="glass" style={{ width: '100px', height: '100px', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={app.url} alt={app.name} style={{ width: '60px', height: 'auto' }} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-muted)' }}>{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppCompatibility;
