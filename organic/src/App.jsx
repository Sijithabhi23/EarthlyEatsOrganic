import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Products from "./components/Products"
import About from "./components/About"
import Howitworks from "./components/Howitworks"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <Products/>
        <About/>
        <Howitworks/>
  
        <Footer/>
      </div>
    </>
  )
}

export default App
