import { configureStore } from '@reduxjs/toolkit';
import addBooksReducer from './reducers/addBooksReducer';


const store = configureStore({
  reducer: {
    library: addBooksReducer
  }
})

export default store;
