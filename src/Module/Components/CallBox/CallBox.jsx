import React from 'react'
import styles from './CallBox.module.css'
import generateClassName from '../../../Utils/dom'
import IconButton from '../IconButton/IconButton'
import { useDispatch } from 'react-redux'
import { onDrop } from '../../../Store/callsSlice'

const CallBox = (props) => {
  const dispatch = useDispatch()

  return (
    <div
      style={{
        ...(props.call.isMobile
          ? { height: 340, width: 250 }
          : { height: 340, width: 450 }),
      }}
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
      <div
        style={{
          width: '100%',
          height: '100%',
          background: `url(${props.call.image}) center / cover no-repeat`,
        }}
      />
      <div className={generateClassName(['d-flex flex-x-center', styles.test])}>
        <div className="chips">{props.call.name}</div>
        <IconButton
          iconName="no-voice"
          size="small"
          color="red50"
          iconColor="red"
        />
      </div>
    </div>
  )
}

export default CallBox
