import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import propTypes from 'prop-types';
import moment from 'moment';

import thunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper';
import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Layout from '../components/Layout.js';
import posts from '../reducers/posts';

import { baseURL } from '../api';
import { getPosts } from '../reducers/posts';
import { spliceText } from '../common';

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
        className="mb-4 posts-page__posts-inner-wrapper"
      >
        <div
          style={post.img && { backgroundImage: `url(/static/uploads/${post.img})` }}
          className="posts-page__post-container-with-image"
        >
          <footer className="posts-page__post-footer">
            <h3 className="mb-2">{spliceText(post.title, 0, 40)}</h3>
            {post.description && <p>{spliceText(post.description, 0, 70)}</p>}
            <div className="posts-page__post-footer-author-date">
              <div className="mb-2">{`Author: ${spliceText(post.author, 0, 16)}`}</div>
              <p>{moment(post.created_at).format('LL')}</p>
            </div>
          </footer>
        </div>
        <style jsx>{`
            .posts-page__posts-inner-wrapper {
              cursor: pointer;
              transition: background-size .5s ease-in-out,
                          box-shadow .7s ease,
                          color .5s ease,
                          background-color .3s ease;
            }
            .posts-page__post-container-with-image {
              width: 360px;
              height: 300px;
              box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.69);
              background-size: 150%;
              background-position: 50% 50%;
              display: flex;
              background-color: #a0a0a0;
              transition: background-size .5s ease-in-out,
                          box-shadow .7s ease,
                          color .5s ease,
                          background-color .3s ease;
              flex-direction: column-reverse;
            }
            .posts-page__post-container-with-image:hover {
              background-size: 160%;
              box-shadow: 0px 0px 30px 3px rgba(0,0,0,0.38)
            }
            .posts-page__post-footer {
              padding: 15px;
              transition: background-color .3s ease,
                          color .5s ease;
              background-color: rgba(0,0,0,.5);
              color: #fefefe;
            }
            .posts-page__post-container-with-image:hover .posts-page__post-footer {
              background-color: rgba(255, 205, 33, 0.9);
              color: #333;
            }
            .posts-page__post-footer-author-date {
              display: flex;
              justify-content: space-between;
            }
          `}
        </style>
      </article>
    </Link>
  ));

  justifyPosts = (length) => {
    switch (length) {
      case 1 : return 'flex-start';
      case 2 : return 'space-around';
      default: return 'space-between';
    }
  };

  render() {
    const { posts } = this.props;
    const justify = this.justifyPosts(posts.length);
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
          <h1 className="posts-page__subtitle">
            Recent Posts
          </h1>
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
            max-width: 1600px;
            margin: 0 auto;
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
          .posts-page__subtitle {
            margin: 50px 0;
            position: relative;
          }
          .posts-page__subtitle:before {
            content: '';
            display: block;
            width: 4px;
            height: 100%;
            position: absolute;
            left: -15px;
            background-color: #333;
          }
          .posts-page__posts-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: ${justify};
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