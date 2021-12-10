import React from 'react'
import axios from 'axios'

import Task from '../Task/Task'

import * as styles from './TaskList.module.css'

const TaskList = (props) => {
  const [tasks, setTasks] = React.useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/tasks')
      setTasks(res.data.tasks)
    } catch (err) {
      console.log(err)
    }
  }

  // Populate tasks list from database
  React.useEffect(() => {
    //fetchData()
  }, [])

  let taskList = props.tasks.map((task, idx) => {
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
