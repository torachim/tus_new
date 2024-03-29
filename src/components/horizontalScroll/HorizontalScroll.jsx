import { React, useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import './HorizontalScroll.css'
import { Hovercard } from '../../components'
import { TbPlayFootball, TbRun, TbPlayBasketball, TbPlayHandball, TbPlayVolleyball, TbSoccerField} from 'react-icons/tb'
import { MdSportsGymnastics, MdSportsKabaddi, MdSportsTennis } from 'react-icons/md'
import { FaTableTennisPaddleBall } from "react-icons/fa6";

const HorizontalScroll = () => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["5%", "-50"]);

  return (
    <section ref={targetRef} className='hor_scroller'>
      <div className='hor_scroller_div'>
        <motion.div style={{ x }} className='hor_scroller_motion'>
          {cards.map((card) => {
            return <Hovercard Bild={card.bild} Link={card.link} ButtonText={card.button_text}/>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default HorizontalScroll

const cards = [
  {
    bild: <TbPlayFootball/>,
    link: '#Fußball',
    button_text: 'Fußball',
  },
  {
    bild: <MdSportsGymnastics/>,
    link: '#Turnen',
    button_text: 'Turnen',
  },
  {
    bild: <TbRun/>,
    link: '#Leichtathletik',
    button_text: 'Leichtathletik',
  },
  {
    bild: <TbPlayBasketball/>,
    link: '#Basketball',
    button_text: 'Basketball',
  },
  {
    bild: <TbPlayHandball/>,
    link: '#Handball',
    button_text: 'Handball',
  },
  {
    bild: <MdSportsTennis/>,
    link: '#Tennis',
    button_text: 'Tennis',
  },
  {
    bild: <FaTableTennisPaddleBall/>,
    link: '#Tischtennis',
    button_text: 'Tischtennis',
  },
  {
    bild: <TbPlayVolleyball/>,
    link: '#Volleyball',
    button_text: 'Volleyball',
  },
  {
    bild: <MdSportsKabaddi/>,
    link: '#Judo',
    button_text: 'Judo',
  },
  {
    bild: <TbSoccerField/>,
    link: '#Tischfußball',
    button_text: 'Tischfußball',
  },
]
 