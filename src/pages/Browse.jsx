import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import BookCard from '../components/BookCard'

const Browse = () => {
  const navigate = useNavigate()
  const { category } = useParams()
  const books = useSelector(state => state.books.books)
  const [query, setQuery] = useState('')

  const normalizedCategory = (category || 'all').toLowerCase()

  const filtered = useMemo(() => {
    const byCategory = normalizedCategory === 'all' ? books : books.filter(b => b.category.toLowerCase() === normalizedCategory)
    if (!query.trim()) return byCategory
    const q = query.toLowerCase()
    return byCategory.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
  }, [books, normalizedCategory, query])

  return (
    <div className="browse">
      <div className="browse-header">
        <h2>Browse Books — {normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1)}</h2>
        <div className="actions">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => navigate('/add')} className="btn small">Add Book</button>
        </div>
      </div>

      <div className="grid">
        {filtered.length === 0 ? (
          <div className="empty">No books found. Try another category or add a book.</div>
        ) : (
          filtered.map(b => <BookCard key={b.id} book={b} />)
        )}
      </div>
    </div>
  )
}

export default Browse
