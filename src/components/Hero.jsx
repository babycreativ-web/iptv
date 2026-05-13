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
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 71, 255, 0.15) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 0.8fr', 
          gap: '40px', 
          alignItems: 'center' 
        }}>
          
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
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
              fontWeight: '900', 
              lineHeight: '1.1', 
              marginBottom: '30px' 
            }}>
              ABONNEMENT <br />
              <span style={{ color: 'var(--secondary)' }}>PREMIUM</span> IPTV 4K
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', marginBottom: '40px', maxWidth: '550px' }}>
              Plus de 120,000 Chaînes Internationales & 60,000 VOD en 4K/UHD. 
              Une stabilité garantie à 100% avec notre technologie Anti-Freeze.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="https://wa.me/212688407392" className="btn-primary" style={{ padding: '22px 50px' }}>
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

          <div style={{ position: 'relative' }}>
            <img 
              src="https://4ksmartiptv.com/wp-content/uploads/2025/09/Abonnement-France-IPTV-768x768.png" 
              alt="IPTV Showcase" 
              style={{ 
                width: '100%', 
                maxWidth: '650px', 
                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))',
                animation: 'float 6s ease-in-out infinite'
              }} 
            />
            {/* CSS Animation for floating */}
            <style>
              {`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
              `}
            </style>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
