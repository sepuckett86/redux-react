import { SAVE_SECTION, CHANGE_DISPLAY, ADD_BOOK } from './types';

export function saveSection(section) {
  return {
    type: SAVE_SECTION,
    payload: section
  }
}

export function changeDisplay(display) {
  return {
    type: CHANGE_DISPLAY,
    payload: display
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book
  }
}
