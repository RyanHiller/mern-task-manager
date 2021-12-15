import React from 'react'
import Form from '../../components/Form/Form'
import TaskList from '../../components/TaskList/TaskList'

import * as styles from './Main.module.css'

const Main = () => (
  <div className={styles.Container}>
    <Form />
    <TaskList />
  </div>
)

export default Main
