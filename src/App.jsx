import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Router>
        <Navbar />
        <Routes>
          <Route path="/#" element={<Home />} />
          <Route path="/Sobre" element={<Home />} />
          <Route path="/Projetos" element={<Projects />} />
          <Route path="/Contato" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
