import React from 'react';
import { motion } from 'framer-motion';

const VODShowcase = () => {
  const brands = [
    { name: 'Netflix', color: '#e50914' },
    { name: 'Disney+', color: '#0063e5' },
    { name: 'NBA', img: 'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/06/NBA.png' },
    { name: 'Prime Video', color: '#00a8e1' },
    { name: 'NFL', img: 'https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2023/06/NFL.png' },
    { name: 'HBO Max', color: '#7e10b2' },
    { name: 'Sky Sports', color: '#00b0f0' },
  ];

  // Using a double array for seamless loop
  const displayBrands = [...brands, ...brands];

  return (
    <section style={{ padding: '60px 0', background: 'rgba(0,0,0,0.2)', borderY: '1px solid var(--border)' }}>
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ display: 'inline-flex', gap: '80px', alignItems: 'center' }}
        >
          {displayBrands.map((brand, idx) => (
            <div key={idx} style={{ 
              fontSize: '24px', 
              fontWeight: '900', 
              color: 'var(--text-muted)', 
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              {brand.img ? (
                <img src={brand.img} alt={brand.name} style={{ height: '40px', filter: 'grayscale(1) brightness(2)' }} />
              ) : (
                <span style={{ 
                  background: brand.color,
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%'
                }} />
              )}
              {brand.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VODShowcase;
