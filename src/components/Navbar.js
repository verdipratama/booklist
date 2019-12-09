import React, { useContext } from 'react';
import Context from '../providers/Context';
import AddBook from './AddBook';

const Navbar = () => {
  const { books } = useContext(Context);
  console.log(books);
  return (
    <div className="navbar">
      <h1>My Reading List</h1>
      <p style={{ color: 'red' }}>Currently you have {books.length} books to get throught...</p>
      <AddBook />
    </div>
  );
};

export default Navbar;
