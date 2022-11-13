import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

import { Button } from './Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { fetchImgSet } from './fetchImgSet/fetchImgSet';

export const App = () => {
  const [query, setQuery] = useState('');
  const [queryArr, setQuerryArr] = useState([]);
  const [status, setStatus] = useState('idle');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowmodal] = useState(false);
  const [srcModal, setSrcModal] = useState('');
  const [totalImg, setTotalImg] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    try {
      setStatus('pending');
      fetchImgSet(query, currentPage).then(res => {
        if (!res.data.hits.length) {
          setStatus('idle');
          return toast.warning(
            'Sorry, there are no images matching your search query. Please try again'
          );
        }
        setQuerryArr(prevArr => [...prevArr, ...res.data.hits]);
        setTotalImg(res.data.total);
        setStatus('resolved');
      });
    } catch (error) {
      console.log('Error');
    }
  }, [query, currentPage]);

  // servise

  const clearStateFn = () => {
    setQuerryArr([]);
    setQuery('');
    setCurrentPage(1);
    setSrcModal('');
    setTotalImg(null);
  };

  const onClickBtnFn = e => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const submitEvent = name => {
    clearStateFn();
    setQuery(name);
  };

  const toggleModal = () => {
    setShowmodal(prev => !prev);
  };

  const onGalleryItemClick = src => {
    toggleModal();
    setSrcModal(src);
  };

  return (
    <div className={css.appStyle}>
      {showModal && <Modal src={srcModal} close={toggleModal} />}

      <Searchbar submitEvt={submitEvent} />

      {queryArr.length > 0 && (
        <ImageGallery queryArr={queryArr} click={onGalleryItemClick} />
      )}

      {(status === 'idle' || !queryArr) && (
        <div className={css.idleTitle}>Please input the image set query...</div>
      )}

      {status === 'pending' && <Loader />}

      {queryArr.length > 0 && queryArr.length < totalImg && (
        <Button onClick={onClickBtnFn} />
      )}

      <ToastContainer autoClose={2000} />
    </div>
  );
};
