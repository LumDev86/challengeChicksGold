import styles from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import FilterBar from './components/FilterBar/FilterBar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Pagination from './components/Pagination/Pagination';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <FilterBar />
      <ProductGrid />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;


