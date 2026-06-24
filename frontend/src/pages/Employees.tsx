import { Link } from "react-router-dom";

function Employees() {

  return (

    <div className="container">

      <h1>Employee Management</h1>

      <br />

      <Link to="/employees/add">
        <button>
          Add Employee
        </button>
      </Link>

      <br />
      <br />

      <Link to="/employees/list">
        <button>
          View Employees
        </button>
      </Link>

    </div>

  );
}

export default Employees;