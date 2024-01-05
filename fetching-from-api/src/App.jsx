import { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'

function App() {
  const [catFact, setCatFact] = useState('')

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
    })
  }

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact </button>
      <h1> {catFact} </h1>
    </div>
  )
}

export default App