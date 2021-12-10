import React from 'react'
import axios from 'axios'

import Form from './components/Form/Form'
import TaskList from './components/TaskList/TaskList'

import * as styles from './App.module.css'

const App = () => {
  const [tasks, setTasks] = React.useState([])
  const [update, setUpdate] = React.useState(false)

  const getTasks = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/tasks')
      setTasks(res.data.tasks)
    } catch (err) {
      console.error(err)
    }
  }

  // passed to Form component for update on submit
  const updateTasks = () => {
    setUpdate(!update)
  }

  React.useEffect(() => {
    getTasks()
  }, [update])

  return (
    <div className={styles.Container}>
      <Form updateTasks={updateTasks} />
      <TaskList tasks={tasks} updateTasks={updateTasks} />
    </div>
  )
}

export default App
