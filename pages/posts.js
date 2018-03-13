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
    <Link
      key={post._id}
      href={`/post/${post._id}`}
    >
      <article
        title={`See "${post.title}" post detail`}
        className="mb-4 mx-2 posts-page__posts-inner-wrapper"
      >
        <div
          style={{
            backgroundImage: `url(/static/uploads/${post.img})`,
          }}
          className="posts-page__post-container-with-image"
        >
          <footer className="posts-page__post-footer">
            <h3 className="mb-2">{post.title}</h3>
            {post.description && <p>{post.description}</p>}
            <div className="mb-2">{`Posted by: ${post.author}`}</div>
            <p>{moment(post.created_at).format('LL')}</p>
          </footer>
        </div>
        <style jsx>{`
          .posts-page__posts-inner-wrapper {
            cursor: pointer;
            transition: background-size .5s ease-in-out,  box-shadow .7s ease;
          }
          .posts-page__post-container-with-image {
            width: 400px;
            height: 300px;
            background-size: 100%;
            background-position: 50% 50%;
            display: flex;
            background-color: #a0a0a0;
            transition: background-size .5s ease-in-out, box-shadow .7s ease;
            flex-direction: column-reverse;
          }
          .posts-page__post-container-with-image:hover {
            background-size: 105%;
            box-shadow: 0px 0px 30px 3px rgba(0,0,0,0.38)
          }
          .posts-page__post-footer {
            padding: 15px;
            background-color: rgba(0,0,0,.5);
            color: white;
          }
        `}
        </style>
    </article>
    </Link>

  ));

  render() {
    const { posts } = this.props;
    return (
      <div>
        <div>
          <div className="posts-page__wrapper">
            <h1 className="posts-page__title">
              Crazy Next.js Super Fresh Blog
            </h1>
          </div>
        </div>
        <Layout>
          <div className="posts-page__posts-wrapper">
            {posts.length > 0 ?
              this.renderPosts(posts)
                :
              'There\'s no posts yet'
            }
          </div>
        </Layout>
        <style jsx>{`
          .posts-page__wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 400px;
            width: 100%;
            background-color: #a0a0a0;
            box-shadow: 0px 3px 10px 0px rgba(50, 50, 50, 0.5);
            background-image: url('/static/posts-title-bg.jpg');
            background-size: cover;
            background-position: 50% 50%;
          }
          .posts-page__title {
            font-size: 50px;
            color: white;
            text-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
          }
          .posts-page__posts-wrapper {
            display: flex;
          }
        `}
        </style>
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