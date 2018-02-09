const styles = {
  margin: '20px auto',
  width: '1200px',
  textAling: 'center'
};

export default (props) => (
  <div style={styles}>
    {props.children}
  </div>
);