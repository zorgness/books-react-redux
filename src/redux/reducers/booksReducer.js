import {v4 as uuid} from 'uuid';
import { ADD_BOOKS, DELETE_BOOK } from "../constants";


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

const removeDataById = (state, id) => {
  const books = state.filter(book => book.id !== id)

  return books

}

const BooksReducer = (state=initialState.books, action) => {



  const booksAlreadyAdded = localStorage.getItem('booksData');

  console.log(booksAlreadyAdded)



  if (booksAlreadyAdded) {
    state = JSON.parse(booksAlreadyAdded)
  }

  switch (action.type) {
    case ADD_BOOKS:
        state = [...state, helperAddData(action)]
        localStorage.setItem('booksData', JSON.stringify(state))
        return state;

    case DELETE_BOOK:
        removeDataById(state, action.payload)

        localStorage.setItem('booksData', JSON.stringify(state))
        return state;


    default:
      return state;
  }
}

export default BooksReducer
