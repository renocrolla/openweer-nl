import React, {useState} from "react";
import './SearchBox.css';

function SearchBox({ setLocationHandler }) {
  const [searchQuery, setSearchQuery] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();
    setLocationHandler(searchQuery);
  }

  return (
    <>
      <form className="form-container" onSubmit={onFormSubmit}>
        <input
          className="search-input"
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Vul een stad in"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" type="submit">Zoek</button>
      </form>
    </>
  );
}

export default SearchBox;
