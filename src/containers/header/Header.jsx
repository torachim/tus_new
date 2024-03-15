import React from 'react'

import './Header.css'
import Startseitenbild from '../../assets/Startseite.jpeg'



const Header = () => {
  return (
    <div className = "tus__header" id = "home">
      <div className = "tus__header-content section__padding__top">
        <p className = "welcome__text">Willkommen beim</p>
        <h1 className = "gradient__text">TuS Kaisersesch</h1>
        <p>Dem Sportverein aus der Vordereifel. <br />
           Auf der Suche nach einem Sportverein?<br />
           Egal ob erfahrener Sportler oder Anfänger, <br />
           Egal ob jung oder alt, <br />
           Bei uns findest Du genau das richtige für dich!
        </p>
        <div className = "tus__header-content-buttons">
          <button type = "button"><a href = "#MehrErfahren">Erfahre Mehr</a></button>
          <button type = "button"><a href = "#Mitgliedwerden">Mitglied werden</a></button>
        </div>
      </div>
      <div className = "tus__header-image">
        <img src = {Startseitenbild} alt = "Startseite"/>
      </div>  
    </div>
    
    
  )
}

export default Header
