import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Main from './containers/Main/Main'
import EditTask from './containers/EditTask/EditTask'

import * as styles from './App.module.css'

export const TaskContext = React.createContext()

const App = () => {
  const [tasks, setTasks] = React.useState([])
  const [update, setUpdate] = React.useState(false)
  const [editTask, setEditTask] = React.useState({})

  const getTasks = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/tasks')
      setTasks(res.data.tasks)
    } catch (err) {
      console.error(err)
    }
  }

  // used to re-render app and re-fetch db entries
  const updateTasks = () => {
    setUpdate(!update)
  }
  React.useEffect(() => {
    getTasks()
  }, [update])

  return (
    <TaskContext.Provider value={{ tasks, editTask, setEditTask, updateTasks }}>
      <div className={styles.Container}>
        <Router>
          <Routes>
            <Route path='/' element={<Main tasks={tasks} />} />
            <Route path='edit' element={<EditTask />} />
          </Routes>
        </Router>
      </div>
    </TaskContext.Provider>
  )
}

export default App
