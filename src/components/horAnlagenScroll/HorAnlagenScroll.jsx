import React, { useState } from 'react'
import Stadionbild from '../../assets/Sportplatz.jpeg'
import Waldsportplatz from '../../assets/Waldsportplatz.jpeg'
import Tennisplatz from '../../assets/Tennisball.jpeg'
import MeGeHa from '../../assets/mgh.jpeg'
import Sporthalle from '../../assets/sporthalle.jpeg'
import './HorAnlagenScroll.css'

const HorAnlagenScroll = () => {
  return (
    <div>
       HorAnlagenScroll
    </div>
  )
}

export default HorAnlagenScroll

const Anlagen = [
    {
        Name: "Stadion",
        Beschreibung: "Das Stadion. Hier findet hauptsächlich das Leichtathletik- \n und Fußballtraining statt.",
        Bild: Stadionbild,
    },
    {
        Name: "Waldsportplatz",
        Beschreibung: "Der Waldsportplatz. Hier finden hauptsächlich Fußballtraing \n und Fußballspiele statt. Auch der Jährliche Crosslauf startet hier.",
        Bild: Waldsportplatz,
    },
    {
        Name: "Tennisplätze",
        Beschreibung: "Die Tennisplätze. Aktuell stehen 2 Sandplätze für Tennistraining \n und Tennisspiele zur verfügung.",
        Bild: Tennisplatz,
    },
    {
        Name: "Mehr-Generationen-Haus",
        Beschreibung: "Das Mehr-Generationen-Haus. Im MGH treffen sich die Tischfußballer \n für ihr Training.",
        Bild: MeGeHa,
    },
    {
        Name: "Sporthalle",
        Beschreibung: "Die Sporthalle. Hier findet verschiedenen Training statt. Basketball, \n Handball, Volleyball und vieles mehr Trainieren hier.",
        Bild: Sporthalle,
    },
]
