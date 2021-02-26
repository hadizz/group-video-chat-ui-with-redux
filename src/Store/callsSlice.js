import { createSlice } from '@reduxjs/toolkit'

export const callsSlice = createSlice({
  name: 'calls',
  initialState: {
    items: [
      { id: 0, name: 'sara', image: 'https://picsum.photos/400/300' },
      { id: 1, name: 'jessy', image: 'https://picsum.photos/200/300' },
      {
        id: 2,
        name: 'john',
        image:
          'https://i.picsum.photos/id/252/485/365.jpg?hmac=oQjukK8AX6tXb1poDBzx5kG3PvEPovtz3sKfXtw9vqo',
      },
      {
        id: 3,
        name: 'tommy',
        image:
          'https://i.picsum.photos/id/354/485/363.jpg?hmac=2tKGZb5T3DeTm4laK2DkKCRBJeye4YpPJCHwVcu6ZBA',
      },
    ],
  },
  reducers: {
    onDrop: (state, action) => {
      const { start, dest } = action.payload
      const draggingObject = state.items[start]
      state.items.splice(start, 1)
      state.items.splice(dest, 0, draggingObject)
    },
  },
})

export const { onDrop } = callsSlice.actions

export const selectCalls = (state) => state.calls.items

export default callsSlice.reducer
