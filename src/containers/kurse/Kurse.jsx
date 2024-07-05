import React from 'react'
import './Kurse.css'
import Platzhalterkursebild from '../../assets/PlatzhalterKurse.jpeg'


const Kurse = () => {
  return (
    <div className='tus_kurse'>
        <div className='tus_kurse_img'>
            <img src={Platzhalterkursebild} alt='Kuse' />
        </div>
        <div className='tus_kurse_content'>
            <h1 className='gradient__text'>KURSE</h1>
            <p>Neben Sport in den unterschiedlichen Abteilungen<br/>
               Bieten wir auch zahlreiche Kurse an<br/>
               In denen du dich sportlich betätigen kannst!
            </p>
            <div className='tus_kurse_content_button'>
                <button type= "button"><a href='#Kurse'>Zu den Kursen</a></button>
            </div>
        </div>
    </div>
  )
}

export default Kurse
