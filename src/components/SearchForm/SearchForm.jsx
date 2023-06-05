import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  console.log();
  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (searchQuery === '') {
      toast.error('Please enter a movie name');
    } else {
      onSubmit(searchQuery.trim().toLowerCase());
      setSearchQuery('');
    }
  };

  return (
    <form className={css.searchForm} onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter movie name..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
