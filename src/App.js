import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from "./components/hero/hero"
import Shop from "./components/shop/shop"
import Footer from "./components/footer/footer"
function App() {
  return (
    <div className='bg-gray-100  h-auto'>
      <Navbar />
      <Hero />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
