import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ imageGallery }) => {
  return (
    <ul className={styles.ImageGallery}>
      {imageGallery.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem id={id} webformatURL={webformatURL} tags={tags} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  img: PropTypes.string,
};
