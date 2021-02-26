import React from 'react'
import CallBox from '../Components/CallBox/CallBox'
import { useSelector } from 'react-redux'
import { selectCalls } from '../../Store/callsSlice'
import styles from './CallsList.module.css'

const CallsList = () => {
  const calls = useSelector(selectCalls)

  return (
    <div className={styles.wrap}>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(2, 1fr)',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: '8px',
        }}
      >
        {calls.map((call, index) => (
          <div>
            <CallBox call={call} key={call.id} index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CallsList
