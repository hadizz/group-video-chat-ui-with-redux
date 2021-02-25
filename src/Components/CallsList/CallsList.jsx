import React from 'react'
import CallBox from '../CallBox/CallBox'
import { useDispatch, useSelector } from 'react-redux'
import { selectCalls } from '../../Store/callsSlice'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styles from './CallsList.module.css'
import DragItem from '../DragItem/DragItem'
import { GridItem } from '../GridItem/GridItem';

const CallsList = (props) => {
  const people = useSelector(selectCalls)
  const dispatch = useDispatch()

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.grid}>
        {people.map((person, index) => (
          <DragItem key={person.id} id={person.id} onMoveItem={props => console.log(props)}>
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
