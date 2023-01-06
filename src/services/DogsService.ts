import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IDog } from '../models/IDog'

export const DogsAPI = createApi({
  reducerPath: 'dogsAPI',
  tagTypes: ['Dogs'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints: (build) => ({
    fetchAllDogs: build.query<IDog[], number>({
      query: () => ({
        url: '/dogs',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Dogs' as const, id })),
              { type: 'Dogs', id: 'LIST' },
            ]
          : [{ type: 'Dogs', id: 'LIST' }],
    }),
    addDog: build.mutation<IDog, Partial<IDog>>({
      query: (body) => ({
        url: '/dogs',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Dogs'],
    }),
    deleteDog: build.mutation({
      query: (id: number) => ({
        url: `/dogs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Dogs' }],
    }),
  }),
})
