import './App.css'
import { useToggle } from './useToggle'

function App() {
 const [isVisible, toggle] = useToggle()

  return (
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? 'hide' : 'show'}
      </button>
      {isVisible && <h1> Hidden Text </h1>}
    </div>
  )
}

export default App
