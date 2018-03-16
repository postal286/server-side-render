import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { SubmissionError } from 'redux-form';

import Container from '../components/Container';
import LoginForm from '../components/LoginForm';


import { loginAdmin } from '../reducers/admin'

class AdminLogin extends Component {
  onFormSubmit = (credentials) => this.props.loginAdmin(credentials)
    .then((res) => {
      if (res.data.fullName && res.data.role === 'admin') {
        this.props.router.push('/admin-panel');
      } else {
        this.props.router.push('/');
      }
    })
    .catch((error) => {
      throw new SubmissionError({ _error: error.response.data.message });
    });

  render() {
    return (
      <Container alignCenter flex style={{ minHeight: '500px' }}>
        <div className="w-50 mx-auto d-flex flex-column">
          <h1 className="text-info">Admin Page</h1>
          <LoginForm onSubmit={this.onFormSubmit}/>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginAdmin,
}, dispatch);

export default withRouter(withRedux(initStore, mapStateToProps, mapDispatchToProps)(AdminLogin));

