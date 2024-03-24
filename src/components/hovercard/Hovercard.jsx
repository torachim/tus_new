import React from 'react'
import { TbPlayFootball } from 'react-icons/tb'
import './Hovercard.css'

const hovercard = () => {
  return (
    <div className='card-background'>
        <div className='card-info'>
            <div className='card-top-image'>
                <TbPlayFootball />
            </div>
            <div className='card-info-button'>
                <button type='button'><a href='#Fußball'>Fußball</a></button>
            </div>
        </div>  
    </div>
  )
}

export default hovercard



