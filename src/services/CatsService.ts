import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ICat } from '../models/ICat'

export const CatsAPI = createApi({
  reducerPath: 'catsAPI',
  tagTypes: ['Cats'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints: (build) => ({
    fetchAllCats: build.query<ICat[], number>({
      query: () => ({
        url: '/cats',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Cats' as const, id })),
              { type: 'Cats', id: 'LIST' },
            ]
          : [{ type: 'Cats', id: 'LIST' }],
    }),
    addCat: build.mutation<ICat, Partial<ICat>>({
      query: (body) => ({
        url: '/cats',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cats'],
    }),
    deleteCat: build.mutation({
      query: (id: number) => ({
        url: `/cats/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Cats' }],
    }),
  }),
})
