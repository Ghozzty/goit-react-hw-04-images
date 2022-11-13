import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ queryArr, click }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.gallery}>
        {queryArr.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            click={click}
          />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  queryArr: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
      pageURL: PropTypes.string,
      type: PropTypes.string,
      previewURL: PropTypes.string,
      previewWidth: PropTypes.number,
      previewHeight: PropTypes.number,
      webformatWidth: PropTypes.number,
      webformatHeight: PropTypes.number,
      imageWidth: PropTypes.number,
      imageHeight: PropTypes.number,
      imageSize: PropTypes.number,
      views: PropTypes.number,
      downloads: PropTypes.number,
      collections: PropTypes.number,
      likes: PropTypes.number,
      comments: PropTypes.number,
      user_id: PropTypes.number,
      user: PropTypes.string,
      userImageURL: PropTypes.string,
    })
  ),
  click: PropTypes.func,
  key: PropTypes.string,
};
