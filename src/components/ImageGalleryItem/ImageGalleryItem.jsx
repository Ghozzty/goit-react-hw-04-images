import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  click,
}) => {
  return (
    <li
      className={css.item}
      onClick={() => {
        click(largeImageURL);
      }}
    >
      <img className={css.itemImage} src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  click: PropTypes.func,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
