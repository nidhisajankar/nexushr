import { useEffect, useState } from "react";
import { getEmployees } from "../api";

function Payroll() {

  const [totalPayroll, setTotalPayroll] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);

  useEffect(() => {
    loadPayroll();
  }, []);

  const loadPayroll = async () => {

    try {

      const response = await getEmployees();

      const employees = response.data;

      let total = 0;

      employees.forEach((emp: any) => {
        total += emp.salary || 0;
      });

      setTotalPayroll(total);
      setEmployeeCount(employees.length);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">

      <h1>Payroll Management</h1>

      <div className="cards">

        <div className="card">
          <h2>Total Payroll</h2>
          <h1>₹{totalPayroll}</h1>
        </div>

        <div className="card">
          <h2>Total Employees</h2>
          <h1>{employeeCount}</h1>
        </div>

        <div className="card">
          <h2>Processed Salaries</h2>
          <h1>{employeeCount}</h1>
        </div>

        <div className="card">
          <h2>Current Month</h2>
          <h1>June 2026</h1>
        </div>

      </div>

    </div>
  );
}

export default Payroll;