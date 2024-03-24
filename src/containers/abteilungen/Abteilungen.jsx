import React, { useState } from 'react'
import './Abteilungen.css'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import { Cardcontent } from '../../components'
import { Hovercard } from '../../components'
import Fußballtest from '../../assets/fußball.jpeg'
import Turnentest from '../../assets/turnentest.jpg';
import Leichtathletiktest from '../../assets/leichtathletiktest.jpg'; 

const Abteilungen = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='tus_abteilungen' id='home'>
      <div className='tus_abteilungen_textcontent'>
        <h1 className='tus_abteilungen_textcontent-header'>Abteilungen</h1>
        <p>Der TuS Kaisersesch ist in zahlreiche Abteilungen gegliedert <br />
           Jede Abteilung verfügt über ein breites Trainingsangebot. <br />
           Auf den Seiten der Abteilungen findest du mehr Informationen.</p>
      </div>     
      <div className='tus_abteilungen_cardcontent'>
          <Hovercard />
          <Hovercard />
          <Hovercard />
          <div className = 'arrow-card'>
            <div className = 'circle-arrow'>
              {toggleMenu
                ? < RiArrowUpSLine color = '#fff' size = {145} cursor='pointer' onClick={() => setToggleMenu(false)}/>
                : < RiArrowDownSLine color = '#fff' size = {145} cursor='pointer' onClick={() => setToggleMenu(true)}/>
              }
              </div>
            <p>Alle Abteilungen</p>          
          </div>
      </div>  
    </div>
  )
}

export default Abteilungen
