import React from 'react';
import Header from './Header';
import Container from './Container';

const Layout = (props) => (
  <Container>
    <Header />
    {props.children}
  </Container>
);

export default Layout;
