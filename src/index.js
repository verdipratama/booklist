import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import * as serviceWorker from './serviceWorker';

import BookProvider from './providers/BookProvider';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

/**
|--------------------------------------------------
| 1. Create Navbar.js 
| 2. Create Booklist.js 
| 3. Create BookDetails.js
| 4. Create AddBook.js
| 5. Create Context.js
| 6. Create BookReducer.js
| 7. Create BookProvider.js
| 8. Adding LocalStorage
|--------------------------------------------------
*/

const App = () => {
  return (
    <div className="App">
      <header className="container">
        {/* <h1>React Context & Hooks Example</h1> */}
        <BookProvider>
          <Navbar />
          <BookList />
        </BookProvider>
      </header>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
