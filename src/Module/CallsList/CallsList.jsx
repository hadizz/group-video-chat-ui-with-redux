import React from 'react'
import CallBox from '../Components/CallBox/CallBox'
import { useDispatch, useSelector } from 'react-redux'
import { onDragEnd, selectCalls } from '../../Store/callsSlice'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styles from './CallsList.module.css'
import DragItem from '../Components/DragItem/DragItem'
import { GridItem } from '../Components/GridItem/GridItem';

const CallsList = () => {
  const people = useSelector(selectCalls)
  const dispatch = useDispatch()

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.grid}>
        {people.map((person, index) => (
          <DragItem key={person.id} id={person.id} onMoveItem={(start, end) => dispatch(onDragEnd({start, end}))}>
             <GridItem>
                  <CallBox person={person} key={person.id} index={index} />
             </GridItem>
          </DragItem>
        ))}
      </div>
    </DndProvider>
  )
}

export default CallsList