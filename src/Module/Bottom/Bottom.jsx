import React from 'react'
import styles from './Bottom.module.css'
import IconButton from '../Components/IconButton/IconButton'
import generateClassName from '../../Utils/dom'
import { useDispatch, useSelector } from 'react-redux';
import { addCall, changeSelfCallModuleStat, selectSelfCall } from '../../Store/callsSlice';

const Bottom = () => {
  const selfCall = useSelector(selectSelfCall)
  const dispatch = useDispatch()

  return (
    <div
      className={generateClassName([styles.root, 'd-flex flex-over-center'])}
    >
      <IconButton iconName="no-voice" color={selfCall.isMute ? 'red': 'gray'} onClick={() => {
        dispatch(changeSelfCallModuleStat({module: "isMute"}))
      }} />
      <div className="mx-24">
        <IconButton
          iconName="call"
          size="large"
          color="red"
          onClick={() => dispatch(addCall())}
        />
      </div>
      <IconButton iconName="no-video" color={selfCall.isCameraOff ? 'red': 'gray'} hasBadge onClick={() => {
        dispatch(changeSelfCallModuleStat({module: "isCameraOff"}))
      }}/>
    </div>
  )
}

export default Bottom
