import { createSlice } from '@reduxjs/toolkit';

export const callsSlice = createSlice({
  name: 'calls',
  initialState: {
      items: [
          {id: '0', name: 'sara'},
          {id: '1', name: 'jessy'},
          {id: '2', name: 'john'},
          {id: '3', name: 'tommy'},
      ],
  },
  reducers: {
    onDragEnd: (state, action) => {
      // state.items += 1;

        const { destination, source } = action.payload;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // const draggingObject = state.items[source.index];
        // state.items[source.index] = state.items[destination.index];
        // state.items[destination.index] = draggingObject;


        const draggingObject = state.items[source.index];
        state.items.splice(source.index, 1);
        state.items.splice(destination.index, 0, draggingObject);

        // const column = this.state.columns[source.droppableId];
        // const newTaskIds = Array.from(column.taskIds);
        // newTaskIds.splice(source.index, 1);
        // newTaskIds.splice(destination.index, 0, draggableId);
        //
        // const newColumn = {
        //     ...column,
        //     taskIds: newTaskIds,
        // };
        //
        // const newState = {
        //     ...this.state,
        //     columns: {
        //         ...this.state.columns,
        //         [newColumn.id]: newColumn,
        //     },
        // };
        //
        // this.setState(newState);
    },
  },
});

export const { onDragEnd } = callsSlice.actions;

export const selectCalls = state => state.calls.items;

export default callsSlice.reducer;
