import React from 'react'
import axios from 'axios'

import { TaskContext } from '../../App'

import * as styles from './Form.module.css'

const Form = () => {
  const [inputValue, setInputValue] = React.useState('')
  const taskContext = React.useContext(TaskContext)

  const createTask = async (name) => {
    try {
      await axios.post('http://localhost:3001/api/tasks', {
        name,
      })
      taskContext.updateTasks()
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim() !== '') {
      createTask(inputValue.trim())
    }
    setInputValue('')
  }

  return (
    <form className={styles.Container} onSubmit={handleSubmit}>
      <h1 className={styles.Title}>Task Manager</h1>
      <div className={styles.FormControl}>
        <input
          className={styles.FormInput}
          type='text'
          name='name'
          placeholder='e.g. Walk the dog'
          onChange={handleChange}
          value={inputValue}
        />
        <button className={styles.FormSubmit} type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
