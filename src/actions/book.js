import request from 'superagent';
import {BookTypes as types} from '../action-types';

const fetchBooksObject = () => {
  return {
    type: types.FETCH_BOOKS_OBJECT,
  };
};

const fetchBooksSuccess = books => {
  return {
    type: types.FETCH_BOOKS_SUCCESS,
    books,
  };
};

const fetchBooksFail = error => {
  return {
    type: types.FETCH_BOOKS_FAIL,
    error,
  };
};

const fetchBookObject = () => {
  return {
    type: types.FETCH_BOOK_OBJECT,
  };
};

const fetchBookSuccess = book => {
  return {
    type: types.FETCH_BOOK_SUCCESS,
    book,
  };
};

const fetchBookFail = error => {
  return {
    type: types.FETCH_BOOK_FAIL,
    error,
  };
};

export function fetchBooks() {
  return async dispatch => {
    dispatch(fetchBooksObject());
    try {
      const climbsResponse = await request.get(
        `${process.env.SERVER_ADDRESS}/api/books`
      );
      dispatch(fetchBooksSuccess(climbsResponse.body));
    } catch (e) {
      e => dispatch(fetchBooksFail(e.response.body));
    }
  };
}

export function fetchBook(bookId) {
  return async dispatch => {
    try {
      if (bookId) {
        const bookResponse = await request.get(
          `${process.env.SERVER_ADDRESS}/api/books/${bookId}`
        );
        dispatch(fetchBookSuccess(bookResponse.body));
      } else {
        dispatch(fetchBookObject());
      }
    } catch (e) {
      e => dispatch(fetchBookFail(e.response.body));
    }
  };
}
