import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalQuantity += 1;
    },
    removeItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.totalQuantity -= 1;
      }
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

export default store;
