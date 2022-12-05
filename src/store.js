import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from 'react'
import counterReducer from './counterSlice'

export const store = configureStore({
    reducer:{
      counter: counterReducer,
    }
})