import { createSlice } from '@reduxjs/toolkit'
import initialBooks from '../data/books'

const saved = localStorage.getItem('books_v1')
const initialState = {
  books: saved ? JSON.parse(saved) : initialBooks
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      // place new book at the beginning
      state.books.unshift(action.payload)
      localStorage.setItem('books_v1', JSON.stringify(state.books))
    },
    // extra reducers (e.g., update or delete) could be added later
  }
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer
