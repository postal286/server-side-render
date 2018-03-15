import Link from 'next/link';

const Header = () => (
  <div className="header__wrapper mb-4">
    <p className="header__title">Crazy Next.js Super Fresh Blog</p>
    <div>
      <Link href="/posts">
        <a className="btn btn-outline-dark" role="button">Posts</a>
      </Link>
      <Link href="/about">
        <a className="btn btn-outline-dark ml-2" role="button">About</a>
      </Link>
    </div>
    <style jsx>{`
      .header__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .header__title {
        font-size: 20px;
      }
    `}</style>
  </div>
);

export default Header;
