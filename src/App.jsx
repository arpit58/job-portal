import React, { useState } from 'react';
import "./App.css"
const App = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log('Login form submitted:', loginEmail, loginPassword);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Add register logic here
    console.log('Register form submitted:', registerName, registerEmail, registerPassword);
  };

  return (
    <>
      <header>
        <h1>Job Portal</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h2>Welcome to Job Portal</h2>
          <p>Find your dream job or post your open positions.</p>
        </section>

        <section id="jobs">
          <h2>Featured Jobs</h2>
          <div id="job-listings">
            <div className="job-listing">
              <h3>Frontend Developer</h3>
              <p>Florida</p>
              <p>Category: Frontend</p>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>More Details</button>
            </div>
            <div className="job-listing">
              <h3>Backend Developer</h3>
              <p>Washington</p>
              <p>Category: Backend</p>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>More Details</button>
            </div>
            <div className="job-listing">
              <h3>Fullstack Developer</h3>
              <p>New York</p>
              <p>Category: Fullstack</p>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>More Details</button>
            </div>
          </div>
        </section>

        <section id="login">
          <h2>Login</h2>
          <form id="login-form" onSubmit={handleLoginSubmit}>
            <label htmlFor="login-email">Email:</label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={loginEmail}
              onChange={(event) => setLoginEmail(event.target.value)}
              required
            />

            <label htmlFor="login-password">Password:</label>
            <input
              type="password"
              id="login-password"
              name="password"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>
        </section>

        <section id="register">
          <h2>Register</h2>
          <form id="register-form" onSubmit={handleRegisterSubmit}>
            <label htmlFor="register-name">Name:</label>
            <input
              type="text"
              id="register-name"
              name="name"
              value={registerName}
              onChange={(event) => setRegisterName(event.target.value)}
              required
            />

            <label htmlFor="register-email">Email:</label>
            <input
              type="email"
              id="register-email"
              name="email"
              value={registerEmail}
              onChange={(event) => setRegisterEmail(event.target.value)}
              required
            />

            <label htmlFor="register-password">Password:</label>
            <input
              type="password"
              id="register-password"
              name="password"
              value={registerPassword}
              onChange={(event) => setRegisterPassword(event.target.value)}
              required
            />

            <button type="submit">Register</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Job Portal</p>
      </footer>
    </>
  );
};

export default App;