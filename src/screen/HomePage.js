import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Home from '../components/Home'


export default function HomePage() {
    // const [value, setValue] = useState(0);
    return (
        <div style={{height:'100%'}}>
            <Navbar />
            <Header value={0} />
            <Home />
        </div>
    )
}
