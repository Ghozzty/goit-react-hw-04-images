import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import css from './App.module.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    showModal: false,
    srcModal: '',
  };

  submitEvent = name => {
    this.setState({ query: name });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onGalleryItemClick = src => {
    this.toggleModal();
    this.setState({ srcModal: src });
  };

  render() {
    return (
      <div className={css.appStyle}>
        {this.state.showModal && (
          <Modal src={this.state.srcModal} close={this.toggleModal} />
        )}
        <Searchbar submitEvt={this.submitEvent} />
        <ImageGallery
          query={this.state.query}
          click={this.onGalleryItemClick}
        />
        <ToastContainer autoClose={2000} position={'top-left'} />
      </div>
    );
  }
}
