import React from 'react';

const VODShowcase = () => {
  const posters = [
    { title: "Avengers: Doomsday", url: "https://image.tmdb.org/t/p/original/s2Fkuq0tj7mjAHEdbfQkFkdbeRI.jpg" },
    { title: "Spider-Man 4", url: "https://image.tmdb.org/t/p/original/pspkSVP39NGa6G2rvK5KlMjvYUe.jpg" },
    { title: "Dune: Part Three", url: "https://image.tmdb.org/t/p/original/tBd6HvOokSFoKShLLN42RxOHuLU.jpg" },
    { title: "Gladiator II", url: "https://image.tmdb.org/t/p/original/r4bIQrxPpELjar0C4CPopgowAdO.jpg" },
    { title: "Wicked", url: "https://image.tmdb.org/t/p/original/r48wrB5wT9Q9x7KBbBqw9m7KkZP.jpg" },
    { title: "Mufasa", url: "https://image.tmdb.org/t/p/original/biqvyG79vNWoYsrLE0dvZdvlROf.jpg" }
  ];

  // Double the posters for seamless marquee
  const displayPosters = [...posters, ...posters];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-dark)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '15px' }}>DERNIERS FILMS & SÉRIES 2026</h2>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem' }}>
          Profitez d'une bibliothèque illimitée avec des sorties quotidiennes.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%' }}>
        {/* Gradient overlays for smooth fading at edges */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '150px',
          height: '100%',
          background: 'linear-gradient(to right, var(--bg-dark), transparent)',
          zIndex: 2
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '150px',
          height: '100%',
          background: 'linear-gradient(to left, var(--bg-dark), transparent)',
          zIndex: 2
        }} />

        <div className="marquee-container" style={{ width: '100%' }}>
          <div className="marquee-content-movies" style={{ display: 'flex', gap: '40px', animation: 'movieScroll 50s linear infinite' }}>
            {displayPosters.map((poster, idx) => (
              <div key={idx} style={{ 
                flex: '0 0 auto',
                width: '400px', 
                height: '600px', 
                borderRadius: '30px', 
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                position: 'relative'
              }}>
                <img 
                  src={poster.url} 
                  alt={poster.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '35px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                  textAlign: 'left'
                }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#fff' }}>{poster.title}</h3>
                  <span style={{ fontSize: '14px', color: 'var(--secondary)', fontWeight: 'bold' }}>FULL HD / 4K</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
            @keyframes movieScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-440px * 6)); } /* 400px width + 40px gap */
            }
            .marquee-container:hover .marquee-content-movies {
              animation-play-state: paused;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default VODShowcase;
