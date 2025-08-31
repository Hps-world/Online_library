import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Browse from './pages/Browse'
import BookDetails from './pages/BookDetails'
import AddBook from './pages/AddBook'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Routes that include the Header */}
        <Route element={<LayoutWithHeader />}>
          <Route index element={<Home />} />
          <Route path="/books/:category" element={<Browse />} />
          <Route path="/books" element={<Browse />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
        </Route>

        {/* 404 should not include the header */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

function LayoutWithHeader() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/books/:category" element={<Browse />} />
          <Route path="/books" element={<Browse />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </main>
    </>
  )
}

export default App
