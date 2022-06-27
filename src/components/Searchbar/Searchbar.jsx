// Компонент принимает один проп onSubmit -
// функцию для передачи значения инпута при сабмите формы.
// Создает DOM - элемент следующей структуры.
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  //  hundleOnSubmit = event => {
  //    event.preventDefault();
  //    console.log(event.target.value);
  //     this.setState({ searchQuery: event.target.value});
  //   };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.SearchForm_button}>
          <span class={styles.SearchForm_button_lable}>Search</span>
        </button>

        <input
          className={styles.SearchForm_input}
          type="text"
          autocomplete="off"
          autofocus
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
