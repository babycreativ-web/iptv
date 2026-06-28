import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const isEnglish = window.location.pathname.startsWith('/en');
  const isSpanish = window.location.pathname.startsWith('/es');
  const isGerman = window.location.pathname.startsWith('/de');

  const getFAQText = (en, es, de, fr) => {
    if (isEnglish) return en;
    if (isSpanish) return es;
    if (isGerman) return de;
    return fr;
  };

  const faqs = isEnglish ? [
    {
      q: "What is IPTV and how does it work?",
      a: "IPTV (Internet Protocol Television) delivers live TV channels and video-on-demand (VOD) directly to your screen over your internet connection, bypassing the need for satellite dishes or traditional cables. All you need is an internet connection to start watching."
    },
    {
      q: "Which devices are compatible with your subscription?",
      a: "Our service works with all devices: Smart TVs (Samsung, LG, Sony, Philips), Android TV boxes (Xiaomi Mi Box, Nvidia Shield), Apple TV, Firestick, smartphones/tablettes (iOS, Android), PCs (Windows, macOS) and applications like IPTV Smarters Pro, IBO Player or XCIPTV."
    },
    {
      q: "What internet speed is recommended?",
      a: "To watch channels in HD with no buffering, a stable speed of 12 Mbps is advised. To enjoy full HD and 4K UHD content, we recommend a connection speed of 25 Mbps or higher (Fiber or 5G)."
    },
    {
      q: "How does activation work after purchase?",
      a: "Your activation is super fast. Once payment is validated, our technical team sets up your account in 15 to 30 minutes, sending your credentials (M3U playlist link, Xtream API codes) and installation guide via WhatsApp or email."
    },
    {
      q: "Do you offer a refund if I am not satisfied?",
      a: "Yes, we offer a satisfaction guarantee. If you run into any persistent technical issue or change your mind within the first 7 days, we will refund your purchase completely with no questions asked."
    },
    {
      q: "How can I pay for my subscription?",
      a: "We offer secure and encrypted payment gateways. You can pay securely with credit card (Visa, Mastercard), or use PayPal or Payoneer by contacting our WhatsApp support team directly."
    }
  ] : isSpanish ? [
    {
      q: "¿Qué es IPTV y cómo funciona?",
      a: "IPTV (Televisión por Protocolo de Internet) transmite canales de televisión en vivo y video bajo demanda (VOD) directamente a su pantalla a través de su conexión a Internet, eliminando la necesidad de antenas parabólicas o cables tradicionales. Todo lo que necesita es una conexión a Internet para comenzar a ver."
    },
    {
      q: "¿Qué dispositivos son compatibles con su suscripción?",
      a: "Nuestro servicio es compatible con todos los dispositivos: Smart TV (Samsung, LG, Sony, Philips), decodificadores Android TV (Xiaomi Mi Box, Nvidia Shield), Apple TV, Firestick, teléfonos inteligentes/tabletas (iOS, Android), computadoras (Windows, macOS) y aplicaciones como IPTV Smarters Pro, IBO Player o XCIPTV."
    },
    {
      q: "¿Qué velocidad de Internet se recomienda?",
      a: "Para ver canales en HD sin buffering, se aconseja una velocidad estable de 12 Mbps. Para disfrutar de contenido Full HD y 4K UHD, recomendamos una velocidad de conexión de 25 Mbps o superior (Fibra o 5G)."
    },
    {
      q: "¿Cómo funciona la activación tras la compra?",
      a: "La activación de su suscripción es ultrarrápida. Once validado el pago, nuestro equipo técnico configura su cuenta en 15 a 30 minutos y le envía las credenciales de acceso (enlace M3U, códigos Xtream API) y una guía de instalación a través de WhatsApp o correo electrónico."
    },
    {
      q: "¿Ofrecen reembolso si no estoy satisfecho?",
      a: "Sí, ofrecemos garantía de satisfacción. Si experimenta algún problema técnico persistente o cambia de opinión dentro de los primeros 7 días, le reembolsaremos su compra por completo sin preguntas."
    },
    {
      q: "¿Cómo puedo pagar mi suscripción?",
      a: "Ofrecemos pasarelas de pago seguras y encriptadas. Puede pagar de forma segura con tarjeta de crédito (Visa, Mastercard), o utilizar PayPal o Payoneer contactando directamente a nuestro equipo de soporte de WhatsApp."
    }
  ] : isGerman ? [
    {
      q: "Was ist IPTV und wie funktioniert es?",
      a: "IPTV (Internet Protocol Television) überträgt Live-TV-Kanäle und Video-on-Demand (VOD) über Ihre Internetverbindung direkt auf Ihren Bildschirm, ohne dass eine Satellitenschüssel oder herkömmliche Kabel erforderlich sind. Alles, was Sie brauchen, ist eine Internetverbindung, um loszulegen."
    },
    {
      q: "Welche Geräte sind mit Ihrem Abonnement kompatibel?",
      a: "Unser Service funktioniert auf allen Geräten: Smart TVs (Samsung, LG, Sony, Philips), Android-TV-Boxen (Xiaomi Mi Box, Nvidia Shield), Apple TV, Firestick, Smartphones/Tablets (iOS, Android), PCs (Windows, macOS) und Anwendungen wie IPTV Smarters Pro, IBO Player oder XCIPTV."
    },
    {
      q: "Welche Internetgeschwindigkeit wird empfohlen?",
      a: "Um Sender in HD ohne Pufferung anzusehen, wird eine stabile Geschwindigkeit von 12 Mbps empfohlen. Um Full-HD- und 4K-UHD-Inhalte in vollem Umfang genießen zu können, empfehlen wir eine Verbindung von 25 Mbps oder mehr (Glasfaser oder 5G)."
    },
    {
      q: "Wie funktioniert die Freischaltung nach dem Kauf?",
      a: "Die Aktivierung Ihres Abonnements erfolgt ultraschnell. Sobald Ihre Zahlung bestätigt ist, richtet unser technisches Team Ihren Account in 15 bis 30 Minuten ein und sendet Ihnen Ihre Zugangsdaten (M3U-Wiedergabelisten-Link, Xtream API-Codes) und eine Installationsanleitung per WhatsApp oder E-Mail."
    },
    {
      q: "Bieten Sie eine Rückerstattung an, wenn ich nicht zufrieden bin?",
      a: "Ja, wir bieten eine Zufriedenheitsgarantie. Wenn Sie auf ein dauerhaftes technisches Problem stoßen oder es sich in den ersten 7 Tagen anders überlegen, erstatten wir Ihnen den Kaufpreis vollständig zurück."
    },
    {
      q: "Wie kann ich mein Abonnement bezahlen?",
      a: "Wir bieten sichere und verschlüsselte Zahlungsmethoden an. Sie können sicher per Kreditkarte (Visa, Mastercard) bezahlen oder PayPal bzw. Payoneer nutzen, indem Sie sich direkt an unseren WhatsApp-Support wenden."
    }
  ] : [
    {
      q: "Qu'est-ce que l'IPTV et comment cela fonctionne-t-il ?",
      a: "L'IPTV (Internet Protocol Television) diffuse des chaînes de télévision en direct et des vidéos à la demande (VOD) directement via votre connexion internet, éliminant ainsi le besoin d'antennes paraboliques ou de câbles traditionnels. Il vous suffit d'une connexion internet pour commencer à regarder."
    },
    {
      q: "Quels appareils sont compatibles avec votre abonnement ?",
      a: "Notre service est compatible avec tous les appareils : Smart TV (Samsung, LG, Sony, Philips), boîtiers Android TV (Xiaomi Mi Box, Nvidia Shield), Apple TV, Firestick, smartphones/tablettes (iOS, Android), ordinateurs (Windows, macOS) et applications comme IPTV Smarters Pro, IBPlayer ou XCIPTV."
    },
    {
      q: "Quelle vitesse de connexion internet est recommandée ?",
      a: "Pour regarder les chaînes en HD sans mise en mémoire tampon, une vitesse stable de 12 Mbps est conseillée. Pour profiter pleinement du contenu en Full HD et 4K UHD, nous recommandons une connexion de 25 Mbps ou plus (Fibre ou 5G)."
    },
    {
      q: "Comment se déroule l'activation après l'achat ?",
      a: "L'activation de votre abonnement est ultra-rapide. Une fois votre paiement validé, notre équipe technique configure votre ligne sous 15 à 30 minutes et vous envoie vos identifiants d'accès (lien M3U, codes Xtream) ainsi qu'un guide d'installation étape par étape par e-mail ou WhatsApp."
    },
    {
      q: "Proposez-vous un remboursement si je ne suis pas satisfait ?",
      a: "Oui, nous offrons une garantie de satisfaction. Si vous rencontrez le moindre problème technique persistant ou si vous changez d'avis durant les 7 premiers jours suivant votre achat, nous vous rembourserons intégralement sans discussion."
    },
    {
      q: "Comment puis-je payer mon abonnement ?",
      a: "Nous proposons des méthodes de paiement sécurisées et cryptées. Vous pouvez payer en toute sécurité avec votre carte de crédit (Visa, Mastercard) via nos liens sécurisés, ou utiliser PayPal ou Payoneer en contactant directement notre support client WhatsApp."
    }
  ];

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '100px 20px', background: 'var(--bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <HelpCircle size={32} color="var(--primary)" />
            {getFAQText(
              <>FREQUENTLY <span style={{ color: 'var(--secondary)' }}>ASKED</span> QUESTIONS</>,
              <>PREGUNTAS <span style={{ color: 'var(--secondary)' }}>FRECUENTES</span></>,
              <>HÄUFIG <span style={{ color: 'var(--secondary)' }}>GESTELLTE</span> FRAGEN</>,
              <>QUESTIONS <span style={{ color: 'var(--secondary)' }}>FRÉQUENTES</span></>
            )}
          </h2>
          <p style={{ color: 'var(--text-gray)', fontSize: '16px' }}>
            {getFAQText(
              "Everything you need to know about our 4K IPTV subscription and activation.",
              "Todo lo que necesita saber sobre nuestra suscripción IPTV 4K y su activación.",
              "Alles, was Sie über unser 4K IPTV-Abonnement und die Aktivierung wissen müssen.",
              "Tout ce que vous devez savoir sur notre abonnement IPTV 4K et son activation."
            )}
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: isOpen ? '1px solid rgba(0, 71, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 10px 30px rgba(0, 71, 255, 0.1)' : 'none'
                }}
              >
                {/* Header (Question) */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 28px',
                    background: 'transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    gap: '20px',
                    color: '#fff',
                    fontFamily: 'inherit'
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1.4' }}>
                    {faq.q}
                  </span>
                  <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: isOpen ? 'var(--primary)' : 'var(--text-gray)',
                    flexShrink: 0
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {/* Content (Answer) */}
                <div style={{
                  maxHeight: isOpen ? '300px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <div style={{
                    padding: '0 28px 28px',
                    color: 'var(--text-gray)',
                    fontSize: '15px',
                    lineHeight: '1.7',
                    borderTop: '1px solid rgba(255, 255, 255, 0.02)',
                    paddingTop: '20px'
                  }}>
                    {faq.a}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
