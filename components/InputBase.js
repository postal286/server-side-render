import React, { Component } from 'react';
import { Input } from 'reactstrap';
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
    const isValue = type !== 'file' ? value : undefined;
    const styled = style ? { ...style } : {};
    const text = checkboxLabel ? checkboxLabel: '';
    return (
      <div>
        <Input
          id={id}
          type={type}
          name={name}
          style={styled}
          value={isValue}
          title={placeholder}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
        />
        {text && text}
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
