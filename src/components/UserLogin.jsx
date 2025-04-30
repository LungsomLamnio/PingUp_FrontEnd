export default function UserLogin() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h4 className="text-center mb-3 text-primary fw-bold">User Login</h4>
        <div className="">
          <form action="/">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                placeholder="enter your username"
                id="username"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:{" "}
              </label>
              <input
                type="password"
                placeholder="enter your password"
                id="password"
                className="form-control"
                required
              />
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">
                login
              </button>
            </div>
            <div className="text-center">
              <a href="/user-signup" className="text-decoration-none">
                Don't have an acoount? <strong>Sign Up</strong>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
