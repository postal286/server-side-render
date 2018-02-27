import React, { Component } from 'react';
import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import Container from '../components/Container';
import LoginForm from '../components/LoginForm';

import reducer from '../reducers/admin';

import { loginAdmin } from '../reducers/admin'

const makeStore = (initialState, options) =>
  createStore(combineReducers({
    reducer,
    form: formReducer,
  }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

class AdminLogin extends Component {
  onFormSubmit = (credentials) => this.props.loginAdmin(credentials)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

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

const Admin = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(AdminLogin);

export default Admin;
