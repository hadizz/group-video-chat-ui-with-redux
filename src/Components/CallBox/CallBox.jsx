import React from 'react';
import {Draggable} from "react-beautiful-dnd"


const CallBox = (props) => {
    return (
        <Draggable draggableId={props.person.id} index={props.index}>
            {
                provided => (
                    <div
                        className="p-8 bordered radius-8"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {props.person.name}
                    </div>
                )
            }
        </Draggable>
    );
};

export default CallBox;
