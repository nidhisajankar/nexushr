import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged Out Successfully");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="sidebar">

      <h2 className="logo">NexusHR</h2>

      <ul className="menu">

        {isLoggedIn ? (
          <>
            <li>
              <Link to="/">📊 Dashboard</Link>
            </li>

            <li>
              <Link to="/employees">👨‍💼 Employees</Link>
            </li>

            <li>
              <Link to="/departments">🏢 Departments</Link>
            </li>

            <li>
              <Link to="/attendance">📅 Attendance</Link>
            </li>

            <li>
              <Link to="/leaves">📝 Leave Requests</Link>
            </li>

            <li>
              <Link to="/payroll">💰 Payroll</Link>
            </li>

            <li>
              <Link to="/reports">📈 Reports</Link>
            </li>

            <li
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              🚪 Logout
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">🔑 Login</Link>
            </li>

            <li>
              <Link to="/register">📝 Register</Link>
            </li>
          </>
        )}

      </ul>

    </div>
  );
}

export default Sidebar;