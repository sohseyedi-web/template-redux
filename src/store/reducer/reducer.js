import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  example: [],
};

const examReducer = createSlice({
  name: "example",
  initialState,
  reducers: {
    examFunc:(state,action)=>{
      return state
    }
  },
});

export const {examFunc} = examReducer.actions;

export default examReducer.reducer;
