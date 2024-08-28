
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from "./pages/Products";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Header from './components/Header';
import PageNotFound from './pages/PageNotFound'


function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/News" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />}  />
             
      </Routes>
    </>
  )
}

export default App
