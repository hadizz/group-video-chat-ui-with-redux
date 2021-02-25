import { createSlice } from '@reduxjs/toolkit'

export const callsSlice = createSlice({
  name: 'calls',
  initialState: {
    items: [
      { id: '0', name: 'sara' },
      { id: '1', name: 'jessy' },
      { id: '2', name: 'john' },
      { id: '3', name: 'tommy' },
    ],
  },
  reducers: {
    onDragEnd: (state, action) => {
      const { destination, source } = action.payload

      if (!destination) {
        return
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return
      }

      const draggingObject = state.items[source.index]
      state.items.splice(source.index, 1)
      state.items.splice(destination.index, 0, draggingObject)
    },
  },
})

export const { onDragEnd } = callsSlice.actions

export const selectCalls = (state) => state.calls.items

export default callsSlice.reducer
