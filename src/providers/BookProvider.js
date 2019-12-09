import React, { useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/BookReducer';
import Context from './Context';

const BookProvider = props => {
  const [books, dispatch] = useReducer(
    bookReducer,
    [
      { id: 1, title: 'Name of The Wind', author: 'Patrick Rothfuss' },
      { id: 2, title: 'The Final Empire', author: 'Brandon Sanderson' },
      { id: 3, title: 'Zero to Experts', author: 'Verdi Pratama' },
      { id: 4, title: 'Zero to Experts', author: 'Verdi Pratama' }
    ]
    // Adding Local Storage
    // () => {
    //   const localData = localStorage.getItem('books');
    //   return localData ? JSON.parse(localData) : [];
    // }
  );
  // Adding Local Storage
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <Context.Provider value={{ books, dispatch }}>
      {/* tesss */}
      {props.children}
    </Context.Provider>
  );
};

export default BookProvider;
