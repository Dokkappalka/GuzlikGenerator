import { ICat } from '../../models/ICat'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCat, fetchDog } from './ActionCreators'

interface CatsState {
  currentCat: string
  currentDog: string
  catIsLoading: boolean
  dogIsLoading: boolean
  catError: string
  dogError: string
}

const initialState: CatsState = {
  currentCat: '',
  currentDog: '',
  catIsLoading: false,
  dogIsLoading: false,
  catError: '',
  dogError: '',
}

export const CatsSpawSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCat.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.catIsLoading = false
      state.catError = ''
      state.currentCat = action.payload
    },
    [fetchCat.pending.type]: (state) => {
      state.catIsLoading = true
    },
    [fetchCat.rejected.type]: (state, action: PayloadAction<string>) => {
      state.catIsLoading = false
      state.catError = action.payload
    },

    [fetchDog.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.dogIsLoading = false
      state.dogError = ''
      state.currentDog = action.payload
    },
    [fetchDog.pending.type]: (state) => {
      state.dogIsLoading = true
    },
    [fetchDog.rejected.type]: (state, action: PayloadAction<string>) => {
      state.dogIsLoading = false
      state.dogError = action.payload
    },
  },
})

export default CatsSpawSlice.reducer
