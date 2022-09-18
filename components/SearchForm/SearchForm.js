import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// The useNavigate hook returns a function that lets you navigate programmatically i.e. if the condition satisfies then do a task otherwise no.
import { useGlobalContext } from '../../context';
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  // The useRef allows to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. 
  // It can be used to access a DOM element directly.
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' placeholder='The Lost World ...' ref = {searchText} />
              <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-purple' size = {32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm