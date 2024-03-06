import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css'
import logo from '../../assets/Logo.png'

const AbteilungMenu = () => (
  <>
      <p><a href = "#Basketball">Basketball</a></p>
      <p><a href = "#Fußball">Fußball</a></p>
      <p><a href = "#Handball">Handball</a></p>
      <p><a href = "#Judo">Judo</a></p>
      <p><a href = "#Leiichtathletik">Leichtathletik</a></p>
      <p><a href = "#Tennis">Tennis</a></p>
      <p><a href = "#Tischfußball">Tischfußball</a></p>
      <p><a href = "#Tischtennis">Tischtennis</a></p>
      <p><a href = "#Turnen">Turnen</a></p>
      <p><a href = "#Volleyball">Volleyball</a></p>
  </>
)

const KurseMenu = () => (
  <>
      <p><a href = "#Aktivsport">Aktivsport</a></p>
      <p><a href = "#Ballet">Ballet</a></p>
      <p><a href = "#Bewegungsfoerderung">Bewegungsförderung</a></p>
      <p><a href = "#Breakletics">Breakletics</a></p>
      <p><a href = "#Dance-Fitness">Dance-Fitness</a></p>
      <p><a href = "#Dance-Workout">Dance-Workout</a></p>
      <p><a href = "#FitUndFunky">Fit & Funky</a></p>
      <p><a href = "#FitForFun">Fit for Fun</a></p>
      <p><a href = "#HipHop">Hip Hop</a></p>
      <p><a href = "#Kleinkinderturnen">Kleinkinderturnen</a></p>
      <p><a href = "#Linedance">Linedance</a></p>
      <p><a href = "#Pilatis">Pilatis</a></p>
      <p><a href = "Powerworkout">Powerworkout</a></p>
  </>
)

const AnlagenMenu = () => (
  <>
      <p><a href = "#MehrGenerationenHaus">Mehr-Generationen-Haus</a></p>
      <p><a href = "#Stadion">Stadion</a></p>
      <p><a href = "#Sporthalle">Sporthalle</a></p>
      <p><a href = "#Waldsportplatz">Waldsportplatz</a></p>
      <p><a href = "#Tennisplatz">Tennisplatz</a></p>
  </>
)

const Menu = () => (
  <>
  <p><a href = "#Abteilungen">Abteilungen</a>
    <div className = "tus__navbar-links_container-drpdn scale-up-ver-top">
      <AbteilungMenu />
    </div>
  </p>
  <p><a href = "#Kurse">Kurse</a>
  <div className = "tus__navbar-links_container-drpdn scale-up-ver-top">
      <KurseMenu />
    </div>
  </p>
  <p><a href = "#Anlagen">Anlagen</a>
    <div className = "tus__navbar-links_container-drpdn scale-up-ver-top">
        <AnlagenMenu />
    </div>
  </p>
  <p><a href = "#Mitgliedschaft">Mitgliedschaft</a></p>
  <p><a href = "#Überuns">Über uns</a></p>
  <p><a href = "#Kontak">Kontakt</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className = "tus__navbar">
      <div className = "tus__navbar-links">
        <div className = "tus__navbar-links-logo">
          <img src = {logo} alt= "logo" />
        </div>
        <div className = "tus__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className = "tus__navbar-menu">
        {toggleMenu
         ? <RiCloseLine color = "#222" size = {27} onClick = {() => setToggleMenu(false)}/>
         : <RiMenu3Line color = "#222" size = {27} onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className = "tus__navbar-menu_container scale-up-center">
            <div className = "tus__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
