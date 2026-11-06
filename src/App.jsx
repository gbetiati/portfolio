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
 <Router basename={import.meta.env.BASE_URL}>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
