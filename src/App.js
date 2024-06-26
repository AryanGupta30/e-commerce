import './App.css';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Products/Product';
import Navigation from './customer/components/navigation/navigation';
import HomePage from './customer/pages/HomePage/HomePage';
function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
