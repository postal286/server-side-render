import React from 'react';
import propTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import InputBase from "./InputBase";

class LoginForm extends React.PureComponent {
  render() {
    const { handleSubmit, submitting, error } = this.props;
    console.log(submitting);
    return (
      <form onSubmit={handleSubmit} className="d-flex p-3 pt-4 flex-column text-secondary">
        <label className="text-muted">Name</label>
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
          <div className="my-3">
            {error}
          </div>
        }
        <button
          className="btn btn-outline-info p-2 mt-4"
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
  error: propTypes.object,
};

export default reduxForm({
  form: 'login',
})(LoginForm);
