import React from 'react'
import styles from './Bottom.module.css'
import IconButton from '../Components/IconButton/IconButton'
import generateClassName from '../../Utils/dom';

const Bottom = () => {
  return (
    <div className={generateClassName([styles.root, "d-flex flex-over-center"])}>
      <IconButton iconName="no-voice" color="gray" />
      <div className="mx-24">
          <IconButton iconName="call" size="large" color="red" />
      </div>
      <IconButton iconName="no-call" color="gray" />
    </div>
  )
}

export default Bottom
