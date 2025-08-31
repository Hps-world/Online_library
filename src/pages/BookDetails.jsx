import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BookDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const book = useSelector(state => state.books.books.find(b => b.id === id))

  if (!book) {
    return (
      <div className="notfound">
        <h2>Book not found</h2>
        <p>We couldn't find the requested book.</p>
        <button className="btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    )
  }

  return (
    <div className="book-details">
      <button className="btn ghost" onClick={() => navigate(-1)}>← Back to Browse</button>
      <div className="details-card">
        <h2>{book.title}</h2>
        <p className="muted">by {book.author}</p>
        <p className="meta">Category: {book.category} • Rating: ⭐ {book.rating}</p>
        <hr/>
        <p>{book.description}</p>
      </div>
    </div>
  )
}

export default BookDetails
