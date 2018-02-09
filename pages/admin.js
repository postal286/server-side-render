import { Component } from 'react';
import Container from '../components/Container';

const inputStyles = {
  padding: '10px',
  marginBottom: '10px',
  fontSize: '16px',
  display: 'block',
  border: '1px solid #ccc'
};

const buttonStyles = {
  border: 'none',
  display: 'inline-block',
  padding: '8px 16px',
  verticalAlign: 'middle',
  overflow: 'hidden',
  textDecoration: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
}

class Admin extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Admin Page</h1>
          <form>
            <label>Name</label>
            <input type="text" style={inputStyles} />
            <label>Password</label>
            <input type="password" style={inputStyles} />
            <button style={buttonStyles}>Submit</button>
          </form>
        </div>
      </Container>
    );
  }
};

export default Admin;
