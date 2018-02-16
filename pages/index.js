import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
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

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`show data fetched. Count: ${data.length}`);

  return {
    show: data,
  };
};

export default Index;
