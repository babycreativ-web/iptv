import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Globe, Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    navigate(`/${lng}${window.location.hash}`, { replace: true });
  };

  const navLinks = [
    { name: 'ACCUEIL', href: '#' },
    { name: 'NOS ABONNEMENTS', href: '#pricing' },
    { name: 'SUPPORT', href: 'https://wa.me/212688407392' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-100 transition-all duration-500 ${isScrolled ? 'glass shadow-2xl' : 'bg-transparent'}`}
      style={{ 
        padding: isScrolled ? '15px 0' : '25px 0',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />

        <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
          <div className="hidden md-flex" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                style={{ 
                  fontWeight: '800', 
                  fontSize: '13px', 
                  letterSpacing: '1px',
                  color: isScrolled ? '#fff' : '#fff' 
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '50px' }}>
            <Globe size={14} color="var(--primary)" />
            <select 
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              style={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '900'
              }}
            >
              <option value="en" style={{ background: '#0a0b1e' }}>EN</option>
              <option value="fr" style={{ background: '#0a0b1e' }}>FR</option>
              <option value="es" style={{ background: '#0a0b1e' }}>ES</option>
            </select>
          </div>

          <a 
            href="https://wa.me/212688407392" 
            style={{ 
              padding: '12px 25px', 
              fontSize: '13px', 
              fontWeight: '900',
              background: 'var(--primary)',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            S'ABONNER <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
