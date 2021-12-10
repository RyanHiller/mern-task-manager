import React from 'react'
import { IconContext } from 'react-icons/lib'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

import * as styles from './Task.module.css'

const Task = (props) => {
  const completedValues =
    props.completed === true
      ? { color: 'green', size: '1.5em', style: { cursor: 'pointer' } }
      : { color: '#999', size: '1.5em', style: { cursor: 'pointer' } }

  return (
    <li className={styles.Container}>
      <IconContext.Provider value={completedValues}>
        <AiOutlineCheckCircle />
      </IconContext.Provider>
      <h2 className={styles.Name}>{props.name || 'Loading...'}</h2>
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
          <FiTrash2 />
        </IconContext.Provider>
      </div>
    </li>
  )
}

export default Task
