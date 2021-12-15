import React from 'react';
import { useState, useEffect } from 'react';
import BooksList from '../../components/Books/BooksList';
import { fetchFilms } from '../../services/films';
export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getChars = async () => {
      const response = await fetchFilms();
      setBooks(response);
    };
    getChars();
  }, []);

  return (
    <div>
      <BooksList books={books} />
    </div>
  );
}
