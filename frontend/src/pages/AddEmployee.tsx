import { useState } from "react";
import { addEmployee } from "../api";

function AddEmployee() {

  const [employee, setEmployee] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: "",
    designation: "",
    salary: ""
  });

  const handleChange = (e: any) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {

      await addEmployee({
        ...employee,
        salary: Number(employee.salary)
      });

      alert("Employee Added Successfully");

      setEmployee({
        employeeId: "",
        fullName: "",
        email: "",
        department: "",
        designation: "",
        salary: ""
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">

      <h1>Add Employee</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={employee.employeeId}
          onChange={handleChange}
        />

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={employee.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={employee.designation}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
        />

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default AddEmployee;