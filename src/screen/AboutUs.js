import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import About from '../components/About'

function AboutUs() {
    return (
        <div style={{height:'100%'}}>
            <Navbar />
            <Header value={1} />
            <About />
            <Footer />
        </div>
    )
}

export default AboutUs
