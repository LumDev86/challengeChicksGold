import { useState } from 'react';
import { FaLeaf, FaDollarSign, FaGamepad } from 'react-icons/fa';
import styles from './FilterBar.module.css';

function FilterBar() {
  const [selectedGame, setSelectedGame] = useState('All');
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState('All');
  const [itemType, setItemType] = useState('All');

  return (
    <nav className={styles.filterBar}>
      <h1 className={styles.caption}>Condimentum consectetur</h1>
      <div className={styles.filters}>
        {/* Select Game */}
        <div className={styles.filterItem}>
          <FaGamepad className={styles.icon} />
          <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
            <option value="All">Select a game</option>
            <option value="Game1">Game 1</option>
            <option value="Game2">Game 2</option>
          </select>
        </div>

        {/* Search */}
        <div className={styles.filterItem}>
          <input 
            type="text" 
            placeholder="Search" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>

        {/* Price */}
        <div className={styles.filterItem}>
          <FaDollarSign className={styles.icon} />
          <select value={price} onChange={(e) => setPrice(e.target.value)}>
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Item Type */}
        <div className={styles.filterItem}>
          <FaLeaf className={styles.icon} />
          <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
            <option value="All">All</option>
            <option value="Type1">Type 1</option>
            <option value="Type2">Type 2</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default FilterBar;

