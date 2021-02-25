import React from 'react'
import CallsList from './Components/CallsList/CallsList'
import styles from './App.module.css'
import generateClassName from './utils/dom'
import Header from './Components/Header/Header'
import Bottom from './Components/Bottom/Bottom';

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
      <Bottom />
    </div>
  )
}

export default App
