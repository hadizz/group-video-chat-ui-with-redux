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
      {
        id: 1,
        name: 'jessy',
        image: 'https://picsum.photos/200/300',
        isMobile: true,
        isMute: true,
        isCameraOff: true,
      },
      {
        id: 2,
        name: 'john',
        image:
          'https://i.picsum.photos/id/566/400/300.jpg?hmac=u0bG5G9ZQhfV4II98IRXpm3Sfaz2xaIpfbYWxRCUOaY',
        isMobile: false,
        isMute: false,
        isCameraOff: false,
      },
      {
        id: 3,
        name: 'tommy',
        image:
          'https://i.picsum.photos/id/877/400/300.jpg?hmac=qD6pLIhs_M4_LL-K2MYUuyd89Dzqfo1iNVEM7CyYScs',
        isMobile: false,
        isMute: true,
        isCameraOff: false,
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
  },
})

export const { onDrop } = callsSlice.actions

export const selectCalls = (state) => state.calls.items

export default callsSlice.reducer
