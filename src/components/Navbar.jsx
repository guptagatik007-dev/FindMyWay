import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="sleek-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          FindMyWay
        </Link>
        <form className="navbar-search" role="search">
          <input type="search" placeholder="Use existing solution" aria-label="Use existing solution" />
          <button className="search-button" type="submit" aria-label="Search">
            <span className="search-icon" aria-hidden="true" />
          </button>
        </form>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-login">
              Login <span aria-hidden="true">&rarr;</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
