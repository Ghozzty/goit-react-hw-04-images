import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ src, close }) => {
  useEffect(() => {
    const keyDownEvt = e => {
      if (e.code === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', keyDownEvt);

    return () => window.removeEventListener('keydown', keyDownEvt);
  }, [close]);

  const backDropClick = e => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <div className={css.overlay} onClick={backDropClick}>
      <div className={css.modal}>
        <img src={src} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func,
  srcModal: PropTypes.string,
};
