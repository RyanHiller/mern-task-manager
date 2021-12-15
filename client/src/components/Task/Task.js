import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { TaskContext } from '../../App'

import { IconContext } from 'react-icons/lib'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

import * as styles from './Task.module.css'

const Task = (props) => {
  const navigate = useNavigate()
  const taskContext = React.useContext(TaskContext)

  const toggleCompleted = async () => {
    try {
      await axios.patch(`http://localhost:3000/api/tasks/${props.id}`, {
        completed: !props.completed,
      })
      taskContext.updateTasks()
    } catch (err) {
      console.error(err)
    }
  }

  // creates a new object that is held in global context editTask
  const editTask = () => {
    taskContext.setEditTask({
      id: props.id,
      name: props.name,
      completed: props.completed,
    })
    navigate('edit')
  }

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/tasks/${props.id}`)
      taskContext.updateTasks()
    } catch (err) {
      console.error(err)
    }
  }

  const completedIconStyles = props.completed
    ? { color: 'green', size: '1.5em', style: { cursor: 'pointer' } }
    : { color: '#999', size: '1.5em', style: { cursor: 'pointer' } }

  const completedNameStyle = props.completed
    ? `${styles.Name} ${styles.Completed}`
    : styles.Name

  return (
    <li className={styles.Container}>
      <IconContext.Provider value={completedIconStyles}>
        <AiOutlineCheckCircle onClick={toggleCompleted} />
      </IconContext.Provider>
      <h2 className={completedNameStyle}>{props.name || 'Loading...'}</h2>
      <div className={styles.Controls}>
        <IconContext.Provider
          value={{ size: '1.5em', style: { cursor: 'pointer' } }}
        >
          <FiEdit onClick={editTask} />
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: '#cd2026',
            size: '1.5em',
            style: { cursor: 'pointer' },
          }}
        >
          <FiTrash2 onClick={deleteTask} />
        </IconContext.Provider>
      </div>
    </li>
  )
}

export default Task
