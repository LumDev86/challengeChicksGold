import { useState } from "react";
import styles from "./NavBar.module.css";
import { FaShoppingCart, FaUser, FaBars, FaMoneyBill, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { menuData } from "./menuData"; // Importamos los datos

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubMenu(null);
  };
  const toggleSubMenu = (label) =>
    setOpenSubMenu(openSubMenu === label ? null : label);

  return (
    <>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <header className={styles.navbar}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <FaBars />
        </div>

        <div className={styles.logoSection}>
          <img src="/logo.jpg" alt="Chicks Gold Logo" className={styles.logo} />
        </div>

        <nav className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <div className={styles.closeBtn} onClick={closeMenu}>
            <FaTimes />
          </div>

          {menuData.map((item) => (
            <div
              key={item.label}
              className={`${styles.menuItem} ${
                openSubMenu === item.label ? styles.open : ""
              }`}
            >
              <div
                className={styles.menuLink}
                onClick={() => toggleSubMenu(item.label)}
              >
                {item.icon} {item.label} <IoMdArrowDropdown />
              </div>
              <div className={styles.submenu}>
                {item.sub.map((subItem) => (
                  <a key={subItem.name} href={subItem.url}>
                    {subItem.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

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
    </>
  );
}

export default NavBar;




