import css from './ImageGalleryItem.module.css';

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
