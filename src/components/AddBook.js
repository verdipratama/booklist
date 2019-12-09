import React, { useContext, useState } from 'react';
import Context from '../providers/Context';

const AddBook = () => {
  // @ts-ignore
  const { dispatch } = useContext(Context);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(title, author);

        dispatch({
          type: 'ADD_BOOK',
          book: {
            title: title,
            author: author
          }
        });

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
