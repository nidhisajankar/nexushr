import { useEffect, useState } from "react";

import {
  getEmployees,
  getDepartments,
  getAttendance,
  getLeaves
} from "../api";

function Dashboard() {

  const [employeeCount, setEmployeeCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [leaveCount, setLeaveCount] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {

      const employees = await getEmployees();
      const departments = await getDepartments();
      const attendance = await getAttendance();
      const leaves = await getLeaves();

      setEmployeeCount(employees.data.length);
      setDepartmentCount(departments.data.length);
      setAttendanceCount(attendance.data.length);
      setLeaveCount(leaves.data.length);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">

      <h1>NexusHR Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h2>👨‍💼 Total Employees</h2>
          <h1>{employeeCount}</h1>
        </div>

        <div className="card">
          <h2>🏢 Total Departments</h2>
          <h1>{departmentCount}</h1>
        </div>

        <div className="card">
          <h2>📅 Total Attendance</h2>
          <h1>{attendanceCount}</h1>
        </div>

        <div className="card">
          <h2>📝 Total Leaves</h2>
          <h1>{leaveCount}</h1>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;