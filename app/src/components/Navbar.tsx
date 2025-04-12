import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Task Manager
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <Link className="nav-link" to="/TaskList">
            Task List
          </Link>
          <Link className="nav-link" to="/CreateTask">
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
