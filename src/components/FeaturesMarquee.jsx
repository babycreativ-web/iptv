import React from 'react';

const FeaturesMarquee = () => {
  const logos = [
    'https://cdn.simpleicons.org/netflix/ffffff',
    'https://cdn.simpleicons.org/primevideo/ffffff',
    'https://cdn.simpleicons.org/disneyplus/ffffff',
    'https://cdn.simpleicons.org/hbo/ffffff',
    'https://cdn.simpleicons.org/hulu/ffffff',
    'https://cdn.simpleicons.org/appletv/ffffff',
    'https://cdn.simpleicons.org/youtube/ffffff',
  ];

  return (
    <section style={{ padding: '40px 0', background: 'rgba(10, 11, 30, 0.5)', overflow: 'hidden' }}>
      <div className="marquee-container" style={{ width: '100%' }}>
        <div className="marquee-content-logos" style={{ display: 'flex', gap: '80px', alignItems: 'center', animation: 'logoScroll 30s linear infinite' }}>
          {logos.concat(logos).concat(logos).map((logo, idx) => (
            <img key={idx} src={logo} alt="Partner" style={{ height: '35px', filter: 'brightness(1.5)', flex: '0 0 auto' }} />
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes logoScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-230px * 7)); } /* Approx image width + gap */
          }
        `}
      </style>
    </section>
  );
};

export default FeaturesMarquee;
