import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <button type="button" className={css.button} onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  click: PropTypes.func,
};
