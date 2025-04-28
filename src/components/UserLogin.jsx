export default function UserLogin() {
  return (
    <>
      <h4 className="text-center">User Login</h4>
      <div className="container d-flex justify-content-center">
        <form action="/">
          <div className="d-flex mb-3">
            <label htmlFor="username" className="">
              Username:
            </label>
            <input
              type="text"
              placeholder="enter your username"
              id="username"
            />
          </div>
          <div className="d-flex">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder="enter your password"
              id="password"
            />
          </div>
          <div>
            <a href="/" className="text-center">
              Didn't have an account? signup
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
