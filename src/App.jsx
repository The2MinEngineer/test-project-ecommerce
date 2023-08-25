import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom"
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';

function App() {
 

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />

    </Routes>
    <Footer />
    </Router>

      
      
    </>
  )
}

export default App
