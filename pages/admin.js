import { Component } from 'react';
import Container from '../components/Container';

const styles = {
  padding: '10px',
  fontSize: '16px',
  display: 'block'
};

class Admin extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Admin Page</h1>
          <div>
            <input type="text" style={styles}/>
            <input type="password" style={styles}/>
          </div>
        </div>
      </Container>
    );
  }
};

export default Admin;
