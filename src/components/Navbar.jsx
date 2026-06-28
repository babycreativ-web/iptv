import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Logo />
        
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {/* Desktop Links */}
          <div className="nav-links-desktop">
            <a href="#">ACCUEIL</a>
            <a href="#pricing">NOS ABONNEMENTS</a>
            <a href="#tutorial">TUTORIEL</a>
            <a href="#faq">FAQ</a>
            <a href="https://wa.me/212688407392" target="_blank" rel="noopener noreferrer">CONTACT</a>
          </div>

          <a href="https://wa.me/212688407392" target="_blank" rel="noopener noreferrer" className="btn-primary nav-cta" style={{ padding: '12px 25px', fontSize: '12px' }}>
            COMMANDER <ArrowRight size={16} />
          </a>

          {/* Hamburger Icon */}
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: '#fff' }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Links */}
      <div className={`nav-links-mobile ${menuOpen ? 'open' : ''}`}>
        <a href="#" onClick={() => setMenuOpen(false)}>ACCUEIL</a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>NOS ABONNEMENTS</a>
        <a href="#tutorial" onClick={() => setMenuOpen(false)}>TUTORIEL</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href="https://wa.me/212688407392" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
