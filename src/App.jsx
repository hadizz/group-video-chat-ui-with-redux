import React from 'react'
import CallsList from './Components/CallsList/CallsList'
import styles from './App.module.css'
import generateClassName from './utils/dom'
import UniClient from '../src/Resources/Images/UniClient.svg'
import Clock from '../src/Resources/Images/Clock.svg'

function App() {
  return (
    <div
      className={generateClassName([
        'h100vh d-flex flex-column flex-x-between',
        styles.root,
      ])}
    >
      <div className={styles.header}>
        <img className={styles.logo} src={UniClient} alt="uni client image" />
        <span className="mr-16">Case Of Kennedy Murder</span>
        <div className="pt-4 mr-8">
          <img src={Clock} alt="clock image" />
        </div>
        <span className={styles.time}>(45:32)</span>
      </div>
      <CallsList />
      <div className={styles.bottom}>bottom</div>
    </div>
  )
}

export default App
