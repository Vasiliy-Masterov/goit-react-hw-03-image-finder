// При нажатии на кнопку Load more должна догружаться
// следующая порция изображений и рендериться вместе с предыдущими.
// Кнопка должна рендерится только тогда,
// когда есть какие - то загруженные изобаржения.
// Если массив изображений пуст, кнопка не рендерится.

import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ id, name, loadImages }) => {
  return (
    <button
      className={styles.Button}
      // id={id}
      // name={name}
      type="button"
      onClick={loadImages}
    >
      Load
    </button>
  );
};

Button.propTypes = {
  // id: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
  loadImages: PropTypes.func,
};
