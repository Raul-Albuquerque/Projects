import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio, Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantList: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getMealsList: builder.query<Cardapio, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantListQuery, useGetMealsListQuery } = api

export default api
