import Header from './Header';

const Layout = (props) => (
  <Container>
    <Header />
    {props.children}
  </Container>
);

export default Layout;
