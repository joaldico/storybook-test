import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
class Button extends React.PureComponent {
  render() {
    const { disabled, size } = this.props;
    return (
      <button className={`button button--${size}`} disabled={disabled}>
        {"Este es mi componente de test"}
      </button>
    );
  }
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  size: 'small',
  disabled: false,
};
export default Button;