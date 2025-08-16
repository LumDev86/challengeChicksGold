import styles from './Pagination.module.css';

function Pagination() {
  return (
    <nav className={styles.pagination}>
      <ul className={styles.list}>
        <li>
          <button className={styles.btn} disabled>
            «
          </button>
        </li>
        <li>
          <button className={`${styles.btn} ${styles.active}`}>1</button>
        </li>
        <li>
          <button className={styles.btn}>2</button>
        </li>
        <li>
          <button className={styles.btn}>3</button>
        </li>
        <li>
          <button className={styles.btn}>4</button>
        </li>
        <li>
          <button className={styles.btn}>»</button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;

