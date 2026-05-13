import React from 'react';

const FeaturesMarquee = () => {
  const logos = [
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item21-150x46-1-1.webp', // Ziggo Sport
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item13-150x46-1-1.webp', // Disney+
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item18-150x46-1-1.webp', // F1
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item06-150x46-1-1.webp', // HBO
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item15-150x46-1-1.webp', // NLZIET
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item08-150x46-1-1.webp', // Hulu
    'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/04/brand_item16-150x46-1-1.webp', // Prime Video
  ];

  return (
    <section style={{ padding: '40px 0', background: 'var(--bg-dark)' }}>
      <div className="marquee-container">
        <div className="marquee-content" style={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
          {logos.concat(logos).map((logo, idx) => (
            <img key={idx} src={logo} alt="Partner" style={{ height: '40px', width: 'auto' }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesMarquee;
