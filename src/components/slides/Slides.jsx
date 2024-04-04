import React from 'react'
import './Slides.css'
import  Waldsportplatz from '../../assets/Waldsportplatz.jpeg'

const Slides = () => {
  return (
    <div className='slides-container'>
      <img src = {Waldsportplatz} alt='Waldsportplatz'/>
      <div className='slides-container-content'>
        <h1>WALDSPORTPLATZ</h1>
        <div className='slides-container-content-text'>
            <p>
            Der Waldsportplatz. Hier findet hauptsächlich Fußballtraining <br/>
            und Fußballspiele statt. Auch der Jährliche Crosslauf startet hier
            </p>
            <div className='slides-container-button'>
                <button type='button'><a href='#Waldsportplatz'>Mehr Erfahren</a></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Slides
