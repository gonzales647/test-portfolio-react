import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';



import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Home />

      <About />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
