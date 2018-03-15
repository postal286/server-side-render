import moment from 'moment';
import draftToHtml from 'draftjs-to-html';
import ReactHTMLParser from 'react-html-parser';
import fetch from 'isomorphic-unfetch';

import Header from '../components/Header.js'
import { baseURL } from "../api";
import Layout from '../components/Layout.js';

const Post = (props) => (
  <Layout>
    <Header />
    <h1 className="post__title mb-4">
      {props.post.title}
    </h1>
    <p>Posted at <b><i>{moment(props.post.created_at).format('LL')}</i></b> by <b>{props.post.author}</b></p>
    <div className="post__image-wrapper mb-4">
      <img
        className="post__image"
        src={`../static/uploads/${props.post.img}`}
      />
    </div>
    <div className="post__content-wrapper">{ReactHTMLParser(draftToHtml(JSON.parse(props.post.body)))}</div>
    <style jsx>{`
      .post__title {
        font-size: 50px;
      }
      .post__image-wrapper {
        text-align: center;
      }
      .post__image {
        max-width: 700px;
        max-height: 600px;
        margin: 0 auto;
      }
      .post__content-wrapper {
        max-width: 900px;
        margin: 0 auto;
      }
    `}</style>
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  if (id) {
    const res = await fetch(`${baseURL}/api/post/${id}`);
    const post = await res.json();
    if(post._id) {
      return { post };
    } else {
      return {};
    }
  } else {
    return {};
  }
};

export default Post;
