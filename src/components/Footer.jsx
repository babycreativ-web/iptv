import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ padding: '80px 0 40px', borderTop: '1px solid var(--border)', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '60px',
          marginBottom: '60px'
        }}>
          <div>
            <Logo className="mb-6" />
            <p style={{ color: 'var(--text-muted)', marginTop: '20px', fontSize: '14px', lineHeight: '1.6' }}>
              The most reliable IPTV provider in the market. Serving premium content to thousands of happy customers worldwide.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{t('nav.home')}</a></li>
              <li><a href="#pricing" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{t('nav.pricing')}</a></li>
              <li><a href="#features" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{t('nav.features')}</a></li>
              <li><a href="#faq" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{t('nav.faq')}</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px' }}>Support</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '14px' }}>
                <Mail size={18} />
                <span>support@1stiptv4k.com</span>
              </div>
              <a 
                href="https://wa.me/212688407392"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--success)', fontSize: '14px', fontWeight: 'bold' }}
              >
                <MessageCircle size={18} />
                <span>+212 688-407392</span>
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px' }}>Payment Methods</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {/* Using stylized blocks for payment icons if assets aren't available */}
              <div style={{ background: 'white', padding: '4px 8px', borderRadius: '4px', height: '24px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#003087', fontWeight: 'bold', fontSize: '10px' }}>PayPal</span>
              </div>
              <div style={{ background: 'white', padding: '4px 8px', borderRadius: '4px', height: '24px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#eb001b', fontWeight: 'bold', fontSize: '10px' }}>Mastercard</span>
              </div>
              <div style={{ background: 'white', padding: '4px 8px', borderRadius: '4px', height: '24px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#1a1f71', fontWeight: 'bold', fontSize: '10px' }}>VISA</span>
              </div>
              <div style={{ background: 'white', padding: '4px 8px', borderRadius: '4px', height: '24px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f7931a', fontWeight: 'bold', fontSize: '10px' }}>Bitcoin</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid var(--border)', 
          paddingTop: '40px', 
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '12px'
        }}>
          &copy; {new Date().getFullYear()} 1ST IPTV ULTRA 4K. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
