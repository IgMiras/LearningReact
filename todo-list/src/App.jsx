import { useState } from 'react'
import './App.css'
import './Task.css'
import Task from './Task'

function App() {
  const [text, setText] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleChange = (e) => {
    setText(e.target.value)
    console.log(text)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: text,
      completed: false
    }
    setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
    const updatedTodoList = todoList.filter(task => task.id !== id)
    setTodoList(updatedTodoList)
  }

  const completeTask = (id) => {
    const updatedTodoList = todoList.map((task) => {
      if (task.id === id){
        task.completed = true
        return task
      }
      return task
    })
    setTodoList(updatedTodoList)
  }
  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      <div className="addTask">
        <input type="text" onChange={handleChange} style={{fontSize: "50px"}}/>
        <button onClick={addTask} style={{fontSize: "50px"}}>Add Task</button> 
      </div>
      <div className='list'>
        {todoList.map((task, key) => {
          return <Task key={key} task={task} deleteTask={deleteTask} completeTask={completeTask}/>
        })}
      </div>
    </div>
  )
}

export default App
