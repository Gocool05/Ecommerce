import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import TopNav from './components/TopNav/TopNav';
import About from './pages/About/About';
import AddToCart from './pages/AddToCart/AddToCart';
import Checkout from './pages/AddToCart/Checkout';
import ContactUs from './pages/Contact Us/ContactUs';
import Home from './pages/Home/Home';
import NotFound from './pages/Error/NotFound';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Shop from './pages/Shop/Shop';
import { ToastContainer } from 'react-toastify';
import Blog from './pages/Blog/Blog';
import UserProfile from './pages/ProfilePage/UserProfile';
import CancellationPolicy from './pages/Insights/CancellationPolicy';
import ReplacementPolicy from './pages/Insights/ReplacementPolicy';
import ShippingPolicy from './pages/Insights/ShippingPolicy';
import StrategicVision from './pages/Insights/StrategicVision';
import Login from './pages/Auth/Login';
import { useState } from 'react';
import { useEffect } from 'react';
import ForgetPassword from './pages/Auth/ForgetPassword';
import OrderSuccess from './pages/AddToCart/OrderSuccess';
const client = new QueryClient();

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  // Function to open the login modal
  const openLoginModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

// console.log(window.history);
  return (
    <QueryClientProvider client={client}>
        <ToastContainer/>
        <TopNav />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={< ProductDetails/>} />
          {/* <Route path="shop/product/:id" element={< ProductDetails/>} /> */}
          <Route path="/about" element={< About/>} />
          <Route path="/contact" element={< ContactUs/>} />
          <Route path="/cart" element={< AddToCart/>} />
          <Route path="/checkout" element={< Checkout/>} />
          <Route path="/blog" element={< Blog/>} />
          <Route path="/profile" element={< UserProfile/>} />
          <Route path="/orderSuccess" element={< OrderSuccess/>} />
          <Route path="/CancellationPolicy" element={< CancellationPolicy/>} />
          <Route path="/ReplacementPolicy" element={< ReplacementPolicy/>} />
          <Route path="/ShippingPolicy" element={< ShippingPolicy/>} />
          <Route path="/StrategicVision" element={< StrategicVision/>} />
          <Route path="/ForgetPassword" element={< ForgetPassword/>} />
        </Routes>
        <Footer />
        <Login modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </QueryClientProvider>

  );
}

export default App;
