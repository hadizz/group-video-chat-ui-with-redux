import React from 'react'
import Header from './Header/Header'
import CallsList from './CallsList/CallsList'
import Bottom from './Bottom/Bottom'
import generateClassName from '../Utils/dom'
import styles from './Container.module.css'

const Container = () => {
  return (
    <div
      className={generateClassName([
        'd-flex flex-column flex-x-between',
        styles.root,
      ])}
    >
      <Header />
      <CallsList />
      <Bottom />
    </div>
  )
}

export default Container
