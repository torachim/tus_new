import React from 'react'
import { TbPlayFootball } from 'react-icons/tb'
import './Hovercard.css'

const hovercard = ({Bild, Link, ButtonText}) => {
  return (
    <div className='card-background'>
        <div className='card-info'>
            <div className='card-top-image'>
                {Bild}
            </div>
            <div className='card-info-button'>
                <button type='button'><a href={Link}>{ButtonText}</a></button>
            </div>
        </div>  
    </div>
  )
}

export default hovercard



