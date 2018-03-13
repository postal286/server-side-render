import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import {baseURL} from "../api";

const Post = (props) => (
  <Layout>
    <h1>123</h1>
    {/*<img src={`static/uploads/${props.post.img}`} />*/}
    {/*<p>{props.post.title.replace(/<[/]?p>/g, '')}</p>*/}
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`${baseURL}/api/post/${id}`);
  const post = await res.json();
  console.log('post', post.post);
  return { post };
};

export default Post;
