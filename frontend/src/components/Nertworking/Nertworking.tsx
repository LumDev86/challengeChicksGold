import styles from './Nertworking.module.css';

function Nertworking() {
  return (
    <div className={styles.nertworking}>
      <div className={styles.container}>
        <a href="/" aria-label="Facebook">
          <img src="/facebook_logo_internet_icon.svg" alt="Facebook" className={styles.icon} />
        </a>
        <a href="/" aria-label="Instagram">
          <img src="/instagram_logo_media_popular_icon.svg" alt="Instagram" className={styles.icon} />
        </a>
        <a href="/" aria-label="Twitter">
          <img src="/logo_media_popular_social_icon.svg" alt="Twitter" className={styles.icon} />
        </a>
        <a href="/" aria-label="Discord">
          <img src="/discord_logo_icon.svg" alt="Discord" className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default Nertworking;