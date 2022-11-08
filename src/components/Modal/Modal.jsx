import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.close();
    }
  };
  backDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.close();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.backDropClick}>
        <div className={css.modal}>
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func,
  srcModal: PropTypes.string,
};
