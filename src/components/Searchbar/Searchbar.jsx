import { useState } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ submitEvt }) => {
  const [searchQuery, setSearchquery] = useState('');

  const handleQueryChange = e => {
    const query = e.currentTarget.value.toLowerCase();
    setSearchquery(query);
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.warning('please input the correct query');
      e.target.reset();
      return;
    }

    submitEvt(searchQuery);

    setSearchquery('');
    e.target.reset();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          value={searchQuery}
          onChange={handleQueryChange}
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  submitEvent: PropTypes.func,
};
