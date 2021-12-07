import React, { useState } from 'react'

import * as styles from './Main.module.css'

const Main = () => {
  const [taskInput, setTaskInput] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    if (taskInput.trim() !== '') {
      //TODO: Add task to database
    }
    setTaskInput('')
  }

  return (
    <div className={styles.content}>
      <h1>Task Manager</h1>
      <input
        type='text'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Submit</button>
    </div>
  )
}

export default Main
