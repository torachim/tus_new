import React from 'react'

import { Blog, Features, Footer, Header, Possibillity } from './containers';
import { Cta, Navbar, Brand } from './components';

import './App.css'


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <Possibillity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
