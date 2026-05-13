import React from 'react';
import { MessageSquare, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{ 
      paddingTop: '180px', 
      paddingBottom: '100px', 
      background: 'var(--bg-dark)',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          <div>
            <span style={{ 
              color: 'var(--secondary)', 
              fontWeight: '900', 
              fontSize: '14px', 
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '15px' 
            }}>MEILLEURE QUALITÉ IPTV #1</span>
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', 
              fontWeight: '900', 
              lineHeight: '1.1', 
              marginBottom: '30px' 
            }}>
              ABONNEMENT <br />
              <span style={{ color: 'var(--secondary)' }}>PREMIUM</span> IPTV 4K
            </h1>
            
            <p style={{ fontSize: '1.15rem', color: 'var(--text-gray)', marginBottom: '40px', maxWidth: '550px' }}>
              Plus de 120,000 Chaînes Internationales & 60,000 VOD en 4K/UHD. 
              Une stabilité garantie à 100% avec notre technologie Anti-Freeze.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="https://wa.me/212688407392" className="btn-primary">
                <MessageSquare size={24} fill="#000" />
                COMMANDER VIA WHATSAPP
              </a>
            </div>

            <div style={{ display: 'flex', gap: '40px', marginTop: '60px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={24} color="var(--primary)" />
                <span style={{ fontSize: '13px', fontWeight: '800' }}>PAIEMENT SÉCURISÉ</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap size={24} color="var(--primary)" />
                <span style={{ fontSize: '13px', fontWeight: '800' }}>ACTIVATION RAPIDE</span>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img 
              src="https://4ksmartiptv.com/wp-content/uploads/2025/09/Abonnement-France-IPTV-768x768.png" 
              alt="IPTV Showcase" 
              style={{ width: '100%', maxWidth: '650px', transform: 'scale(1.1)' }} 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
