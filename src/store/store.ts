import { configureStore } from '@reduxjs/toolkit';
import { productDetailReducer } from '../pages/ProductDetail/ProductDetailSlice';
import { productPageReducer } from '../pages/ProductsPage/ProductPageSlice';

export const store = configureStore({
  reducer: {
    productPage: productPageReducer,
    productDetailPage: productDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
