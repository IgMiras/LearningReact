import './App.css'
import Axios from 'axios'
import { useState } from 'react'

function App() {
  const [excuse, setExcuse] = useState('')

  const fetchData = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`)
    .then((res) => {
      console.log(res.data[0].excuse)
      setExcuse(res.data[0].excuse)
    })
  }
  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => fetchData('party')}> Party </button>
      <button onClick={() => fetchData('family')}> Family </button>
      <button onClick={() => fetchData('office')}> Office </button>
      <h2 className='excuse'> {excuse} </h2>
    </div>
  )
}

export default App