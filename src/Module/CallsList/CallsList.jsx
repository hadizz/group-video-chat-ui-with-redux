import React, { useEffect, useState } from 'react'
import CallBox from '../Components/CallBox/CallBox'
import { useSelector } from 'react-redux'
import { selectCalls } from '../../Store/callsSlice'
import styles from './CallsList.module.css'

const CallsList = () => {
  const calls = useSelector(selectCalls)
  const [dim, setDim] = useState([450, 350])
  const [grid, setGrid] = useState([1, 1])

  useEffect(() => {
    const gridLimit = Math.ceil(Math.sqrt(calls.length))
    setGrid([gridLimit, gridLimit])
    if (gridLimit >= 3) {
      setDim([250, 150])
    }
  }, [calls])

  return (
    <div className={styles.xxx}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${grid[0]}, fit-content(150px))`,
          gridTemplateRows: `repeat(${grid[1]}, fit-content(150px))`,
          gridGap: '16px',
          justifyItems: 'center',
        }}
      >
        {calls.map((call, index) => (
          <CallBox
            call={call}
            key={call.id}
            index={index}
            width={dim[0]}
            height={dim[1]}
          />
        ))}
      </div>
    </div>
  )
}

export default CallsList
