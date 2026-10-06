import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navigateToSearch = (term) => {
    const query = term.trim();

    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setIsSearchFocused(false);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigateToSearch(searchTerm);
  };

  return (
    <nav className="sleek-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          FindMyWay
        </Link>
        <form className="navbar-search" role="search" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            placeholder="Use existing solution"
            aria-label="Use existing solution"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onFocus={() => setIsSearchFocused(true)}
          />
          {isSearchFocused && (
            <div className="search-suggestions" role="listbox" aria-label="Related searches">
              <button
                className="search-suggestion"
                type="button"
                onClick={() => navigateToSearch('IIT Mandi')}
              >
                IIT Mandi
              </button>
            </div>
          )}
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
