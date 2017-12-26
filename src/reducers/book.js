import {BookTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  book: null,
  books: null,
  error: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_BOOKS_OBJECT:
      return objectAssign({}, state, {books: null});

    case types.FETCH_BOOKS_SUCCESS:
      return objectAssign({}, state, {books: action.books});

    case types.FETCH_BOOKS_FAIL:
      return objectAssign({}, state, {error: action.error});

    case types.FETCH_BOOK_OBJECT:
      return objectAssign({}, state, {book: null});

    case types.FETCH_BOOK_SUCCESS:
      return objectAssign({}, state, {book: action.book});

    case types.FETCH_BOOK_FAIL:
      return objectAssign({}, state, {error: action.error});

    default:
      return state;
  }
}
