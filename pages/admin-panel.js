import React, { Component } from 'react';
import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import Container from '../components/Container';
import CreatePostForm from '../components/CreatePostForm';

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
  };

  toggleEditor = () => {
    this.setState({
      createPost: !this.state.createPost,
    });
  };

  onCreatePostSubmit = (value) => {
    console.log('value', value);
  };

  render() {
    return (
      <Container alignCenter>
        <div className="d-flex flex-column">
          <h1 className="text-success mb-4">Welcome to Admin Panel</h1>
        </div>
        <div>
          <div className="mb-3">
            To create a new post click "Create Post" button.
          </div>
          <button
            type="button"
            className={`btn btn-${this.state.createPost ? 'danger' : 'success'} mb-4 d-block`}
            onClick={() => this.toggleEditor()}
          >
            {this.state.createPost ? 'Cancel Creation' : 'Create New Post'}
          </button>
          {this.state.createPost && <CreatePostForm onSubmit={this.onCreatePostSubmit}/>}
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
