import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a className="btn btn-outline-dark" role="button">Home</a>
    </Link>
    <Link href="/about">
      <a className="btn btn-outline-dark ml-2" role="button">About</a>
    </Link>
  </div>
);

export default Header;
