import React from 'react';

const VODShowcase = () => {
  const posters = [
    { title: "Avengers: Doomsday", url: "http://www.impawards.com/2026/posters/avengers_doomsday_xlg.jpg" },
    { title: "Spider-Man 4", url: "http://www.impawards.com/2026/posters/spider_man_brand_new_day_xlg.jpg" },
    { title: "Dune: Part Three", url: "http://www.impawards.com/2026/posters/dune_part_three_xlg.jpg" },
    { title: "Toy Story 5", url: "http://www.impawards.com/2026/posters/toy_story_five_xlg.jpg" },
    { title: "The Mandalorian & Grogu", url: "http://www.impawards.com/2026/posters/star_wars_the_mandalorian_and_grogu_xlg.jpg" },
    { title: "The Batman Part II", url: "http://www.impawards.com/2026/posters/the_batman_part_two_xlg.jpg" }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-dark)', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '15px' }}>PROCHAINEMENT EN 2026</h2>
        <p style={{ color: 'var(--text-gray)', marginBottom: '60px', fontSize: '1.2rem' }}>
          Découvrez en exclusivité les plus grands blockbusters de 2026 sur notre plateforme IPTV Premium.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '30px',
          justifyContent: 'center'
        }}>
          {posters.map((poster, idx) => (
            <div key={idx} style={{ 
              position: 'relative', 
              borderRadius: '20px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              transition: '0.4s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 71, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
            }}
            >
              <img 
                src={poster.url} 
                alt={poster.title} 
                style={{ 
                  width: '100%', 
                  height: '420px', 
                  objectFit: 'cover',
                  display: 'block'
                }} 
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px',
                background: 'linear-gradient(to top, rgba(10,11,30,1), transparent)',
                textAlign: 'left'
              }}>
                <span style={{ fontSize: '14px', fontWeight: '900', color: 'var(--secondary)' }}>SORTIE 2026</span>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginTop: '5px' }}>{poster.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VODShowcase;
