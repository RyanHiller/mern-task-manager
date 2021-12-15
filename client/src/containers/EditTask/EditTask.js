import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { TaskContext } from '../../App'

import * as styles from './EditTask.module.css'

const EditTask = () => {
  const [id, setID] = React.useState('')
  const [name, setName] = React.useState('')
  const [completed, setCompleted] = React.useState(false)
  const navigate = useNavigate()
  const taskContext = React.useContext(TaskContext)

  // update fields whenever global context editTask is changed
  React.useEffect(() => {
    setID(taskContext.editTask.id)
    setName(taskContext.editTask.name)
    setCompleted(taskContext.editTask.completed)
  }, [taskContext.editTask])

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleCompletedChange = (event) => {
    setCompleted(!completed)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const originalTask = taskContext.tasks.find((el) => el._id === id)
    const newTask = { name: name, completed: completed }
    if (
      !(
        originalTask.name === newTask.name &&
        originalTask.completed === newTask.completed
      )
    ) {
      try {
        await axios.patch(`http://localhost:3001/api/tasks/${id}`, {
          name: name,
          completed: completed,
        })
        taskContext.updateTasks()
      } catch (err) {
        console.error(err)
      }
    }
    taskContext.setEditTask({})
    navigate('/')
  }

  return (
    <form className={styles.Container} onSubmit={handleSubmit}>
      <h1 className={styles.Title}>Edit Task</h1>
      <div className={styles.EditFields}>
        <label htmlFor='id'>Task ID</label>
        <p id='id' name='id' className={styles.IDValue}>
          {id}
        </p>

        <label htmlFor='name'>Name</label>
        <input
          className={styles.NameInput}
          type='text'
          id='name'
          name='name'
          onChange={handleNameChange}
          placeholder='Loading...'
          value={name}
        />

        <label htmlFor='completed'>Completed</label>
        <input
          checked={completed}
          className={styles.CompletedInput}
          id='completed'
          name='completed'
          onChange={handleCompletedChange}
          type='checkbox'
        />
      </div>
      <button className={styles.Submit} type='submit'>
        Edit
      </button>
    </form>
  )
}

export default EditTask
