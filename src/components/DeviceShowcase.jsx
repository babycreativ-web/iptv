import React from 'react';

const DeviceShowcase = () => {
  const highlights = [
    {
      title: "Great Pricing",
      desc: "Save significantly compared to traditional cable prices with our affordable IPTV plans!",
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_39.webp"
    },
    {
      title: "Premium Channels",
      desc: "Enjoy Live Sports, PPV, 24/7 Channels & more at no additional cost!",
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_42.webp"
    },
    {
      title: "High-Quality Streaming",
      desc: "Enjoy HD and 8K streaming for a superior viewing experience with minimal buffering and lag.",
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_47-1.webp"
    },
    {
      title: "Newest Content",
      desc: "We frequently update our servers, adding the newest Channels, Movies & Shows!",
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
              style={{ width: '100%', maxWidth: '700px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }} 
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
