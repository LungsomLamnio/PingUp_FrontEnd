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
    <div className="container">
      <h1 className="text-center">Welcome to PingUp!</h1>
      <h4 className="text-center">What's your role?</h4>
      <div className="role-buttons d-flex justify-content-center gap-4">
        <button
          className="btn btn-dark"
          onClick={() => handleRoleClick("admin")}
        >
          Admin
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleRoleClick("user")}
        >
          User
        </button>
      </div>
    </div>
  );
}
