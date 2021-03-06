import React, { useState } from 'react'

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
    setTerm('');
  }

  return (
    <div className= "search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search for a Video</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;
