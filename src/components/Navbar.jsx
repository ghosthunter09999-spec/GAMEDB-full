import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-warning">
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand text-warning fs-3" to="/">
          🎮 GameDB
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/review">
                Write Review
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rating">
                Rate Game
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/suggest-game">
                Suggest Game
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <NavLink className="dropdown-item" to="/comment">
                    Comment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/feedback">
                    Feedback
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/newsletter">
                    Newsletter
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/report-bug">
                    Report Bug
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item text-warning" to="/premium">
                    ⭐ Premium
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          {/* Auth buttons */}
          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-warning btn-sm">
              Login
            </Link>
            <Link to="/signup" className="btn btn-warning btn-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
