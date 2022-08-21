import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ imageGallery, showLargeImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {imageGallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          tags={tags}
          showLargeImage={showLargeImage}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imageGallery: PropTypes.array.isRequired,
  showLargeImage: PropTypes.func.isRequired,
};
