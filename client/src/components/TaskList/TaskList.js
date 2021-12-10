import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Task from '../Task/Task'

import * as styles from './TaskList.module.css'

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/tasks')
      setTasks(res.data.tasks)
      console.log(res.data.tasks)
    } catch (err) {
      console.log(err)
    }
  }

  // Populate tasks list from database
  useEffect(() => {
    fetchData()
  }, [])

  let taskList = tasks.map((task, idx) => {
    return (
      <Task
        key={idx}
        name={task.name}
        id={task._id}
        completed={task.completed}
      />
    )
  })

  return <ul className={styles.Container}>{taskList}</ul>
}

export default TaskList
