import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import ScreenShot from './pages/ScreenShot';


function App() {
  
  return (
    <BrowserRouter>
      <main>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/screenshot' element={<ScreenShot/>} />
        </Routes> 
        <Footer/>       
      </main>
    </BrowserRouter>
  );
}

export default App;
