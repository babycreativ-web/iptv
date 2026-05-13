import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    navigate(`/${lng}${window.location.hash}`, { replace: true });
  };

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass' : 'bg-transparent'}`}
      style={{ 
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        borderBottom: isScrolled ? '1px solid var(--border)' : 'none'
      }}
    >
      <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md-flex gap-8 items-center" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontWeight: '500', fontSize: '15px' }}>{link.name}</a>
          ))}
          
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: '20px' }}>
            <Globe size={18} color="var(--text-muted)" />
            <select 
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              style={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              <option value="en" style={{ background: '#1e293b' }}>EN</option>
              <option value="fr" style={{ background: '#1e293b' }}>FR</option>
              <option value="es" style={{ background: '#1e293b' }}>ES</option>
            </select>
          </div>

          <a 
            href="https://wa.me/212688407392" 
            className="glass"
            style={{ 
              padding: '10px 20px', 
              fontSize: '14px', 
              fontWeight: '700',
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              border: 'none'
            }}
          >
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile Toggle would go here in a real app */}
      </div>
    </nav>
  );
};

export default Navbar;
