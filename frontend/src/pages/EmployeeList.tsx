import { useEffect, useState } from "react";

import {
  getEmployees,
  updateEmployee,
  deleteEmployee
} from "../api";

function EmployeeList() {

  const [employees, setEmployees] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [employee, setEmployee] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: "",
    designation: "",
    salary: ""
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  const handleEdit = (emp: any) => {

    setEmployee({
      employeeId: emp.employeeId,
      fullName: emp.fullName,
      email: emp.email,
      department: emp.department,
      designation: emp.designation,
      salary: emp.salary.toString()
    });

    setEditingId(emp.id);
  };

  const handleUpdate = async () => {

    if (!editingId) return;

    await updateEmployee(editingId, {
      ...employee,
      salary: Number(employee.salary)
    });

    alert("Employee Updated");

    setEditingId(null);

    loadEmployees();
  };

  const handleDelete = async (id: number) => {

    if (!window.confirm("Delete Employee?")) {
      return;
    }

    await deleteEmployee(id);

    alert("Employee Deleted");

    loadEmployees();
  };

  return (
    <div className="container">

      <h1>Employee List</h1>

      {editingId && (

        <div>

          <h3>Edit Employee</h3>

          <input
            value={employee.fullName}
            onChange={(e) =>
              setEmployee({
                ...employee,
                fullName: e.target.value
              })
            }
          />

          <button onClick={handleUpdate}>
            Update
          </button>

        </div>
      )}

      <table border={1} width="100%">

        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>
              <td>{emp.employeeId}</td>
              <td>{emp.fullName}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>{emp.salary}</td>

              <td>

                <button
                  onClick={() => handleEdit(emp)}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeList;