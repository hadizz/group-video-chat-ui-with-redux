import React, { useEffect, useState } from 'react'
import CallBox from '../Components/CallBox/CallBox'
import { useSelector } from 'react-redux'
import { selectCalls } from '../../Store/callsSlice'
import styles from './CallsList.module.css'

const CallsList = () => {
  const calls = useSelector(selectCalls)

  const MAX_WIDTH = 4,
    MAX_HEIGHT = 4

  const [grid, setGrid] = useState({ row: 2, column: 2 })

  const generateRow = () => {
    // if (calls.length < MAX_WIDTH / 2) {
    //   setGrid({ row: MAX_WIDTH / 2, column: MAX_WIDTH / 2 })
    // } else {
    //     setGrid({ row: MAX_WIDTH / 2 + 1, column: MAX_WIDTH / 2 })
    // }
        setGrid({ row: 3, column: 3 })
  }

  useEffect(() => {
    generateRow()
  }, [calls.length])

  return (
    <div className={styles.wrap}>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${grid.row}, 1fr)`,
          gridTemplateColumns: `repeat(${grid.column}, 1fr)`,
          gridGap: '8px',
        }}
      >
        {calls.map((call, index) => (
          <CallBox call={call} key={call.id} index={index} />
        ))}
      </div>
    </div>
  )
}

export default CallsList
