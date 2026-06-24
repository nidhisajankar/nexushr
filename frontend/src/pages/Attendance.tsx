import { Link } from "react-router-dom";

function Attendance() {
  return (
    <div className="container">

      <h1>Attendance Management</h1>

      <br />

      <Link to="/attendance/list">
        <button>View Attendance</button>
      </Link>

    </div>
  );
}

export default Attendance;