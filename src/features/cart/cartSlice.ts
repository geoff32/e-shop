import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../products/productsSlice'
import type { RootState } from '../../app/store'

export type CartItem = Product & { quantity: number }

type CartState = {
  items: CartItem[]
}

const initialState: CartState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload
      const existing = state.items.find((i) => i.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...product, quantity: 1 })
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const id = action.payload
      const existing = state.items.find((i) => i.id === id)
      if (existing) {
        existing.quantity -= 1
        if (existing.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id)
        }
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    changeQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) item.quantity = Math.max(0, quantity)
      state.items = state.items.filter((i) => i.quantity > 0)
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addToCart, decrementQuantity, removeFromCart, changeQuantity, clearCart } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export default cartSlice.reducer
