import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const AddBook = () => {
  // Ingat { destruction } dari BookContext
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(title, author);
        addBook(title, author);

        setTitle('');
        setAuthor('');
      }}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="SUBMIT" style={{ marginTop: '10px' }} />
    </form>
  );
};

export default AddBook;
