import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  console.log(books);
  return (
    <div className="navbar">
      <h1>My Reading List</h1>
      <p style={{ color: 'red' }}>Currently you have {books.length} books to get throught...</p>
    </div>
  );
};

export default Navbar;
