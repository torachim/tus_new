import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Mainpage from'./pages/Mainpage';
import Aktuelles from './pages/Aktuelles';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}/>
        <Route path="/aktuelles" element={<Aktuelles />}/>
        <Route path="*" element={<h2>Seite nicht gefunden</h2>} />
      </Routes>
    </BrowserRouter>
  )
}




export default App
