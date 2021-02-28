import { createSlice } from '@reduxjs/toolkit'

export const callsSlice = createSlice({
  name: 'calls',
  initialState: {
    items: [
      {
        id: 0,
        name: 'sara',
        image:
          'https://i.picsum.photos/id/889/400/300.jpg?hmac=bnjifYNFcybzu2SpzMsIa7Od1iOA9Jjz7imYROcHw-Q',
        isMobile: false,
        isMute: false,
        isCameraOff: true,
      },
    ],
  },
  reducers: {
    onDrop: (state, action) => {
      const { start, dest } = action.payload
      console.log('onDrop', start, dest)

      const temp1 = state.items[start].id
      state.items[start].id = state.items[dest].id
      state.items[dest].id = temp1

      const temp2 = state.items[start]
      state.items[start] = state.items[dest]
      state.items[dest] = temp2
    },
    addCall: (state, _action) => {
      const isMobile = Math.floor(Math.random() * 2) === 1
      const isMute = Math.floor(Math.random() * 2) === 1
      const isCameraOff = Math.floor(Math.random() * 2) === 1
      state.items.push({
        id: state.items.length,
        name: 'user ' + state.items.length,
        image: `https://picsum.photos/${isMobile ? '200' : '400'}/300`,
        isMobile,
        isMute,
        isCameraOff,
      })
    },
  },
})

export const { onDrop, addCall } = callsSlice.actions

export const selectCalls = (state) => state.calls.items

export default callsSlice.reducer
