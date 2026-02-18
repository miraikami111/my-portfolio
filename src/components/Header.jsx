import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {

  const location = useLocation();

  useEffect(() => {
    const navbar = document.getElementById("navbarNav");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }, [location]); // ページが変わったら実行

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
      <Link className="navbar-brand" to="/">🍔HOME</Link>

      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/profile">ABOUT ME</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/skills">SKILLS</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/project_1">PROJECT_01</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/project_2">PROJECT_02</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
