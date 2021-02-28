import React from 'react'
import styles from './Bottom.module.css'
import IconButton from '../Components/IconButton/IconButton'
import generateClassName from '../../Utils/dom'
import { useDispatch } from 'react-redux'
import { addCall } from '../../Store/callsSlice'

const Bottom = () => {
  const dispatch = useDispatch()

  return (
    <div
      className={generateClassName([styles.root, 'd-flex flex-over-center'])}
    >
      <IconButton iconName="no-voice" color="gray" />
      <div className="mx-24">
        <IconButton
          iconName="call"
          size="large"
          color="red"
          onClick={() => dispatch(addCall())}
        />
      </div>
      <IconButton iconName="no-video" color="gray" hasBadge/>
    </div>
  )
}

export default Bottom
