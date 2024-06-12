// import React from 'react';
// import { useState } from 'react'
// import './index.css'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Services from './components/Services'
// import AboutUs from './components/AboutUs'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <div>
//       <Navbar/>
//       <Home/>
//       <Services/>
//       <AboutUs/>
//      </div>
//     </>
//   )
// }

// export default App
import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import QuoteForm from './components/QuoteForm';

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
    </>
  );
}

export default App;
