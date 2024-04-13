import React from 'react'
import TuSLogo from '../../assets/Logo.png'
import SportstudioLogo from '../../assets/Sportstudio.png'
import JakoLogo from '../../assets/Jako.svg.png'

import './Footer.css'

const Footer = () => {
  return (
    <div className='tus_footer'>
      <div className='tus_footer_content'>
        <div className='tus_footer_content_info'>
          <div className='info-text'>
            <h2>Turn- und Sportverein 1901 ev.</h2>
            <p>Postfach 1108 <br/>Poststraße 19 <br/>56759 Kaisersesch <br/>Deutschland</p><br/><br/>
            <p><b>E-Mail: </b>info@tus-kaisersesch.de <br/><b>Tel: </b>02653/3648</p>
          </div>
          <div className='info-text'>
            <h2>Bürozeiten</h2>
            <p><b>Donnerstag: </b>8:30 - 11:30 Uhr <br/>Oder nach Absprache <br/><br/><b>Absprachen über: </b>02653/7169741</p>
          </div>
          <div className='info-text'>
            <h2>Wichtige Links</h2>
            <a href="#Impressum"><b>Impressum</b></a><br/>
            <a href="#Datenschutz"><b>Datenschutz</b></a><br/>
            <a href="#UeberUns"><b>Über uns</b></a><br/>
            <a href="#Kontakte"><b>Kontakte</b></a><br/>
            <a href="#Vereinssatzung"><b>Vereinssatzung</b></a><br/>
            <a href="#Mitgliedwerden"><b>Mitglied werden</b></a>
          </div>
          <div className='tus_footer_image'>
            <img src={TuSLogo} alt='TusLogo'/>
          </div>
        </div>
        <div className='tus_footer_content_sponsors'>
          <img src = {SportstudioLogo} alt='Sportstudio'/>
          <img src = {JakoLogo} alt='JAKO'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
