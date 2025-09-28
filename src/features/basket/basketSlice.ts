import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface Item {
  id: number;
  quantity: number;
}

interface BasketState {
  items: Item[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Item>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== existingItem.id);
        }
        return;
      }
      if (action.payload.quantity > 0) {
        state.items.push(action.payload);
      }
    },
    reset(state) {
      state.items = [];
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
  },
});

export const { add, reset, removeProduct } = basketSlice.actions;
export const selectBasket = (state: RootState) => state.basket;
export default basketSlice.reducer;