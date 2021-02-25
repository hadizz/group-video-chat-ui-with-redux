import React from 'react'
import styles from './Bottom.module.css'
import IconButton from '../Components/IconButton/IconButton'

const Bottom = () => {
  return (
    <div className={styles.root}>
      bottom
      <IconButton iconName="call" size="small" color="red50" iconColor='red' onClick={e => console.log(e)}/>
      <IconButton iconName="call" size="medium" color="red" onClick={e => console.log(e)}/>
      <IconButton iconName="call" size="large" color="red" onClick={e => console.log(e)}/>
      <IconButton iconName="no-voice" size="small" color="red50" iconColor='red' onClick={e => console.log(e)}/>
      <IconButton iconName="no-voice" size="medium" color="red" onClick={e => console.log(e)}/>
      <IconButton iconName="no-voice" size="large" color="red" onClick={e => console.log(e)}/>
      <IconButton iconName="no-video" size="small" color="red" onClick={e => console.log(e)}/>
      <IconButton iconName="no-video" size="medium" color="red" onClick={e => console.log(e)}/>
      <IconButton iconName="no-video" size="large" color="red" onClick={e => console.log(e)}/>
    </div>
  )
}

export default Bottom
