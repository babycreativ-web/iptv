import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Zap, Activity, LayoutGrid } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    { 
      title: t('features.f1_title'), 
      desc: t('features.f1_desc'), 
      icon: <Activity size={32} /> 
    },
    { 
      title: t('features.f2_title'), 
      desc: t('features.f2_desc'), 
      icon: <Zap size={32} /> 
    },
    { 
      title: t('features.f3_title'), 
      desc: t('features.f3_desc'), 
      icon: <ShieldCheck size={32} /> 
    },
    { 
      title: t('features.f4_title'), 
      desc: t('features.f4_desc'), 
      icon: <LayoutGrid size={32} /> 
    },
  ];

  return (
    <section id="features" style={{ padding: '100px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '60px' }}>{t('features.title')}</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '40px' 
        }}>
          {features.map((feat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px',
                background: 'rgba(99, 102, 241, 0.1)',
                color: 'var(--primary)',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}>
                {feat.icon}
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>{feat.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
