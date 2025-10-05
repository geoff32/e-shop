import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/products/productsSlice';
import classesReducer from '../features/classes/classesSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    classes: classesReducer,
    products: productsReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch