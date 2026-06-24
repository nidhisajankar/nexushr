import { Link } from "react-router-dom";

function Departments() {
  return (
    <div className="container">

      <h1>Department Management</h1>

      <br />

      <Link to="/departments/add">
        <button>Add Department</button>
      </Link>

      <br />
      <br />

      <Link to="/departments/list">
        <button>View Departments</button>
      </Link>

    </div>
  );
}

export default Departments;