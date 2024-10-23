import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Header } from './components/header';
import Delivery from './pages/Delivery';
import Layout from './components/Layout';
import Footer from './components/footer';

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
