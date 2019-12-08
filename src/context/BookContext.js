import React, { createContext, useState } from 'react';
import uuid from 'uuid/v4';

// @ts-ignore
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Name of The Wind', author: 'Patrick Rothfuss' },
    { id: 2, title: 'The Final Empire', author: 'Brandon Sanderson' },
    { id: 3, title: 'Zero to Experts', author: 'Verdi Pratama' }
  ]);

  const addBook = (title, author) => {
    // @ts-ignore
    setBooks([...books, { title, author: author, id: uuid() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
