import React, { useState } from 'react'
import Stadionbild from '../../assets/Sportplatz.jpeg'
import Waldsportplatz from '../../assets/Waldsportplatz.jpeg'
import Tennisplatz from '../../assets/Tennisball.jpeg'
import MeGeHa from '../../assets/mgh.jpeg'
import Sporthalle from '../../assets/sporthalle.jpeg'
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl'
import './HorAnlagenScroll.css'
import { Slides } from '../../components'



const HorAnlagenScroll = () => {

    let cards = Anlagen.map((anlage, index) =>
    <Slides key={index} anlage={anlage} />
    );

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstCard = currentIndex === 0;
        const newIndex = isFirstCard ? cards.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastCard = currentIndex === cards.length - 1;
        const newIndex = isLastCard ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='carousel_and_indicators'>
            <div className="carousel">
                <button className="carousel-button" onClick={goToPrevious}><SlArrowLeft/></button>
                <div className="carousel-card">
                    {cards[currentIndex]}
                </div>
                <button className="carousel-button" onClick={goToNext}><SlArrowRight/></button>
            </div>
            <div className="carousel-indicators">
                    {cards.map((card, index) => (
                        <span
                            key={index}
                            className={`carousel-indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => goToIndex(index)}
                        ></span>
                    ))}
                </div>
        </div>
    );

};

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
];
