import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'

const categories = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Programming']

const Home = () => {
  const books = useSelector(state => state.books.books)
  const popular = books.filter(b => b.popular).slice(0, 6)

  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to the Online Library</h2>
        <p>Browse categories, read details, and add your favorite books.</p>
      </section>

      <section className="categories">
        <h3>Categories</h3>
        <div className="cats">
          {categories.map(cat => (
            <Link key={cat} to={`/books/${cat.toLowerCase()}`} className="chip">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <section className="popular">
        <h3>Popular Books</h3>
        <div className="grid">
          {popular.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </section>
    </div>
  )
}

export default Home
