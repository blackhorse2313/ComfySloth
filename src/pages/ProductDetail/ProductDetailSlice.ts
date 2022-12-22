import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductResponse } from '../../models/ProductResponse';

interface ProductDetailPageState {
  products: ProductResponse[];
}

const initialState: ProductDetailPageState = {
  products: [],
};

interface LoadProductsPayload {
  products: ProductResponse[];
}

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<LoadProductsPayload>) => {
      state.products = action.payload.products;
    },
  },
});

export const { loadProducts } = productDetailSlice.actions;

export const productDetailReducer = productDetailSlice.reducer;