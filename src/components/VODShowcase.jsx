import React from 'react';
import { motion } from 'framer-motion';

const VODShowcase = () => {
  const brands = [
    'Netflix', 'Disney+', 'HBO Max', 'Prime Video', 'Bein Sports', 'Sky Sports', 'Canal+', 'Hulu'
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
              opacity: 0.5,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              {/* Simplified brand representations */}
              <span style={{ 
                background: brand === 'Netflix' ? '#e50914' : 
                            brand === 'Disney+' ? '#0063e5' : 
                            brand === 'Prime Video' ? '#00a8e1' : 
                            brand === 'Bein Sports' ? '#7e10b2' : 'transparent',
                width: '12px',
                height: '12px',
                borderRadius: '50%'
              }} />
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VODShowcase;
