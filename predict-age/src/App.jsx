import './App.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [age, setAge] = useState(0)
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data.age)
    })
  }

  return (
    <div className="App">
      <input type="text" placeholder='Ex. Igor...' onChange={handleChange} />
      <button onClick={fetchData}> Predict Age </button>

      <h1> Predicted Age: {age} </h1>
    </div>
  )
}

export default App