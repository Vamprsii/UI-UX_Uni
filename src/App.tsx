import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import Layout from './components/Layout';
import Footer from './components/footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Delivery from './pages/Delivery/Delivery';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App
