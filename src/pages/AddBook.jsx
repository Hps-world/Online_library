import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../store/booksSlice'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const initialForm = { title: '', author: '', category: '', description: '', rating: '' }

const AddBook = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validate = () => {
    const e = {}
    if (!form.title.trim()) e.title = 'Title is required'
    if (!form.author.trim()) e.author = 'Author is required'
    if (!form.category.trim()) e.category = 'Category is required'
    if (!form.description.trim()) e.description = 'Description is required'
    if (!form.rating.toString().trim()) e.rating = 'Rating is required'
    else {
      const r = parseFloat(form.rating)
      if (Number.isNaN(r) || r < 0 || r > 5) e.rating = 'Rating must be a number between 0 and 5'
    }
    return e
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const eObj = validate()
    setErrors(eObj)
    if (Object.keys(eObj).length > 0) return

    const newBook = {
      id: uuidv4(),
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category.trim(),
      description: form.description.trim(),
      rating: parseFloat(form.rating),
      popular: false
    }

    dispatch(addBook(newBook))
    // redirect to browse — show all so the added book appears at start
    navigate('/books/all')
  }

  return (
    <div className="add-book">
      <h2>Add a New Book</h2>
      <form onSubmit={onSubmit} className="form">
        <label>
          Title
          <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
          {errors.title && <div className="err">{errors.title}</div>}
        </label>

        <label>
          Author
          <input value={form.author} onChange={e => setForm({...form, author: e.target.value})} />
          {errors.author && <div className="err">{errors.author}</div>}
        </label>

        <label>
          Category
          <input value={form.category} onChange={e => setForm({...form, category: e.target.value})} placeholder="e.g., Fiction, Sci-Fi, Non-Fiction" />
          {errors.category && <div className="err">{errors.category}</div>}
        </label>

        <label>
          Description
          <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
          {errors.description && <div className="err">{errors.description}</div>}
        </label>

        <label>
          Rating (0-5)
          <input type="number" step="0.1" value={form.rating} onChange={e => setForm({...form, rating: e.target.value})} />
          {errors.rating && <div className="err">{errors.rating}</div>}
        </label>

        <div className="form-actions">
          <button type="submit" className="btn">Add Book</button>
          <button type="button" className="btn ghost" onClick={() => { setForm(initialForm); setErrors({}) }}>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default AddBook
