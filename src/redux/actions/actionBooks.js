import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOKS, LOAD_BOOKS, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_ERROR } from "../constants";

export const addBook = data => {
  return {
    type: ADD_BOOKS,
    payload: data
  }
}

export const deleteBook = id => {
  return {
    type: DELETE_BOOK,
    payload: id
  }
}

export const deleteAllBooks = () => {
  return {
    type: DELETE_ALL_BOOKS,
  }

}

const loadBooks = () => {
  return {
    type: LOAD_BOOKS
  }
}

const loadBooksSuccess = books => {
  return {
    type: LOAD_BOOKS_SUCCESS,
    payload: books
  }
}

const loadBooksError = error => {
  return {
    type: LOAD_BOOKS_ERROR,
    payload: error
  }
}

export const ApiCall = subject => {

  return dispatch => {

    dispatch(loadBooks())



    const fetchData = async url => {
      try {
        const response = await fetch(url)

        if(!response.ok) {
          throw new Error(response.message)
        }
        const fetchedData = await response.json()

        dispatch(loadBooksSuccess(fetchedData))
      }
      catch (error) {

        dispatch(loadBooksError(error.message))
      }
    }

    // eslint-disable-next-line no-template-curly-in-string
    fetchData(`https://www.googleapis.com/books/v1/volumes?q=${subject}&maxResults=20`)
  }
}
