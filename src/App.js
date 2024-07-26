import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Product from './components/Product/Product';
import Rating from './components/Rating/Rating';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Features/>
      <Product/>
      <Rating/>
      <Hotels/>
      <Review/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
