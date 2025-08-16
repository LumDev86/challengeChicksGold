import styles from './ProductGrid.module.css';
import Pagination from '../Pagination/Pagination';
import ProductCard from '../ProductCard/ProductCard';

function ProductGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.results}>Showing 20 - from 125</span>
          <div className={styles.sort}>
            <button className={styles.sortBtn}>
              <span className={styles.icon}>⚙</span>
              Sort By
            </button>
            <select className={styles.select}>
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Grid de Cards */}
        <div className={styles.grid}>
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
        {/* Paginación */}
        <Pagination />
      </div>
    </div>
  );
}

export default ProductGrid;
