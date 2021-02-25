import React from 'react'
import CallsList from './Components/CallsList/CallsList'
import styles from './App.module.css'
import generateClassName from './utils/dom'
import Header from './Components/Header/Header'

function App() {
  return (
    <div
      className={generateClassName([
        'h100vh d-flex flex-column flex-x-between',
        styles.root,
      ])}
    >
      <Header />
      <CallsList />
      <div className={styles.bottom}>bottom</div>
    </div>
  )
}

export default App
