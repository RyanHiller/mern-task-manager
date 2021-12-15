import React from 'react'

import { TaskContext } from '../../App'
import Task from '../Task/Task'

import * as styles from './TaskList.module.css'

const TaskList = () => {
  const taskContext = React.useContext(TaskContext)

  const taskList = taskContext.tasks.map((task, idx) => {
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
