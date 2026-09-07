import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';
import './Login.css';

function Login() {
  return (
    <main className="login-page">
      <section className="login-feature" style={{ '--feature-image': `url(${heroImage})` }}>
        <div className="login-feature-content">
          <span className="login-eyebrow">Navigation Solutions</span>
          <h1>Find your way through every space.</h1>
          <p>Manage your indoor navigation experience from one simple place.</p>
        </div>
      </section>
      <section className="login-panel">
        <div className="login-form-wrap">
          <Link className="login-back" to="/">&larr; Back to home</Link>
          <h2>Welcome back</h2>
          <p className="login-intro">Sign in to continue to your navigation dashboard.</p>
          <form className="login-form">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required />
            <button className="login-submit" type="submit">
              Sign in <span aria-hidden="true">&rarr;</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
