import React, { useState } from 'react'

import * as styles from './Form.module.css'

const Form = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim() !== '') {
      //TODO: Add task to database
    }

    setInputValue('')
  }

  return (
    <form className={styles.Content} onSubmit={handleSubmit}>
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
