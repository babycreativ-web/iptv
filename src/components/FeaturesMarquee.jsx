import React from 'react';

const FeaturesMarquee = () => {
  const logos = [
    'https://4ksmartiptv.com/wp-content/uploads/2023/06/NFL.png',
    'https://4ksmartiptv.com/wp-content/uploads/2023/06/NBA.png',
    'https://4ksmartiptv.com/wp-content/uploads/2023/04/tv.png',
    'https://4ksmartiptv.com/wp-content/uploads/2023/04/laptop.png',
    // Repeated for marquee
    'https://4ksmartiptv.com/wp-content/uploads/2023/06/NFL.png',
    'https://4ksmartiptv.com/wp-content/uploads/2023/06/NBA.png',
    'https://4ksmartiptv.com/wp-content/uploads/2023/04/tv.png',
    'https://4ksmartiptv.com/wp-content/uploads/2023/04/laptop.png',
  ];

  return (
    <section style={{ padding: '60px 0', background: 'rgba(255,255,255,0.02)', borderY: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo} alt="Partner" style={{ height: '50px', margin: '0 60px', opacity: 0.6, filter: 'grayscale(1) invert(1)' }} />
          ))}
          {logos.map((logo, idx) => (
            <img key={`dup-${idx}`} src={logo} alt="Partner" style={{ height: '50px', margin: '0 60px', opacity: 0.6, filter: 'grayscale(1) invert(1)' }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesMarquee;
