import { useEffect, useState } from "react";

import {
  getDepartments,
  updateDepartment,
  deleteDepartment
} from "../api";

function DepartmentList() {

  const [departments, setDepartments] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [department, setDepartment] = useState({
    departmentName: "",
    departmentCode: ""
  });

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const response = await getDepartments();
    setDepartments(response.data);
  };

  const handleEdit = (dept: any) => {

    setDepartment({
      departmentName: dept.departmentName,
      departmentCode: dept.departmentCode
    });

    setEditingId(dept.id);
  };

  const handleUpdate = async () => {

    if (!editingId) return;

    await updateDepartment(
      editingId,
      department
    );

    alert("Department Updated");

    setEditingId(null);

    loadDepartments();
  };

  const handleDelete = async (id: number) => {

    if (!window.confirm("Delete Department?")) {
      return;
    }

    await deleteDepartment(id);

    alert("Department Deleted");

    loadDepartments();
  };

  return (
    <div className="container">

      <h1>Department List</h1>

      {editingId && (

        <div>

          <h3>Edit Department</h3>

          <input
            value={department.departmentName}
            onChange={(e) =>
              setDepartment({
                ...department,
                departmentName: e.target.value
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
            <th>Name</th>
            <th>Code</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {departments.map((dept) => (

            <tr key={dept.id}>

              <td>{dept.id}</td>
              <td>{dept.departmentName}</td>
              <td>{dept.departmentCode}</td>

              <td>

                <button
                  onClick={() => handleEdit(dept)}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(dept.id)}
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

export default DepartmentList;