import React from 'react'

import { Abteilungen, Footer, Header,  Kurse } from './containers';
import { Cta, Navbar, Brand } from './components';

import './App.css'


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Abteilungen />      
      <Kurse />
      <Cta />
      <Brand />
      <Footer />
      <Cta />
      <Brand />
      <Footer />
      <Cta />
      <Brand />
      <Footer />
      <Footer />
      <Cta />
      <Brand />
      <Footer />
    </div>
  )
}

export default App
