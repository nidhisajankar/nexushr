import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">NexusHR</h2>

      <ul className="menu">

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
          onClick={() => {
            localStorage.clear();
            alert("Logged Out Successfully");
            window.location.href = "/";
          }}
        >
          🚪 Logout
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;