import React from 'react'
import './Slides.css'
import  Waldsportplatz from '../../assets/Waldsportplatz.jpeg'

const Slides = ({Bild, Name, Beschreibung}) => {
  return (
    <div className='slides-container'>
      <img src = {Bild} />
      <div className='slides-container-content scale-up-center'>
        <h1>{Name}</h1>
        <div className='slides-container-content-text'>
            <p>
              {Beschreibung}
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
