import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import Link from 'next/link';

import Layout from '../components/Layout.js';

import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import posts from '../reducers/posts';

import { getPosts } from '../reducers/posts';
import fetch from "isomorphic-unfetch";
import { baseURL } from "../api";

const makeStore = (initialState) =>
  createStore(combineReducers({
      posts,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

class Posts extends Component {

  renderPosts = (posts) => posts.map((post) => (
    <article className="mb-4" key={post._id}>
      <Link href={`/post/${post._id}`}>
        <h2>{post.title}</h2>
      </Link>
      <h5>{post.author}</h5>
      {post.description && <p>{post.description}</p>}
      <p>{moment(post.created_at).format('LL')}</p>
      {/*<img src={props.show.image.medium} />*/}
    </article>
  ));

  render() {
    const { posts } = this.props;
    return (
      <div>
        <div>
          <div>
            <h1>
              Crazy Next.js Super Fresh Blog
            </h1>
          </div>
        </div>
        <style jsx>{`
          div > div {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 400px;
            width: 100%;
            box-shadow: 0px 3px 10px 0px rgba(50, 50, 50, 0.5);
            background-image: url('/static/posts-title-bg.jpg');
            background-size: cover;
            background-position: 50% 50%;
          }
          div > div > h1 {
            font-size: 50px;
            color: white;
            text-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
          }
        `}
        </style>
        <Layout>
          {posts.length > 0 ?
            this.renderPosts(posts)
              :
            'There\'s no posts yet'
          }
        </Layout>
      </div>
    );
  }
}

Posts.getInitialProps = async function () {
  const res = await fetch(`${baseURL}/api/posts`);
  const posts = await res.json();
  return { ...posts };
};

Posts.propTypes = {
  posts: propTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPosts,
}, dispatch);

export default withRedux(makeStore, null, mapDispatchToProps)(Posts);