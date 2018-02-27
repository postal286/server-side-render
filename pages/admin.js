import React, { Component } from 'react';
import { createStore, combineReducers } from "redux";
import withRedux from "next-redux-wrapper";
import { reducer as formReducer } from 'redux-form'

import Container from '../components/Container';
import LoginForm from '../components/LoginForm';

import reducer from "../reducers/admin";

const makeStore = (initialState, options) =>
  createStore(combineReducers({ reducer, form: formReducer }), initialState);

class AdminLogin extends Component {
  onFormSubmit = (value) => {

    console.log(value);
    // this.props.dispatch({})
  };

  render() {
    console.log('this.props', this.props);
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

const Admin = withRedux(makeStore, (state) => ({}))(AdminLogin);

export default Admin;
