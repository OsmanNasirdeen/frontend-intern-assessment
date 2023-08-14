import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  productsLength: 0,
  Loading: false,
  cartProducts: [],
  cartLength: 0,
  cartTotalAmount: 0,
};
const dataApi = "https://dummyjson.com/products";

export const getProducts = createAsyncThunk("products/getProducts", () => {
  return fetch(dataApi)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});
const productSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const productInCart = state.cartProducts.find((item) => {
        return item.id == product.id;
      });
      if (productInCart) {
        productInCart.amount++;
        state.cartLength += 1;
      } else {
        state.cartProducts.push({ ...product, amount: 1 });
        state.cartLength += 1;
      }
    },
    calculateTotalCart: (state) => {
      let total = 0;
      state.cartProducts.forEach((product) => {
        total += product.price * product.amount;
      });
      state.cartTotalAmount = total;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.Loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.Loading = false;
      state.products = action.payload.products;
      state.productsLength = state.products.length;
    },
    [getProducts.rejected]: (state) => {
      state.Loading = false;
      state.products = action.payload;
    },
  },
});

export const { addToCart, calculateTotalCart } = productSlice.actions;

export default productSlice.reducer;
