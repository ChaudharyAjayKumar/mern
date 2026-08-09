const C1 = ({ isLogged }) => {
  if (isLogged) {
    return <div>Welcome</div>;
  } else {
    return <div>Failed</div>;
  }
};

export default C1;
