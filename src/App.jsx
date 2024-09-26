import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Router>
        <Navbar />
        <Routes>
          <Route path="/portfolio/Inicio" element={<Home />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Projetos" element={<Projects />} />
          <Route path="/Sobre" element={<About />} />
          <Route path="/Contato" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
