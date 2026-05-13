import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img 
        src="https://cdn-ilelamg.nitrocdn.com/hBgIufmzBLKnLVRnKfaGsxIFVPGsFzfg/assets/images/optimized/rev-0733712/4ksmartiptv.com/wp-content/uploads/2024/05/cropped-logo-4k-smart-iptv-1.png" 
        alt="4K SMART IPTV" 
        style={{ height: '50px', width: 'auto' }} 
      />
    </div>
  );
};

export default Logo;
