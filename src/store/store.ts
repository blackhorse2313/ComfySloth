import { configureStore } from '@reduxjs/toolkit';
import { productPageReducer } from '../pages/ProductsPage/ProductPageSlice';

export const store = configureStore({
  reducer: {
    productPage: productPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
