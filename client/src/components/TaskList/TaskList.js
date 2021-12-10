import React from 'react'

import Task from '../Task/Task'

import * as styles from './TaskList.module.css'

const TaskList = (props) => {
  const taskList = props.tasks.map((task, idx) => {
    return (
      <Task
        key={idx}
        name={task.name}
        id={task._id}
        completed={task.completed}
        updateTasks={props.updateTasks}
      />
    )
  })

  return <ul className={styles.Container}>{taskList}</ul>
}

export default TaskList
