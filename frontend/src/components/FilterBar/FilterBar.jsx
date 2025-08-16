import { useState } from "react";
import { FaSearch, FaGamepad, FaMoneyBillWave, FaFeather } from "react-icons/fa";
import styles from "./FilterBar.module.css";

function FilterBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    game: "",
    search: "",
    price: "all",
    itemType: "all",
  });

  const handleChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters); // Llama a la función padre si existe
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.filterBar}>
        <h1 className={styles.title}>Condimentum consectetur</h1>

        <div className={styles.filtersRow}>
          {/* Select game */}
          <div className={`${styles.filterItem} ${styles.medium}`}>
            <FaGamepad className={styles.icon} />
            <select
              value={filters.game}
              onChange={(e) => handleChange("game", e.target.value)}
              className={styles.select}
            >
              <option value="">Select a game</option>
              <option value="game1">Game 1</option>
              <option value="game2">Game 2</option>
            </select>
          </div>

          {/* Search */}
          <div className={`${styles.filterItem} ${styles.large}`}>
            <FaSearch className={styles.icon} />
            <input
              type="text"
              placeholder="Search"
              value={filters.search}
              onChange={(e) => handleChange("search", e.target.value)}
              className={styles.input}
            />
          </div>

          {/* Price */}
          <div className={`${styles.filterItem} ${styles.small}`}>
            <FaMoneyBillWave className={styles.icon} />
            <select
              value={filters.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className={styles.select}
            >
              <option value="all">All</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Item type */}
          <div className={`${styles.filterItem} ${styles.small}`}>
            <FaFeather className={styles.icon} />
            <select
              value={filters.itemType}
              onChange={(e) => handleChange("itemType", e.target.value)}
              className={styles.select}
            >
              <option value="all">All</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;




