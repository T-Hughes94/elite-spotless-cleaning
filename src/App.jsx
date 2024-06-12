import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

// import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="quote">
        <QuoteForm />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
