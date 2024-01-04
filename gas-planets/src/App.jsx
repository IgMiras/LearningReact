import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlanetCard from './PlanetCard'

const App = () => {
  return (
    <div>
      <PlanetCard name="Earth" isGasPlanet={false}></PlanetCard>
      <PlanetCard name="Venus" isGasPlanet={false}></PlanetCard> 
      <PlanetCard name="Mercury" isGasPlanet={false}></PlanetCard> 
      <PlanetCard name="Jupiter" isGasPlanet={true}></PlanetCard> 
      <PlanetCard name="Mars" isGasPlanet={false}></PlanetCard> 
      <PlanetCard name="Uranus" isGasPlanet={true}></PlanetCard> 
      <PlanetCard name="Saturn" isGasPlanet={true}></PlanetCard>
      <PlanetCard name="Neptune" isGasPlanet={true}></PlanetCard> 
    </div>
  )
}

export default App
