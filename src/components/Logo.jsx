import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{
        position: 'relative',
        width: '40px',
        height: '40px',
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)'
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
        <span style={{ fontSize: '20px', fontWeight: '900', letterSpacing: '1px', color: 'white' }}>1ST IPTV</span>
        <span style={{ fontSize: '12px', fontWeight: '600', color: '#f43f5e', letterSpacing: '2px' }}>ULTRA 4K</span>
      </div>
    </div>
  );
};

export default Logo;
