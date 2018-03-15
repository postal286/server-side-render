import React from 'react';
import Footer from './Footer';
import Container from './Container';

const Layout = (props) => (
  <Container>
    {props.children}
    <Footer />
  </Container>
);

export default Layout;
