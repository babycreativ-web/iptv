import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '80px 0 40px', background: '#050614', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', marginBottom: '60px' }}>
          <div>
            <img src="https://4ksmartiptv.com/wp-content/uploads/2024/05/cropped-logo-4k-smart-iptv-1.png" alt="Logo" style={{ height: '50px', marginBottom: '25px' }} />
            <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>
              Le meilleur service IPTV en France. Plus de 120 000 chaînes et VOD de haute qualité.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '25px' }}>LÉGAL</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-gray)', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Politique de confidentialité</li>
              <li>Conditions générales de vente</li>
              <li>Remboursement</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '25px' }}>TRUSTED BY THOUSANDS</h4>
            <img src="https://4ksmartiptv.com/wp-content/uploads/2023/06/Trustpilot-2048x340-1-768x128.png" alt="Trustpilot" style={{ width: '100%', maxWidth: '220px' }} />
            <img src="https://4ksmartiptv.com/wp-content/uploads/2023/09/afe-checkout-badge.png-768x142.webp" alt="Payments" style={{ width: '100%', maxWidth: '250px', marginTop: '20px' }} />
          </div>
        </div>
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', color: 'var(--text-gray)', fontSize: '12px' }}>
          &copy; 2026 4K SMART IPTV. TOUS DROITS RÉSERVÉS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
