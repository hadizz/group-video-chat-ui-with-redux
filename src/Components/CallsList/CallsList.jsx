import React, {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import styles from "./CallsList.module.css";
import CallBox from "../CallBox/CallBox";
import {useDispatch, useSelector} from "react-redux";
import {selectCalls, onDragEnd} from "../../Store/callsSlice";

const CallsList = (props) => {
    const people = useSelector(selectCalls);
    const dispatch = useDispatch();

    return (
        <DragDropContext
            onDragEnd={result => dispatch(onDragEnd(result))}
        >
            <Droppable droppableId={"0"}>
                {provided => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {
                            people.map((person, index) =>
                                <CallBox person={person} key={person.id} index={index}/>
                            )
                        }
                        {provided.placeholder}
                    </div>)}
            </Droppable>
        </DragDropContext>
    );
};

export default CallsList;
