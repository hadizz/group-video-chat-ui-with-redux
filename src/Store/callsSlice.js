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
      const { start, end } = action.payload

      const draggingObject = state.items[start]

      state.items.splice(start, 1)
      state.items.splice(end, 0, draggingObject)
    },
  },
})

export const { onDragEnd } = callsSlice.actions

export const selectCalls = (state) => state.calls.items

export default callsSlice.reducer
