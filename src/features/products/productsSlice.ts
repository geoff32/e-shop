import { createSlice } from '@reduxjs/toolkit'
import products from '../../data/products.json'
import type { RootState } from '../../app/store'

export type Product = {
  id: string
  name: string
  price: number
  description?: string
  image?: string
}

const initialState: Product[] = products

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export const selectProduct = (state: RootState) => state.products;
export default productsSlice.reducer
