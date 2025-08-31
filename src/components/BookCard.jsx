import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-meta">
        <h3>{book.title}</h3>
        <p className="muted">by {book.author}</p>
        <p className="muted small">Category: {book.category}</p>
        <p className="desc">{book.description.slice(0, 140)}{book.description.length > 140 ? '...' : ''}</p>
      </div>
      <div className="book-actions">
        <div className="rating">⭐ {book.rating}</div>
        <Link to={`/book/${book.id}`} className="btn">View Details</Link>
      </div>
    </div>
  )
}

export default BookCard
