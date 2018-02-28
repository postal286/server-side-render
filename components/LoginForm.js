import React from 'react';
import propTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import InputBase from "./InputBase";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password required';
  }
  return errors;
};

class LoginForm extends React.PureComponent {
  render() {
    const { handleSubmit, submitting, error } = this.props;
    return (
      <form onSubmit={handleSubmit} className="d-flex p-3 pt-4 flex-column text-secondary">
        <label className="text-muted">Email</label>
        <Field
          type="text"
          name="email"
          placeholder="Email"
          component={InputBase}
          className="mb-3 p-2 text-info w-100"
        />
        <label className="text-muted">Password</label>
        <Field
          type="password"
          name="password"
          placeholder="Password"
          component={InputBase}
          className="mb-3 p-2 text-info w-100"
        />
        {error &&
          <div className="text-danger font-weight-light mb-3">{error}</div>
        }
        <button
          className="btn btn-outline-info p-2"
          disabled={submitting}
          onClick={this.onFormSubmit}
        >
          {submitting ?
            <i className="fa fa-spinner fa-spin" style={{ fontSize: '24px' }} />
            :
            'Submit'
          }
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  submitting: propTypes.bool.isRequired,
  error: propTypes.string,
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
