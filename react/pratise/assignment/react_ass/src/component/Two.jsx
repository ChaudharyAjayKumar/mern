const Two = ({ name, email }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "red",
        padding: "20px",
        margin: "50px",
        borderRadius: "5px",
      }}
    >
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default Two;
