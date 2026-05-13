import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '10px 0' : '20px 0',
      background: scrolled ? 'var(--glass-header)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: '0.4s',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />
        
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <div className="hidden md-flex" style={{ display: 'flex', gap: '25px', fontWeight: '800', fontSize: '13px' }}>
            <a href="#">ACCUEIL</a>
            <a href="#pricing">NOS ABONNEMENTS</a>
            <a href="#">CONTACT</a>
            <a href="#">BLOG</a>
            <a href="#faq">FAQ</a>
          </div>

          <a href="https://wa.me/212688407392" className="btn-primary" style={{ padding: '12px 25px', fontSize: '12px' }}>
            COMMANDER <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
