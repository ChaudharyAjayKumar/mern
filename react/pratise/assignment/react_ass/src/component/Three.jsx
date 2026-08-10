const Three = ({ LoginStatus }) => {
  if (LoginStatus) {
    return <h2>Welcome back, User!</h2>;
  } else {
    return <h2>Please log in.</h2>;
  }
};

export default Three;
