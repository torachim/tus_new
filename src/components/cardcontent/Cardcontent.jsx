import React from 'react'
import './Cardcontent.css'


const Cardcontent = ({Bild,altText,buttontext}) => {
  return (
    <div className='cardcontent_base'>
        <div className='cardcontent_image'>
           <img src={Bild} alt={altText}/> 
        </div>
        <button type="button">{buttontext}</button>
    </div>
  )
}

export default Cardcontent



