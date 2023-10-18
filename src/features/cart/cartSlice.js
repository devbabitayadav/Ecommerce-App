import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    },

    remove: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    },
    plus: (state, action)=> {
      return{
        ...state,
        plus: state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
      }
     
    
    },
  },
  extraReducers: (builder) => {},
});

export const { add, remove, plus} = cartSlice.actions;
export default cartSlice.reducer;
