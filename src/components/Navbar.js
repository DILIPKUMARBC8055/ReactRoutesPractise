import { Outlet, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="nav">
        <h4>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "blue" } : null)}
            to={"/"}
          >
            Home
          </NavLink>
        </h4>
        <h4>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "blue" } : null)}
            to={"/about"}
          >
            About
          </NavLink>
        </h4>
        <h4>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "blue" } : null)}
            to={"/items"}
          >
            Items
          </NavLink>
        </h4>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
