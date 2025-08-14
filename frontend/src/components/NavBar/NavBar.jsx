import { useState } from 'react';
import styles from './NavBar.module.css';
import { FaShoppingCart, FaUser, FaBars, FaMoneyBill } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      {/* Hamburger mobile */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Logo */}
      <div className={styles.logoSection}>
        <img src="/logo.jpg" alt="Chicks Gold Logo" className={styles.logo} />
      </div>

      {/* Menú principal */}
      <nav className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
        <a href="/">CURRENCY<IoMdArrowDropdown /></a>
        <a href="/">ITEMS<IoMdArrowDropdown /></a>
        <a href="/">ACCOUNTS<IoMdArrowDropdown /></a>
        <a href="/">SERVICES<IoMdArrowDropdown /></a>
        <a href="/">SWAP<IoMdArrowDropdown /></a>
        <a href="/">SHELL<IoMdArrowDropdown /></a>
      </nav>

      {/* Sección derecha */}
      <div className={styles.rightSection}>
        <div className={styles.currency}>
          <FaMoneyBill /> USD 10,000
        </div>
        <div className={styles.cart}>
          <FaShoppingCart /> Cart (5)
        </div>
        <button className={styles.signIn}>
          SIGN IN <span className={styles.userIcon}><FaUser /></span>
        </button>
      </div>
    </header>
  );
}

export default NavBar;


