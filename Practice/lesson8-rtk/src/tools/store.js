import { configureStore } from '@reduxjs/toolkit'
import { jsonPlaceholderApi } from './services/jsonplaseholder'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath] : jsonPlaceholderApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(jsonPlaceholderApi.middleware)
})

setupListeners(store.dispatch);