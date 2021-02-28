import React, { useState } from 'react'
import styles from './CallBox.module.css'
import generateClassName from '../../../Utils/dom'
import IconButton from '../IconButton/IconButton'
import { useDispatch } from 'react-redux'
import { onDrop } from '../../../Store/callsSlice'

const CallBox = (props) => {
  const dispatch = useDispatch()
  const [mouseIn, setMouseIn] = useState(false)

  const showMic = () => {
    if (mouseIn && props.call.isMute) {
      return (
        <div className="mr-8">
          <IconButton
            iconName="no-voice"
            size="small"
            color="red50"
            iconColor="red"
          />
        </div>
      )
    }
  }

  const showCamera = () => {
    if (mouseIn && props.call.isCameraOff) {
      return (
        <IconButton
          iconName="no-video"
          size="small"
          color="red50"
          iconColor="red"
        />
      )
    }
  }

  return (
    <div
      style={{
        height: props.height, // 450
        width: props.width, //350
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
      className={styles.root}
      onDragStart={(ev) => ev.dataTransfer.setData('id', props.call.id)}
      onDragOver={(ev) => ev.preventDefault()}
      onDrop={(ev) =>
        dispatch(
          onDrop({ start: ev.dataTransfer.getData('id'), dest: props.call.id })
        )
      }
      draggable
    >
      <img
        height="100%"
        src={props.call.image}
        alt={props.call.name}
        style={{
          ...(props.call.isMobile ? { margin: 'auto' } : {}),
        }}
      />
      <div className={generateClassName(['d-flex flex-x-center', styles.box])}>
        <div className="chips">{props.call.name}</div>
        <div className={styles.btns}>
          {showMic()}
          {showCamera()}
        </div>
      </div>
    </div>
  )
}

export default CallBox
