import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface ResponseCatType {
  file: string
}
interface ResponseDogType {
  fileSizeBytes: number
  url: string
}

export const fetchCat = createAsyncThunk(
  'cats/fetchOne',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ResponseCatType>(
        'https://aws.random.cat/meow'
      )
      return response.data.file
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const fetchDog = createAsyncThunk(
  'dogs/fetchOne',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ResponseDogType>(
        'https://random.dog/woof.json'
      )
      return response.data.url
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
