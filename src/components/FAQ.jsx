import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
  ];

  return (
    <section id="faq" style={{ padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '60px' }}>
          {t('faq.title')}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass" style={{ overflow: 'hidden' }}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                style={{
                  width: '100%',
                  padding: '24px 30px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  textAlign: 'left',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '18px'
                }}
              >
                {faq.q}
                {openIdx === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {openIdx === idx && (
                <div style={{ padding: '0 30px 24px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
