import React from 'react'
import './Anlagen.css'
import { HorAnlagenScroll } from '../../components'

const Anlagen = () => {
  return (
    <div className='tus_anlagen'>
      <div className='tus_anlagen-textcontent'>
            <h1>Anlagen</h1>
            <p>Sowohl das Training der Abteilungen als auch die Kurse <br />
               finden in den einzelnen Anlagen der TuS Kaisersesch statt <br/>
               auf den Seiten der Anlagen findest du mehr Informationen.
            </p>
      </div>
      <HorAnlagenScroll />
    </div>
  )
}

export default Anlagen
