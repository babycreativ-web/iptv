import { useState } from 'react';
import { Tv, Smartphone, Laptop, Monitor, HardDrive } from 'lucide-react';

const Tutorial = () => {
  const [activeTab, setActiveTab] = useState('firestick');

  const tabs = [
    { id: 'firestick', name: 'Fire TV Stick', icon: Tv },
    { id: 'android', name: 'Android', icon: Smartphone },
    { id: 'apple', name: 'Apple / iOS', icon: Smartphone },
    { id: 'smarttv', name: 'Smart TV', icon: Monitor },
    { id: 'windows', name: 'Windows / Mac', icon: Laptop },
    { id: 'mag', name: 'Mag Box', icon: HardDrive }
  ];

  return (
    <section id="tutorial" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>
            GUIDES & <span style={{ color: 'var(--secondary)' }}>TUTORIELS</span> D'INSTALLATION
          </h2>
          <p style={styles.subtitle}>
            Apprenez à installer et configurer facilement votre abonnement IPTV 4K sur n'importe quel appareil de votre choix.
          </p>
        </div>

        {/* Tab Switcher Grid */}
        <div style={styles.tabsGrid}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  ...styles.tabButton,
                  backgroundColor: isActive ? 'var(--primary)' : 'rgba(255, 255, 255, 0.03)',
                  borderColor: isActive ? 'var(--primary)' : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isActive ? '0 8px 25px rgba(0, 102, 255, 0.4)' : 'none',
                  color: isActive ? '#fff' : 'var(--text-gray)'
                }}
              >
                <Icon size={20} style={{ color: isActive ? '#fff' : 'var(--primary)' }} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* SEO-Optimized Content Panel (All tabs exist in DOM, hidden via display: none) */}
        <div style={styles.contentPanel}>
          {/* Fire TV Stick Guide */}
          <div style={{ display: activeTab === 'firestick' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>Comment installer l'IPTV sur Amazon Fire TV Stick</h3>
            <p style={styles.introText}>
              Suivez ces étapes simples pour configurer votre abonnement IPTV sur votre clé Fire TV Stick.
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 1</span>
                <p style={styles.stepText}>Depuis l'écran d'accueil de votre appareil, accédez à l'option de recherche (Trouver/Find).</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 2</span>
                <p style={styles.stepText}>Recherchez et sélectionnez l'application gratuite <strong>Downloader</strong> dans le store Amazon.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 3</span>
                <p style={styles.stepText}>Téléchargez et installez l'application <strong>Downloader</strong>.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 4</span>
                <p style={styles.stepText}>
                  Avant d'ouvrir Downloader, retournez à l'écran d'accueil, allez dans <strong>Paramètres</strong> &gt; <strong>Ma Fire TV</strong> &gt; <strong>Options pour les développeurs</strong>. Activez <strong>"Applications de sources inconnues"</strong> pour Downloader pour permettre le chargement externe.
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 5</span>
                <p style={styles.stepText}>
                  Lancez Downloader, autorisez les accès, et entrez l'adresse suivante exactement pour télécharger l'application IPTV Smarters Pro : <br />
                  <a href="https://www.iptvsmarters.com/smarters.apk" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    https://www.iptvsmarters.com/smarters.apk
                  </a>
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 6</span>
                <p style={styles.stepText}>Une fois le téléchargement terminé, cliquez sur <strong>Installer</strong>, puis sur <strong>Ouvrir</strong>.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 7</span>
                <p style={styles.stepText}>
                  Sélectionnez <strong>"Connexion avec l'API Xtream Codes"</strong> et saisissez les identifiants (nom d'utilisateur, mot de passe, URL du portail) que nous vous avons envoyés par e-mail ou WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Android Guide */}
          <div style={{ display: activeTab === 'android' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>Comment configurer l'IPTV sur Android</h3>
            <p style={styles.introText}>
              Profitez de vos chaînes sur smartphone, tablette ou Box TV Android avec l'application officielle IPTV Smarters Pro.
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 1</span>
                <p style={styles.stepText}>
                  Téléchargez le fichier d'installation de l'application IPTV Smarters via le lien suivant : <br />
                  <a href="https://www.iptvsmarters.com/smarters.apk" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    https://www.iptvsmarters.com/smarters.apk
                  </a>
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 2</span>
                <p style={styles.stepText}>Installez et ouvrez l'application sur votre appareil Android.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 3</span>
                <p style={styles.stepText}>Choisissez l'option de connexion <strong>"Connexion avec l'API Xtream Codes"</strong>.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 4</span>
                <p style={styles.stepText}>
                  Entrez les coordonnées de connexion fournies lors de votre souscription (Nom, Identifiant, Mot de passe et URL du serveur) et cliquez sur <strong>Ajouter un utilisateur</strong>.
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 5</span>
                <p style={styles.stepText}>Attendez quelques secondes que le chargement se fasse, sélectionnez votre profil, et profitez de vos chaînes et VOD en direct !</p>
              </div>
            </div>
          </div>

          {/* Apple / iOS Guide */}
          <div style={{ display: activeTab === 'apple' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>Configuration IPTV sur Apple (iPhone, iPad, Apple TV)</h3>
            <p style={styles.introText}>
              Suivez ces étapes pour installer et activer votre abonnement IPTV sur vos appareils Apple / iOS.
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 1</span>
                <p style={styles.stepText}>
                  Recherchez et installez l'application gratuite <strong>Smarters Player Lite</strong> dans l'App Store Apple ou utilisez le lien direct : <br />
                  <a href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Télécharger Smarters Player Lite sur l'App Store
                  </a>
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 2</span>
                <p style={styles.stepText}>Ouvrez l'application et acceptez les conditions générales.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 3</span>
                <p style={styles.stepText}>Sélectionnez l'option <strong>"Connexion avec l'API Xtream Codes"</strong>.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 4</span>
                <p style={styles.stepText}>
                  Saisissez les informations de connexion (Nom, Identifiant, Mot de passe et URL) reçues par e-mail ou WhatsApp, puis cliquez sur <strong>Ajouter un utilisateur</strong>.
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 5</span>
                <p style={styles.stepText}>Une fois connecté, cliquez sur <strong>"Installer EPG"</strong> pour charger le guide des programmes TV automatique.</p>
              </div>
            </div>
          </div>

          {/* Smart TV Guide */}
          <div style={{ display: activeTab === 'smarttv' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>Installation IPTV sur Smart TV (Samsung, LG)</h3>
            <p style={styles.introText}>
              Découvrez comment activer et configurer directement notre abonnement IPTV sur l'OS de votre Smart TV sans boîtier externe.
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepTitle}>Pour les téléviseurs Samsung Smart TV</div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 1</span>
                <p style={styles.stepText}>Appuyez sur le bouton <strong>Smart Hub</strong> ou d'accueil de votre télécommande Samsung.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 2</span>
                <p style={styles.stepText}>Recherchez l'application <strong>IPTV Smarters Pro</strong> ou <strong>Smart IPTV</strong> dans la boutique d'applications Samsung Apps.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 3</span>
                <p style={styles.stepText}>Installez l'application, ouvrez-la et connectez-vous avec vos informations de souscription de serveur.</p>
              </div>

              <div style={{ ...styles.stepTitle, marginTop: '20px' }}>Pour les téléviseurs LG Smart TV</div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 1</span>
                <p style={styles.stepText}>Appuyez sur le bouton <strong>Home</strong> de la télécommande LG et allez sur <strong>LG Content Store</strong>.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 2</span>
                <p style={styles.stepText}>Recherchez l'application <strong>IPTV Smarters Pro</strong> ou <strong>IBO Player</strong> dans la barre de recherche.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 3</span>
                <p style={styles.stepText}>Installez l'application sur votre TV, lancez-la et saisissez vos identifiants Xtream Codes.</p>
              </div>
            </div>
          </div>

          {/* Windows / Mac Guide */}
          <div style={{ display: activeTab === 'windows' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>Configuration IPTV sur Ordinateur (Windows / MAC)</h3>
            <p style={styles.introText}>
              Suivez ces instructions simples pour regarder notre service de télévision directement sur l'écran de votre ordinateur.
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Windows</span>
                <p style={styles.stepText}>
                  Téléchargez l'application officielle IPTV Smarters pour Windows en cliquant sur le lien ci-dessous :<br />
                  <a href="https://www.iptvsmarters.com/download?download=windows" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Télécharger l'Installer IPTV Smarters pour Windows (.exe)
                  </a>
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>MAC OS</span>
                <p style={styles.stepText}>
                  Téléchargez l'application officielle IPTV Smarters pour macOS en cliquant sur le lien ci-dessous :<br />
                  <a href="https://www.iptvsmarters.com/download?download=mac" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Télécharger l'Installer IPTV Smarters pour Mac (.dmg)
                  </a>
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Activation</span>
                <p style={styles.stepText}>
                  Exécutez le programme d'installation, ouvrez l'application et renseignez vos identifiants Xtream API (utilisateur, mot de passe et l'adresse URL du serveur) fournis par notre service.
                </p>
              </div>
            </div>
          </div>

          {/* Mag Box Guide */}
          <div style={{ display: activeTab === 'mag' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>Comment configurer l'IPTV sur boîtiers MAG</h3>
            <p style={styles.introText}>
              Ce tutoriel vous guide à travers les étapes de configuration pour tous les appareils de la gamme MAG (250, 254, 256, etc.).
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 1</span>
                <p style={styles.stepText}>
                  <strong>IMPORTANT :</strong> Lors de votre commande, veuillez nous envoyer l'adresse MAC de votre boîtier MAG (elle se trouve sur l'étiquette au dos de votre boîtier). L'activation est effectuée à distance sur nos serveurs.
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 2</span>
                <p style={styles.stepText}>
                  Allumez votre boîtier MAG. Allez dans <strong>Settings / Paramètres</strong>, puis cliquez sur <strong>System Settings / Paramètres Système</strong>.
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 3</span>
                <p style={styles.stepText}>Sélectionnez l'option <strong>Servers / Serveurs</strong> et cliquez sur <strong>Portals / Portails</strong>.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 4</span>
                <p style={styles.stepText}>
                  Dans la ligne <strong>Portal 1 name</strong>, entrez un nom au choix (par exemple: <i>IPTV 4K</i>).
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 5</span>
                <p style={styles.stepText}>
                  Dans la ligne <strong>Portal 1 URL</strong>, saisissez l'adresse de portail spécifique que nous vous avons envoyée après votre commande.
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 6</span>
                <p style={styles.stepText}>Cliquez sur <strong>OK</strong> pour enregistrer les modifications.</p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Étape 7</span>
                <p style={styles.stepText}>Appuyez sur la touche <strong>EXIT</strong> de votre télécommande et redémarrez votre boîtier MAG pour charger le portail.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    background: 'linear-gradient(180deg, #0d1030 0%, var(--bg-dark) 100%)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    fontWeight: '900',
    marginBottom: '15px',
  },
  subtitle: {
    color: 'var(--text-gray)',
    fontSize: '16px',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  tabsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '12px',
    marginBottom: '40px',
  },
  tabButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid',
    fontWeight: '800',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  contentPanel: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    padding: '40px 30px',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
  },
  contentTitle: {
    fontSize: '24px',
    fontWeight: '800',
    marginBottom: '15px',
    color: '#fff',
  },
  introText: {
    color: 'var(--text-gray)',
    fontSize: '15px',
    lineHeight: '1.7',
    marginBottom: '30px',
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  stepTitle: {
    fontSize: '18px',
    fontWeight: '800',
    color: 'var(--secondary)',
    marginBottom: '10px',
  },
  stepCard: {
    background: 'rgba(255, 255, 255, 0.01)',
    border: '1px solid rgba(255, 255, 255, 0.03)',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  stepBadge: {
    background: 'rgba(0, 102, 255, 0.1)',
    border: '1px solid rgba(0, 102, 255, 0.2)',
    color: 'var(--primary)',
    padding: '6px 14px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '900',
    whiteSpace: 'nowrap',
  },
  stepText: {
    margin: 0,
    color: 'var(--text-gray)',
    fontSize: '14.5px',
    lineHeight: '1.6',
    flex: 1,
  },
  link: {
    color: 'var(--secondary)',
    fontWeight: '700',
    textDecoration: 'underline',
    wordBreak: 'break-all',
  }
};

export default Tutorial;
