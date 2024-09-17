import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
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
import Login from './pages/Auth/Login';
import LoginPage from './pages/Auth/LoginPage';
const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <ToastContainer/>
        <TopNav />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={< LoginPage/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={< ProductDetails/>} />
          <Route path="shop/product/:id" element={< ProductDetails/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/contact" element={< ContactUs/>} />
          <Route path="/cart" element={< AddToCart/>} />
          <Route path="/checkout" element={< Checkout/>} />
          <Route path="/blog" element={< Blog/>} />
          <Route path="/profile" element={< UserProfile/>} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>

  );
}

export default App;
