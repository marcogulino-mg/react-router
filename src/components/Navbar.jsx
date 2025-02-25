import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="header-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/postlist">PostList</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">AboutUs</NavLink>
        </li>
        <li>
          <NavLink to="/postform">PostForm</NavLink>
        </li>
      </ul>
    </nav>
  );
}
