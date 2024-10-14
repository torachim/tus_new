import React from 'react'


import { Abteilungen, Footer, Header,  Kurse, Anlagen} from '../containers';
import {  Navbar } from '../components';


import './Mainpage.css'

const Mainpage = () => {
    return (
        <div className="App">
          <Navbar />
          <Header />
          <Abteilungen />   
          <Kurse />
          <Anlagen />
          <footer className='site-footer'>
            <Footer />
          </footer>
        </div>
    )
  }

export default Mainpage