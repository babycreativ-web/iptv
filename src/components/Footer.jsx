import Logo from './Logo';

const Footer = () => {
  const isEnglish = window.location.pathname.startsWith('/en');
  const isSpanish = window.location.pathname.startsWith('/es');
  const isGerman = window.location.pathname.startsWith('/de');

  const getFooterText = (en, es, de, fr) => {
    if (isEnglish) return en;
    if (isSpanish) return es;
    if (isGerman) return de;
    return fr;
  };

  return (
    <footer style={{ padding: '80px 0 40px', background: '#050614', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', marginBottom: '60px' }}>
          <div>
            <Logo className="mb-6" />
            <p style={{ color: 'var(--text-gray)', fontSize: '14px', marginTop: '20px' }}>
              {getFooterText(
                "The best premium IPTV service. Over 120,000 high-quality channels and VOD library.",
                "El mejor servicio IPTV premium. Más de 120.000 canales y biblioteca VOD de alta calidad.",
                "Der beste Premium-IPTV-Service. Über 120.000 hochqualitative Kanäle und VOD-Bibliothek.",
                "Le meilleur service IPTV en France. Plus de 120 000 chaînes et VOD de haute qualité."
              )}
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '25px' }}>{getFooterText('LEGAL', 'LEGAL', 'RECHTLICHES', 'LÉGAL')}</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-gray)', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>{getFooterText('Privacy Policy', 'Política de privacidad', 'Datenschutzbestimmungen', 'Politique de confidentialité')}</li>
              <li>{getFooterText('Terms of Service', 'Términos de servicio', 'Allgemeine Geschäftsbedingungen', 'Conditions générales de vente')}</li>
              <li>{getFooterText('Refund Policy', 'Política de reembolso', 'Rückerstattungsrichtlinie', 'Remboursement')}</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '25px' }}>{getFooterText('SECURE PAYMENT', 'PAGO SEGURO', 'SICHERE ZAHLUNG', 'PAIEMENT SÉCURISÉ')}</h4>
            <img src="https://4ksmartiptv.com/wp-content/uploads/2023/09/afe-checkout-badge.png-768x142.webp" alt="Payments" style={{ width: '100%', maxWidth: '250px' }} />
          </div>
        </div>
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', color: 'var(--text-gray)', fontSize: '12px' }}>
          &copy; 2026 4K SMART IPTV. {getFooterText('ALL RIGHTS RESERVED.', 'TODOS LOS DERECHOS RESERVADOS.', 'ALLE RECHTE VORBEHALTEN.', 'TOUS DROITS RÉSERVÉS.')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
