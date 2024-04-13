import React from 'react'

import { Abteilungen, Footer, Header,  Kurse, Anlagen} from './containers';
import { Cta, Navbar, Brand} from './components';

import './App.css'


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
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

export default App
