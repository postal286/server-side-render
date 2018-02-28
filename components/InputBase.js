import React, { Component } from 'react';
import propTypes from 'prop-types';

class InputBase extends Component {
  render() {
    const {
      id,
      type,
      noError,
      className,
      placeholder,
      input: { onChange, name, value },
      meta: {
        error,
        touched,
      },
    } = this.props;
    const isValue = type !== 'file' ? value : undefined;
    return (
      <div>
        <input
          id={id}
          type={type}
          name={name}
          value={isValue}
          title={placeholder}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
        />
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
