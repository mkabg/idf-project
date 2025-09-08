import "../assets/styles/nav-bar.css"
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">🏠</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </div>
  );
}
