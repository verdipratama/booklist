import React, { useContext } from 'react';
import Context from '../providers/Context';

const BookDetails = ({ book }) => {
  // @ts-ignore
  const { dispatch } = useContext(Context);

  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="grid-title">Books</div>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
