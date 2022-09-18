import React from 'react';
import ReactDOM from 'react-dom/client';
// dom- document object model. helps in ui design as already have inbuilt tags like navbar,list,h1-h6 etc.
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
// it is used to give the path of other file.
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);


