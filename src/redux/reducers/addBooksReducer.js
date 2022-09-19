import {v4 as uuid} from 'uuid';
import { ADD_BOOKS } from "../constants";


const initialState = {
  books: []
}

const helperAddData = action =>{
  return {
    id: uuid(),
    title: action.payload.title,
    author: action.payload.author
  }
}

const addBooksReducer = (state=initialState.books, action) => {

  const booksAlreadyAdded = localStorage.getItem('booksData');

  if (booksAlreadyAdded) {
    state = JSON.parse(booksAlreadyAdded)
  }

  switch (action.type) {
    case ADD_BOOKS:
        state = [...state, helperAddData(action)]
        localStorage.setItem('booksData', JSON.stringify(state))
        return state;


    default:
      return state;
  }
}

export default addBooksReducer
