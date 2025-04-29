import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  let handleRoleClick = (role) => {
    if (role == "admin") {
      navigate("/admin-login");
    } else if (role == "user") {
      navigate("/user-login");
    } else {
      console.log("invalid role");
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="mb-3 text-primary fw-bold">Welcome to PingUp!</h1>
        <h5 className="mb-4 text-secondary">What's your role?</h5>
        <div className="d-flex justify-content-center gap-4">
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => handleRoleClick("admin")}
          >
            Admin
          </button>
          <button
            className="btn btn-outline-primary px-4 py-2"
            onClick={() => handleRoleClick("user")}
          >
            User
          </button>
        </div>
      </div>
    </div>
  );
}
