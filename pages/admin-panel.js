import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { Button } from 'reactstrap';

import Container from '../components/Container';
import CreatePostForm from '../components/CreatePostForm';

import { createPost, fetchAllPosts } from '../reducers/adminPanel';

class AdminPanel extends Component {
  state = {
    createPost: false,
  };

  fetchAllPosts = () => {
    this.props.fetchAllPosts();
  };

  toggleEditor = () => {
    this.setState({
      createPost: !this.state.createPost,
    });
  };

  onCreatePostSubmit = (values) => {
    this.props.createPost(values)
    .then((res) => {
      this.setState({
        createPost: !this.state.createPost,
      }, () => {
        toastr.success(res.data.message);
      });
    })
    .catch((err) => {
      toastr.error(err);
    });
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
          <Button
            type="button"
            className={`btn btn-${this.state.createPost ? 'danger' : 'success'} mb-4 d-block`}
            onClick={() => this.toggleEditor()}
          >
            {this.state.createPost ? 'Cancel Creation' : 'Create New Post'}
          </Button>
          <Button
            type="button"
            className="btn btn-success mb-4 d-block"
          >
            <Link href={`/posts`}>
              <div style={{ color: 'white' }}>
                See All Posts
              </div>
            </Link>
          </Button>
          <Button onClick={this.fetchAllPosts}>123</Button>
          {this.state.createPost &&
          <CreatePostForm
            onSubmit={this.onCreatePostSubmit}
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
  fetchAllPosts,
  createPost,
}, dispatch);

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AdminPanel);
