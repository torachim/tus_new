import React from 'react'

import { Abteilungen, Features, Footer, Header, Possibillity } from './containers';
import { Cta, Navbar, Brand, Hovercard, HorizontalScroll} from './components';

import './App.css'


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Abteilungen />      
      <Possibillity />
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
