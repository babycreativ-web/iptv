
/* Inline SVG logos — no network requests, zero lag */
const logos = [
  { name: 'Netflix', svg: <svg viewBox="0 0 24 24" fill="#E50914" width="40" height="40"><path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 1.295.09 2.56.17 3.848.262V.012h-3.63v15.036L5.398 0zm6.074 0v23.394c1.2.07 2.397.15 3.598.23V.012H11.47zm-6.074 0v23.7c1.193.076 2.388.16 3.586.248V.012z"/></svg> },
  { name: 'YouTube', svg: <svg viewBox="0 0 24 24" fill="#FF0000" width="40" height="40"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { name: 'HBO', svg: <svg viewBox="0 0 24 24" fill="#fff" width="44" height="44"><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="11" letterSpacing="1">HBO</text></svg> },
  { name: 'Apple TV', svg: <svg viewBox="0 0 24 24" fill="#fff" width="40" height="40"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg> },
  { name: 'Disney+', svg: <svg viewBox="0 0 100 40" fill="#fff" width="70" height="28"><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="16">Disney+</text></svg> },
  { name: 'Prime', svg: <svg viewBox="0 0 100 40" fill="#00A8E1" width="70" height="28"><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="14">prime</text></svg> },
  { name: 'Paramount+', svg: <svg viewBox="0 0 24 24" fill="#fff" width="36" height="36"><path d="M12 1.5L2.4 22.5h3.24l1.8-4.02h9.12l1.8 4.02h3.24L12 1.5zm0 5.76l3.24 7.26H8.76L12 7.26z"/></svg> },
];

const FeaturesMarquee = () => {
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section style={{ padding: '35px 0', background: 'rgba(10, 11, 30, 0.6)', overflow: 'hidden', position: 'relative' }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, rgba(10,11,30,1), transparent)', zIndex: 2 }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, rgba(10,11,30,1), transparent)', zIndex: 2 }} />

      <div className="marquee-container" style={{ width: '100%' }}>
        <div className="marquee-track" style={{
          display: 'flex',
          gap: '60px',
          alignItems: 'center',
          animation: 'logoMarquee 25s linear infinite',
          width: 'max-content',
        }}>
          {allLogos.map((logo, idx) => (
            <div
              key={idx}
              style={{
                flex: '0 0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.65,
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.65'}
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default FeaturesMarquee;
