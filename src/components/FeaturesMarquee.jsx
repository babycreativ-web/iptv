import React from 'react';

const FeaturesMarquee = () => {
  const logos = [
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item21-150x46-1-1.webp',
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item13-150x46-1-1.webp',
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item18-150x46-1-1.webp',
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item06-150x46-1-1.webp',
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item15-150x46-1-1.webp',
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item08-150x46-1-1.webp',
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item16-150x46-1-1.webp',
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
