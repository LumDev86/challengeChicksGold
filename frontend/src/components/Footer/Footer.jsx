import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Nuevo contenedor para alinear el contenido con el grid */}
      <div className={styles.footerInner}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <img src="/logo.jpg" alt="Chicks Gold Logo" className={styles.logo} />
            <span className={styles.email}>support@chicksgold.com</span>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Chicks Gold</h3>
              <ul className={styles.list}>
                <li><a href="/">Games</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Sitemap</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Support</h3>
              <ul className={styles.list}>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">FAQ</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Legal</h3>
              <ul className={styles.list}>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Service</a></li>
                <li><a href="/">Copyright Policy</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.reviewsSection}>
            <div className={styles.stars}>
              {/* Aquí irían las estrellas de Trustpilot */}
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
            </div>
            <span className={styles.reviewsText}>Trustpilot Reviews</span>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <hr className={styles.divider} />
          <span className={styles.copyright}>
            © 2017 - 2020 Chicksgold.com. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
