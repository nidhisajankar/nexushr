import { useEffect, useState } from "react";
import { getEmployees, getDepartments } from "../api";

function Reports() {

  const [employeeCount, setEmployeeCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {

    try {

      const employees = await getEmployees();
      const departments = await getDepartments();

      setEmployeeCount(employees.data.length);
      setDepartmentCount(departments.data.length);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">

      <h1>Reports & Analytics</h1>

      <div className="cards">

        <div className="card">
          <h2>Total Employees</h2>
          <h1>{employeeCount}</h1>
        </div>

        <div className="card">
          <h2>Total Departments</h2>
          <h1>{departmentCount}</h1>
        </div>

        <div className="card">
          <h2>Attendance Report</h2>
          <h1>0</h1>
        </div>

        <div className="card">
          <h2>Leave Report</h2>
          <h1>0</h1>
        </div>

      </div>

    </div>
  );
}

export default Reports;