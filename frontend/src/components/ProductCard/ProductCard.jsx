import { FaShoppingCart } from "react-icons/fa";
import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div className={styles.card}>
      {/* Header con estado */}
      <div className={styles.header}>
        <span className={styles.onSale}>● ON SALE</span>
        <div className={styles.quantity}>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>

      {/* Stock */}
      <div className={styles.stockTag}>In stock</div>

      {/* Imagen */}
      <div className={styles.imageWrapper}>
        <img
          src="/shield.PNG"
          alt="Blue Partyhat"
          className={styles.image}
        />
      </div>

      {/* Información */}
      <div className={styles.info}>
        <h3 className={styles.title}>Blue Partyhat</h3>
        <div className={styles.currencyIcon}></div>
        <div className={styles.prices}>
          <span className={styles.priceNow}>$450.00</span>
          <span className={styles.priceOld}>$522.50</span>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur sadipscing elitr.
        </p>
      </div>

      {/* Botones */}
      <div className={styles.buttons}>
        <button className={styles.details}>DETAILS</button>
        <button className={styles.add}>
          ADD <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

