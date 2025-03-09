import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../features/booksSlice";

const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});

export default store;
