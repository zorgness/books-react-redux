import { configureStore } from '@reduxjs/toolkit';
import BooksReducer from './reducers/booksReducer';


const store = configureStore({
  reducer: {
    library: BooksReducer
  }
})

export default store;
