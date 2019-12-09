import React, { useContext } from 'react';
import Context from '../providers/Context';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(Context);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return (
            // @ts-ignore
            <BookDetails book={book} key={book.id} />
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Yeyy, No books to read.</div>
  );
};

export default BookList;
