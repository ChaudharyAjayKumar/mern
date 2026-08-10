import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ gap: "10px" }}>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/">Register</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
