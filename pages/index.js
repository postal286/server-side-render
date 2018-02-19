import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import { createStore } from 'redux';
import withRedux from 'next-redux-wrapper';
import reducer from '../reducers/index';

import Layout from '../components/MyLayout.js';

const makeStore = (initialState, options) => createStore(reducer, initialState);

const MainPage = (props) => (
  <Layout>
    <h1>My Blog</h1>
    {props.show.map(({show}, index) => (
      <li key={index}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
          <a>
            {show.name}
          </a>
        </Link>
      </li>
    ))}
  </Layout>
);

MainPage.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  return {
    show: data,
  };
};

const Index = withRedux(makeStore, (state) => ({ user: state.user }))(MainPage);

export default Index;
