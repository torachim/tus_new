import React, { useState } from 'react'
import Stadionbild from '../../assets/Sportplatz.jpeg'
import Waldsportplatz from '../../assets/Waldsportplatz.jpeg'
import Tennisplatz from '../../assets/Tennisball.jpeg'
import MeGeHa from '../../assets/mgh.jpeg'
import Sporthalle from '../../assets/sporthalle.jpeg'
import './HorAnlagenScroll.css'
import { Slides } from '../../components'

const HorAnlagenScroll = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  
  const updateIndex = (newIndex) => {
    if (newIndex < 0){
        newIndex = 0;
    }
    else if (newIndex >= Anlagen.length){
        newIndex = Anlagen.length -1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className='carousel'>
        <div className='carousel-inner'
             style={{transform: `translate(-${activeIndex * 100}%)`
             }}>
            {Anlagen.map((anlage) =>{
                return <Slides Bild={anlage.Bild} Name={anlage.Name} Beschreibung={anlage.Beschreibung}/>
            })}
        </div>

        <div className='carousel-buttons'>
            <button className='button-arrow' onClick={() => {
                updateIndex(activeIndex-1);
            }}>
                <span className='material-aymbols-outlines'>arrow_back_ios</span>{" "}
            </button>
            <div className='indicators'>
                {Anlagen.map((anlage, index) => {
                    return (
                        <button className='indicator-buttons' onClick={() => {
                            updateIndex(index);
                        }}>
                            <span className={`material-symbols-outlined ${
                                index === activeIndex
                                ? "indicator-symbol-active"
                                : "indicator-symbol"
                            }`}>
                                radio_button_checked
                            </span>
                        </button>
                    );
                })}
            </div>
            <button className='button-arrow'
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}>
                <span className='material-symbols-outlined'>arrow_forward_ios</span>
            </button>
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
