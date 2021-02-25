import { configureStore } from '@reduxjs/toolkit'
import callsReducer from './callsSlice'

export default configureStore({
  reducer: {
    calls: callsReducer,
  },
})
