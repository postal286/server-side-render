import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import { createStore } from 'redux';
import withRedux from 'next-redux-wrapper';
import reducer from '../reducers/index';

import Layout from '../components/Layout.js';

const makeStore = (initialState, options) => createStore(reducer, initialState);

const MainPage = (props) => (
  <Layout>
    <h1 className="my-3 main-page__title">
      Welcome to Crazy Next.js<br />Super Fresh Blog
    </h1>
    <div>
      If you are Admin, please, login in the <Link href="/admin">Admin Login Page</Link>
    </div>
    {props.show.map(({show}, index) => (
      <li key={index}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
          <a>
            {show.name}
          </a>
        </Link>
      </li>
    ))}
    <style jsx>{`
      .main-page__title {
        font-size: 65px;
        text-align: center;
      }
    `}</style>
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
