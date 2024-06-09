import React from 'react';
import { useState } from 'react'
import './index.css'
import Sidenav from './components/Sidenav'
import Home from './components/Home'
import Services from './components/Services'
import AboutUs from './components/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Sidenav/>
      <Home/>
      <Services/>
      <AboutUs/>
     </div>
    </>
  )
}

export default App
