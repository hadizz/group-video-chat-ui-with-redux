import { configureStore } from '@reduxjs/toolkit'
import callsReducer from './callsSlice'
import { loadState, saveState } from '../Utils/localStorage'

const initState = loadState()

const store = configureStore({
  reducer: {
    calls: callsReducer,
  },
  ...(initState !== undefined && { preloadedState: initState }),
})

store.subscribe(() => {
  saveState(store.getState())
})

export default store
