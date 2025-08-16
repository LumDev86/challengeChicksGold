import styles from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import FilterBar from './components/FilterBar/FilterBar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Footer from './components/Footer/Footer';
import BannerLogo from './components/bannerLogos/BannerLogo';
import Nertworking from './components/Nertworking/Nertworking';

function App() {
  const handleFilterChange = (filters: any) => {
    console.log("Filtros aplicados:", filters);
    // Aquí luego podrías pasarlos al ProductGrid
  };

  return (
    <div className={styles.app}>
      <NavBar />
      <FilterBar onFilterChange={handleFilterChange} />
      <ProductGrid />
      <BannerLogo />
      <Nertworking />
      <Footer />
    </div>
  );
}

export default App;


