import React, { Component } from 'react';
import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RichTextEditor from 'react-rte';
import withRedux from 'next-redux-wrapper';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import Container from '../components/Container';

import reducer from '../reducers/adminPanel';

import { loginAdmin } from '../reducers/admin'

const makeStore = (initialState, options) =>
  createStore(combineReducers({
      reducer,
      form: formReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

class AdminPanel extends Component {
  state = {
    createPost: false,
    value: RichTextEditor.createEmptyValue()
  };

  handleChange(value) {
    this.setState({ text: value });
  }

  openEditor = () => {
    this.setState({
      createPost: true,
    });
  };

  onChange = (value) => {
    this.setState({value});
  };

  onFormSubmit = (credentials) => this.props.loginAdmin(credentials)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  render() {
    return (
      <Container alignCenter flex>
        <div className="mx-auto d-flex flex-column">
          <h1 className="text-info">Welcome to Admin Panel</h1>
          <button onClick={() => this.openEditor()}>Create New Post</button>
          {this.state.createPost &&
            <RichTextEditor
              value={this.state.value}
              onChange={this.onChange}
            />
          }
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

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(AdminPanel);
