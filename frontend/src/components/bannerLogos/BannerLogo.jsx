import styles from './BannerLogo.module.css';

function BannerLogo() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <img src="/visa-icon.svg" alt="Visa Logo" className={styles.logo} />
        <img src="/mastercard-old-3-svgrepo-com.svg" alt="Mastercard Logo" className={styles.logo} />
        <img src="/amex-3-svgrepo-com.svg" alt="American Express Logo" className={styles.logo} />
        <img src="/skrill-svgrepo-com.svg" alt="Skrill Logo" className={styles.logo} />
        <span className={styles.text}>and 50+ more</span>
      </div>
    </div>
  );
}

export default BannerLogo;