import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio, Restaurante } from '../../pages/Home'

type CartState = {
  isOpen: boolean
  meals: Cardapio[]
}

const initialState: CartState = {
  isOpen: false,
  meals: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const comida = state.meals.find((item) => item.id === action.payload.id)
      if (!comida) {
        state.meals.push(action.payload)
      } else {
        alert('A comida já foi adicionada')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
