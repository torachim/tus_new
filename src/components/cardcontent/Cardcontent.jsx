import React from 'react'
import './Cardcontent.css'


const Cardcontent = ({Bild,altText,link,buttontext}) => {
  return (
    <div className='cardcontent_base'>
        <div className='cardcontent_image'>
           <img src={Bild} alt={altText}/> 
        </div>
        <div className='cardcontent_button'>
          <button type="button"><a href ={link}>{buttontext}</a></button>
        </div>
    </div>
  )
}

export default Cardcontent



