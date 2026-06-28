const DeviceShowcase = () => {
  const isEnglish = window.location.pathname.startsWith('/en');
  const isSpanish = window.location.pathname.startsWith('/es');
  const isGerman = window.location.pathname.startsWith('/de');

  const getShowcaseText = (en, es, de, fr) => {
    if (isEnglish) return en;
    if (isSpanish) return es;
    if (isGerman) return de;
    return fr;
  };

  const highlights = [
    {
      title: getShowcaseText("Affordable Pricing", "Precios asequibles", "Günstige Preise", "Tarifs avantageux"),
      desc: getShowcaseText(
        "Save significantly compared to traditional cable costs with our budget-friendly IPTV plans!",
        "¡Ahorre significativamente en comparación con el cable tradicional con nuestros planes IPTV económicos!",
        "Sparen Sie im Vergleich zu herkömmlichen Kabelgebühren erheblich mit unseren erschwinglichen IPTV-Paketen!",
        "Économisez considérablement par rapport aux prix du câble traditionnel avec nos forfaits IPTV abordables !"
      ),
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_39.webp"
    },
    {
      title: getShowcaseText("Premium Channels", "Canales Premium", "Premium-Kanäle", "Chaînes Premium"),
      desc: getShowcaseText(
        "Enjoy live sports, major PPV events, 24/7 channels, and much more at no extra fee!",
        "¡Disfrute de deportes en vivo, eventos PPV, canales 24/7 y mucho más sin costo adicional!",
        "Genießen Sie Live-Sport, PPV, 24/7-Kanäle und mehr ohne zusätzliche Gebühren!",
        "Profitez des sports en direct, du PPV, des chaînes 24h/24 et 7j/7 et plus encore sans frais supplémentaires !"
      ),
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_42.webp"
    },
    {
      title: getShowcaseText("High Quality Streaming", "Transmisión de alta calidad", "Streaming in hoher Qualität", "Streaming de haute qualité"),
      desc: getShowcaseText(
        "Stream in HD, Full HD, and 4K UHD for a superior viewing experience with minimal buffering.",
        "Disfrute de transmisión en HD, Full HD y 4K UHD para una experiencia visual superior con el mínimo buffering.",
        "Streamen Sie in HD, Full HD und 4K UHD für ein überragendes Seherlebnis bei minimaler Pufferung.",
        "Profitez d'un streaming HD et 8K pour une expérience visuelle supérieure avec un minimum de mise en mémoire tampon."
      ),
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_47-1.webp"
    },
    {
      title: getShowcaseText("Regularly Updated", "Contenido actualizado", "Regelmäßige Updates", "Nouveau contenu"),
      desc: getShowcaseText(
        "We frequently update our servers, adding the latest channels, movies, and hit shows!",
        "¡Actualizamos nuestros servidores con frecuencia, agregando los últimos canales, películas y series!",
        "Wir aktualisieren unsere Server häufig und fügen die neuesten Kanäle, Filme und Shows hinzu!",
        "Nous mettons fréquemment à jour nos serveurs, en ajoutant les dernières chaînes, films et émissions !"
      ),
      icon: "https://firstiptv-4k.com/wp-content/uploads/2024/10/image_44.webp"
    }
  ];

  return (
    <section style={{ 
      padding: '100px 0', 
      background: 'radial-gradient(circle at center, #0a0b2e 0%, #050614 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Red Glow Overlays */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #800020, transparent)',
        boxShadow: '0 0 50px 10px rgba(128, 0, 32, 0.4)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #800020, transparent)',
        boxShadow: '0 0 50px 10px rgba(128, 0, 32, 0.4)'
      }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <div style={{ textAlign: 'center' }}>
            <img 
              src="https://firstiptv-4k.com/wp-content/uploads/2024/10/TVIP.webp" 
              alt={getShowcaseText(
                "Premium IPTV Subscription compatible with Smart TV, Android Box, Firestick and Apple TV",
                "Suscripción IPTV Premium compatible con Smart TV, Box Android, Firestick y Apple TV",
                "Premium IPTV Abonnement kompatibel mit Smart TV, Android Box, Firestick und Apple TV",
                "Abonnement IPTV Premium compatible Smart TV, Box Android, Firestick et Apple TV"
              )} 
              style={{ width: '100%', maxWidth: '750px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {highlights.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                <div style={{ flex: '0 0 auto' }}>
                  <img src={item.icon} alt={item.title} style={{ width: '60px', height: 'auto' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', color: '#fff' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-gray)', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
