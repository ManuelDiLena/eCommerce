import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductGrid from './components/ProductGrid';
import ShoppingPage from './components/ShoppingPage';

function App() {
    return (
        <div className="App">
            <Navbar />
            <ShoppingPage />
            {/* <ProductGrid /> */}
            {/* <Product /> */}
        </div>
    );
}

export default App;
