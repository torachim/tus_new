import React from 'react'
import './Slides.css'
import  Waldsportplatz from '../../assets/Waldsportplatz.jpeg'

const Slides = ({anlage}) => {
  return (
    <div className='slides-container'>
      <img src = {anlage.Bild} />
      <div className='slides-container-content scale-up-center'>
        <h1>{anlage.Name}</h1>
        <div className='slides-container-content-text'>
            <p>
              {anlage.Beschreibung}
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
