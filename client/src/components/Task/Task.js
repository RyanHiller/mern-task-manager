import React from 'react'
import axios from 'axios'

import { IconContext } from 'react-icons/lib'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

import * as styles from './Task.module.css'

const Task = (props) => {
  const toggleCompleted = async () => {
    try {
      await axios.patch(`http://localhost:3001/api/tasks/${props.id}`, {
        completed: !props.completed,
      })
      props.updateTasks()
    } catch (err) {
      console.error(err)
    }
  }

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/tasks/${props.id}`)
      props.updateTasks()
    } catch (err) {
      console.error(err)
    }
  }

  const completedIconValues = props.completed
    ? { color: 'green', size: '1.5em', style: { cursor: 'pointer' } }
    : { color: '#999', size: '1.5em', style: { cursor: 'pointer' } }

  const completedNameStyle = props.completed
    ? `${styles.Name} ${styles.Completed}`
    : styles.Name

  return (
    <li className={styles.Container}>
      <IconContext.Provider value={completedIconValues}>
        <AiOutlineCheckCircle onClick={toggleCompleted} />
      </IconContext.Provider>
      <h2 className={completedNameStyle}>{props.name || 'Loading...'}</h2>
      <div className={styles.Controls}>
        <IconContext.Provider
          value={{ size: '1.5em', style: { cursor: 'pointer' } }}
        >
          <FiEdit />
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
