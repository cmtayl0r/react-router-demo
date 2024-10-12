export default function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">
            <span>Username</span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
          <input
            id="username"
            type="text"
            className="input-field"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <span>Password</span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
          <input
            id="password"
            type="password"
            className="input-field"
            placeholder="Password"
            required
          />
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}
