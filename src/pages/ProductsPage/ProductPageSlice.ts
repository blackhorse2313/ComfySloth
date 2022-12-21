import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductResponse } from '../../models/ProductResponse';

interface ProductPageState {
  products: ProductResponse[];
  fullProducts: ProductResponse[];
  searchText: string;
  companySelect: string;
  sortby: string;
}

const initialState: ProductPageState = {
  products: [],
  fullProducts: [],
  searchText: '',
  companySelect: '',
  sortby: '',
};

interface LoadProductsPayload {
  products: ProductResponse[];
}

interface SearchProductsPayload {
  searchText: string;
}

interface CompanyProductsPayload {
  companySelect: string;
}

interface SortProductsPayload {
  sortby: string;
}

const sortData = (sort: string, data: ProductResponse[]) => {
  if (sort === 'price-lowest') {
    return data.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
  } else if (sort === 'price-highest') {
    return data.sort((a, b) => (a.price > b.price ? -1 : b.price > a.price ? 1 : 0));
  } else if (sort === 'name-a') {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'name-z') {
    return data.sort((a, b) => b.name.localeCompare(a.name));
  }
  return data;
};

export const productPageSlice = createSlice({
  name: 'productPage',
  initialState: initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<LoadProductsPayload>) => {
      state.products = action.payload.products;
      state.fullProducts = action.payload.products;
    },
    searchProducts: (state, action: PayloadAction<SearchProductsPayload>) => {
      const products = state.fullProducts.filter((product) =>
        product.name.toLowerCase().includes(action.payload.searchText.toLowerCase()),
      );
      state.products = sortData(state.sortby, products);
    },
    companyProducts: (state, action: PayloadAction<CompanyProductsPayload>) => {
      const company = action.payload.companySelect.toLowerCase();
      console.log(state.sortby);

      state.products =
        company === 'all'
          ? state.fullProducts
          : state.fullProducts.filter((product) => product.company.toLowerCase() === company);
    },
    sortProducts: (state, action: PayloadAction<SortProductsPayload>) => {
      const sort = action.payload.sortby.toLowerCase();
      state.sortby = sort;
      state.products = sortData(sort, state.products);
    },
  },
});

export const { loadProducts, searchProducts, companyProducts, sortProducts } = productPageSlice.actions;
export const productPageReducer = productPageSlice.reducer;
