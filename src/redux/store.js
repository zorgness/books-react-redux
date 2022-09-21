import { configureStore } from '@reduxjs/toolkit';
import BooksReducer from './reducers/booksReducer';
import ApiBookReducer from './reducers/apiBookReducer';


const store = configureStore({
  reducer: {
    library: BooksReducer,
    apiBook: ApiBookReducer
  }
})

export default store;
