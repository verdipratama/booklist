import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import * as serviceWorker from './serviceWorker';

import BookContextProvider from './context/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

/**
|--------------------------------------------------
| 1. Create BookContext.js 
| 2. Create Navbar.js 
| 3. Create Booklist.js 
| 4. Create BookDetails.js
|--------------------------------------------------
*/

const App = () => {
  return (
    <div className="App">
      <header className="container">
        <h1>React Context & Hooks Example</h1>
        <BookContextProvider>
          <Navbar />
          <BookList />
        </BookContextProvider>
      </header>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
