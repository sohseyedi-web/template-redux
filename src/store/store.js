import { configureStore } from "@reduxjs/toolkit";
import examRedcer from "./reducer/reducer";

const store = configureStore({
  reducer: {
    exam: examRedcer,
  },
});

export default store;
