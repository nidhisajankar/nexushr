import { useState } from "react";
import { addDepartment } from "../api";

function AddDepartment() {

  const [department, setDepartment] = useState({
    departmentName: "",
    departmentCode: ""
  });

  const handleChange = (e: any) => {
    setDepartment({
      ...department,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {

      await addDepartment(department);

      alert("Department Added Successfully");

      setDepartment({
        departmentName: "",
        departmentCode: ""
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">

      <h1>Add Department</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="departmentName"
          placeholder="Department Name"
          value={department.departmentName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="departmentCode"
          placeholder="Department Code"
          value={department.departmentCode}
          onChange={handleChange}
        />

        <button type="submit">
          Add Department
        </button>

      </form>

    </div>
  );
}

export default AddDepartment;