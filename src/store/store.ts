import { DogsAPI } from './../services/DogsService'
import { CatsAPI } from './../services/CatsService'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import catsSpawnReducer from './reducers/CatsSpawnSlice'

const rootReducer = combineReducers({
  catsSpawnReducer,
  [CatsAPI.reducerPath]: CatsAPI.reducer,
  [DogsAPI.reducerPath]: DogsAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(CatsAPI.middleware, DogsAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
