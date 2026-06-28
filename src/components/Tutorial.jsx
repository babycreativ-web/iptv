import { useState } from 'react';
import { Tv, Smartphone, Laptop, Monitor, HardDrive } from 'lucide-react';

const Tutorial = () => {
  const [activeTab, setActiveTab] = useState('firestick');
  const isEnglish = window.location.pathname.startsWith('/en');

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
            {isEnglish ? (
              <>
                INSTALLATION <span style={{ color: 'var(--secondary)' }}>GUIDES</span> & TUTORIALS
              </>
            ) : (
              <>
                GUIDES & <span style={{ color: 'var(--secondary)' }}>TUTORIELS</span> D'INSTALLATION
              </>
            )}
          </h2>
          <p style={styles.subtitle}>
            {isEnglish 
              ? "Learn how to easily install and configure your 4K IPTV subscription on any device of your choice."
              : "Apprenez à installer et configurer facilement votre abonnement IPTV 4K sur n'importe quel appareil de votre choix."}
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
            <h3 style={styles.contentTitle}>
              {isEnglish ? "How to install IPTV on Amazon Fire TV Stick" : "Comment installer l'IPTV sur Amazon Fire TV Stick"}
            </h3>
            <p style={styles.introText}>
              {isEnglish 
                ? "Follow these simple steps to configure your IPTV subscription on your Fire TV Stick."
                : "Suivez ces étapes simples pour configurer votre abonnement IPTV sur votre clé Fire TV Stick."}
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 1' : 'Étape 1'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "From the home screen of your device, access the search option (Find)." : "Depuis l'écran d'accueil de votre appareil, accédez à l'option de recherche (Trouver/Find)."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 2' : 'Étape 2'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Search for and select the free Downloader app in the Amazon Store." : "Recherchez et sélectionnez l'application gratuite Downloader dans le store Amazon."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 3' : 'Étape 3'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Download and install the Downloader app." : "Téléchargez et installez l'application Downloader."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 4' : 'Étape 4'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Before opening Downloader, return to the home screen, go to Settings > My Fire TV > Developer Options. Enable \"Apps from Unknown Sources\" for Downloader to allow sideloading."
                    : "Avant d'ouvrir Downloader, retournez à l'écran d'accueil, allez dans Paramètres > Ma Fire TV > Options pour les développeurs. Activez \"Applications de sources inconnues\" pour Downloader pour permettre le chargement externe."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 5' : 'Étape 5'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Launch Downloader, allow permissions, and enter the following URL exactly to download the IPTV Smarters Pro app:"
                    : "Lancez Downloader, autorisez les accès, et entrez l'adresse suivante exactement pour télécharger l'application IPTV Smarters Pro :"}{' '}
                  <br />
                  <a href="https://www.iptvsmarters.com/smarters.apk" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    https://www.iptvsmarters.com/smarters.apk
                  </a>
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 6' : 'Étape 6'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Once the download is complete, click Install, then click Open." : "Une fois le téléchargement terminé, cliquez sur Installer, puis sur Ouvrir."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 7' : 'Étape 7'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Select \"Login with Xtream Codes API\" and enter the credentials (username, password, portal URL) we sent you via Email or WhatsApp."
                    : "Sélectionnez \"Connexion avec l'API Xtream Codes\" et saisissez les identifiants (nom d'utilisateur, mot de passe, URL du portail) que nous vous avons envoyés par e-mail ou WhatsApp."}
                </p>
              </div>
            </div>
          </div>

          {/* Android Guide */}
          <div style={{ display: activeTab === 'android' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>
              {isEnglish ? "How to configure IPTV on Android" : "Comment configurer l'IPTV sur Android"}
            </h3>
            <p style={styles.introText}>
              {isEnglish 
                ? "Enjoy your channels on smartphone, tablet, or Android TV Box with the official IPTV Smarters Pro app."
                : "Profitez de vos chaînes sur smartphone, tablette ou Box TV Android avec l'application officielle IPTV Smarters Pro."}
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 1' : 'Étape 1'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Download the installation file for the IPTV Smarters app via the following link:" 
                    : "Téléchargez le fichier d'installation de l'application IPTV Smarters via le lien suivant :"}{' '}
                  <br />
                  <a href="https://www.iptvsmarters.com/smarters.apk" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    https://www.iptvsmarters.com/smarters.apk
                  </a>
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 2' : 'Étape 2'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Install and open the app on your Android device." : "Installez et ouvrez l'application sur votre appareil Android."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 3' : 'Étape 3'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Choose the connection option: Login with Xtream Codes API." : "Choisissez l'option de connexion Connexion avec l'API Xtream Codes."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 4' : 'Étape 4'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Enter the login details provided upon subscription (Name, Username, Password, and Server URL) and click Add User."
                    : "Entrez les coordonnées de connexion fournies lors de votre souscription (Nom, Identifiant, Mot de passe et URL du serveur) et cliquez sur Ajouter un utilisateur."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 5' : 'Étape 5'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Wait a few seconds for the content to load, select your profile, and start enjoying your live channels and VOD!"
                    : "Attendez quelques secondes que le chargement se fasse, sélectionnez votre profil, et profitez de vos chaînes et VOD en direct !"}
                </p>
              </div>
            </div>
          </div>

          {/* Apple / iOS Guide */}
          <div style={{ display: activeTab === 'apple' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>
              {isEnglish ? "IPTV Configuration on Apple (iPhone, iPad, Apple TV)" : "Configuration IPTV sur Apple (iPhone, iPad, Apple TV)"}
            </h3>
            <p style={styles.introText}>
              {isEnglish 
                ? "Follow these steps to install and activate your IPTV subscription on your Apple / iOS devices."
                : "Suivez ces étapes pour installer et activer votre abonnement IPTV sur vos appareils Apple / iOS."}
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 1' : 'Étape 1'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Search for and install the free Smarters Player Lite app in the Apple App Store, or use the direct link:"
                    : "Recherchez et installez l'application gratuite Smarters Player Lite dans l'App Store Apple ou utilisez le lien direct :"}{' '}
                  <br />
                  <a href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    {isEnglish ? 'Download Smarters Player Lite on the App Store' : "Télécharger Smarters Player Lite sur l'App Store"}
                  </a>
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 2' : 'Étape 2'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Open the app and accept the terms of service." : "Ouvrez l'application et acceptez les conditions générales."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 3' : 'Étape 3'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Select the \"Login with Xtream Codes API\" option." : "Sélectionnez l'option \"Connexion avec l'API Xtream Codes\"."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 4' : 'Étape 4'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Enter the connection details (Name, Username, Password, and URL) received via email or WhatsApp, then click Add User."
                    : "Saisissez les informations de connexion (Nom, Identifiant, Mot de passe et URL) reçues par e-mail ou WhatsApp, puis cliquez sur Ajouter un utilisateur."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 5' : 'Étape 5'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Once connected, click \"Install EPG\" to load the automatic TV program guide."
                    : "Une fois connecté, cliquez sur \"Installer EPG\" pour charger le guide des programmes TV automatique."}
                </p>
              </div>
            </div>
          </div>

          {/* Smart TV Guide */}
          <div style={{ display: activeTab === 'smarttv' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>
              {isEnglish ? "IPTV Installation on Smart TV (Samsung, LG)" : "Installation IPTV sur Smart TV (Samsung, LG)"}
            </h3>
            <p style={styles.introText}>
              {isEnglish 
                ? "Learn how to directly activate and configure our IPTV subscription on your Smart TV OS without an external box."
                : "Découvrez comment activer et configurer directement notre abonnement IPTV sur l'OS de votre Smart TV sans boîtier externe."}
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepTitle}>
                {isEnglish ? "For Samsung Smart TVs" : "Pour les téléviseurs Samsung Smart TV"}
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 1' : 'Étape 1'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Press the Smart Hub or Home button on your Samsung remote." : "Appuyez sur le bouton Smart Hub ou d'accueil de votre télécommande Samsung."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 2' : 'Étape 2'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Search for the IPTV Smarters Pro or Smart IPTV app in the Samsung App Store."
                    : "Recherchez l'application IPTV Smarters Pro ou Smart IPTV dans la boutique d'applications Samsung Apps."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 3' : 'Étape 3'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Install the app, open it, and log in with your server subscription credentials."
                    : "Installez l'application, ouvrez-la et connectez-vous avec vos informations de souscription de serveur."}
                </p>
              </div>

              <div style={{ ...styles.stepTitle, marginTop: '20px' }}>
                {isEnglish ? "For LG Smart TVs" : "Pour les téléviseurs LG Smart TV"}
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 1' : 'Étape 1'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Press the Home button on your LG remote and go to the LG Content Store." : "Appuyez sur le bouton Home de la télécommande LG et allez sur LG Content Store."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 2' : 'Étape 2'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Search for the IPTV Smarters Pro or IBO Player app in the search bar."
                    : "Recherchez l'application IPTV Smarters Pro ou IBO Player dans la barre de recherche."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 3' : 'Étape 3'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Install the app on your TV, launch it, and enter your Xtream Codes credentials."
                    : "Installez l'application sur votre TV, lancez-la et saisissez vos identifiants Xtream Codes."}
                </p>
              </div>
            </div>
          </div>

          {/* Windows / Mac Guide */}
          <div style={{ display: activeTab === 'windows' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>
              {isEnglish ? "IPTV Configuration on PC (Windows / Mac)" : "Configuration IPTV sur Ordinateur (Windows / MAC)"}
            </h3>
            <p style={styles.introText}>
              {isEnglish 
                ? "Follow these simple instructions to watch our TV service directly on your computer screen."
                : "Suivez ces instructions simples pour regarder notre service de télévision directement sur l'écran de votre ordinateur."}
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>Windows</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Download the official IPTV Smarters app for Windows by clicking the link below:" : "Téléchargez l'application officielle IPTV Smarters pour Windows en cliquant sur le lien ci-dessous :"}<br />
                  <a href="https://www.iptvsmarters.com/download?download=windows" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    {isEnglish ? "Download the IPTV Smarters Installer for Windows (.exe)" : "Télécharger l'Installer IPTV Smarters pour Windows (.exe)"}
                  </a>
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>MAC OS</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Download the official IPTV Smarters app for macOS by clicking the link below:" : "Téléchargez l'application officielle IPTV Smarters pour macOS en cliquant sur le lien ci-dessous :"}<br />
                  <a href="https://www.iptvsmarters.com/download?download=mac" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    {isEnglish ? "Download the IPTV Smarters Installer for Mac (.dmg)" : "Télécharger l'Installer IPTV Smarters pour Mac (.dmg)"}
                  </a>
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Activation' : 'Activation'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Run the installer, open the application, and fill in your Xtream API credentials (username, password, and server URL) provided by our service."
                    : "Exécutez le programme d'installation, ouvrez l'application et renseignez vos identifiants Xtream API (utilisateur, mot de passe et l'adresse URL du serveur) fournis par notre service."}
                </p>
              </div>
            </div>
          </div>

          {/* Mag Box Guide */}
          <div style={{ display: activeTab === 'mag' ? 'block' : 'none' }}>
            <h3 style={styles.contentTitle}>
              {isEnglish ? "How to configure IPTV on MAG Boxes" : "Comment configurer l'IPTV sur boîtiers MAG"}
            </h3>
            <p style={styles.introText}>
              {isEnglish 
                ? "This tutorial guides you through the setup steps for all MAG series devices (250, 254, 256, etc.)."
                : "Ce tutoriel vous guide à travers les étapes de configuration pour tous les appareils de la gamme MAG (250, 254, 256, etc.)."}
            </p>
            <div style={styles.stepsContainer}>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 1' : 'Étape 1'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "IMPORTANT: When ordering, please send us the MAC address of your MAG box (found on the label on the back of your box). Activation is done remotely on our servers."
                    : "IMPORTANT : Lors de votre commande, veuillez nous envoyer l'adresse MAC de votre boîtier MAG (elle se trouve sur l'étiquette au dos de votre boîtier). L'activation est effectuée à distance sur nos serveurs."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 2' : 'Étape 2'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Turn on your MAG box. Go to Settings, then click System Settings."
                    : "Allumez votre boîtier MAG. Allez dans Settings / Paramètres, puis cliquez sur System Settings / Paramètres Système."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 3' : 'Étape 3'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Select Servers and click Portals." : "Sélectionnez l'option Servers / Serveurs et cliquez sur Portals / Portails."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 4' : 'Étape 4'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "In the Portal 1 name line, enter a name of your choice (e.g., IPTV 4K)."
                    : "Dans la ligne Portal 1 name, entrez un nom au choix (par exemple: IPTV 4K)."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 5' : 'Étape 5'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "In the Portal 1 URL line, enter the specific portal URL we sent you after your order."
                    : "Dans la ligne Portal 1 URL, saisissez l'adresse de portail spécifique que nous vous avons envoyée après votre commande."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 6' : 'Étape 6'}</span>
                <p style={styles.stepText}>
                  {isEnglish ? "Click OK to save changes." : "Cliquez sur OK pour enregistrer les modifications."}
                </p>
              </div>
              <div style={styles.stepCard}>
                <span style={styles.stepBadge}>{isEnglish ? 'Step 7' : 'Étape 7'}</span>
                <p style={styles.stepText}>
                  {isEnglish 
                    ? "Press the EXIT key on your remote control and reboot your MAG box to load the portal."
                    : "Appuyez sur la touche EXIT de votre télécommande et redémarrez votre boîtier MAG pour charger le portail."}
                </p>
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
