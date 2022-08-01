import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

const SearchBar = ({updateSearches}) => {
  const [inputValue, setInputValue] = useState("");

  const changeValue = (event) => {
    setInputValue(event.target.value);
  }

  const searchPressed = () => {
    updateSearches(inputValue);
  }

  return (
    <form className='searchBar__form' onSubmit={(e) => e.preventDefault()}>
        <input className='searchBar__form-input' type="text" placeholder="Search here..." onChange={changeValue} />
        <button className='searchBar__form-submit' type="submit" onClick={() => searchPressed()}><FaSearch /></button>
    </form>
  )
}

export default SearchBar;