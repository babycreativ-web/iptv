import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img 
        src={logoImg} 
        alt="IPTV Logo" 
        style={{ height: '55px', width: 'auto' }} 
      />
    </div>
  );
};

export default Logo;
