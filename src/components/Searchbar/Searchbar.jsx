import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from './icons/search_icon.svg';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.SearchForm_button}>
          <SearchIcon className={styles.SearchForm_icon} />
        </button>
        <input
          className={styles.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
