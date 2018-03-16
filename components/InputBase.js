import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import propTypes from 'prop-types';

class InputBase extends Component {
  render() {
    const {
      id,
      type,
      style,
      noError,
      className,
      placeholder,
      checkboxLabel,
      input: { onChange, name, value },
      meta: {
        error,
        touched,
      },
    } = this.props;
    const styled = style ? { ...style } : {};
    const text = checkboxLabel ? checkboxLabel: '';
    return (
      <div>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          style={styled}
          title={placeholder}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
        />
        {text && <Label htmlFor={id}>{text}</Label>}
        {touched && error && !noError &&
        <div className="text-danger font-weight-light mb-3">{error}</div>
        }
      </div>
    );
  }
}

InputBase.propTypes = {
  id: propTypes.string,
  type: propTypes.string,
  primary: propTypes.bool,
  noError: propTypes.bool,
  indentTop: propTypes.bool,
  notDisplay: propTypes.bool,
  placeholder: propTypes.string,
  input: propTypes.object.isRequired,
  meta: propTypes.object,
};

export default InputBase;
