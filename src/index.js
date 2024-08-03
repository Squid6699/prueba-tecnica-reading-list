import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FiltersProvider } from './context/filters';
import { BooksProvider } from "./context/books";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FiltersProvider>
    <BooksProvider>
      <App />
    </BooksProvider>
  </FiltersProvider>
);

