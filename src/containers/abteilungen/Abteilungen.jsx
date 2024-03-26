import React from 'react'
import './Abteilungen.css'
import { HorizontalScroll } from '../../components'




const Abteilungen = () => {


  return (
    <div className='tus_abteilungen' id='home'>
      <div className='tus_abteilungen_textcontent'>
        <h1 className='tus_abteilungen_textcontent-header'>Abteilungen</h1>
        <p>Der TuS Kaisersesch ist in zahlreiche Abteilungen gegliedert <br />
           Jede Abteilung verfügt über ein breites Trainingsangebot. <br />
           Auf den Seiten der Abteilungen findest du mehr Informationen.</p>
      </div>
      <div className='tus_abteilungen_scroler'>    
        <HorizontalScroll />
      </div> 
    </div>
  )
}

export default Abteilungen
