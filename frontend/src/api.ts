import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080"
});

// ==================== Employees ====================

export const getEmployees = () =>
  API.get("/employees");

export const addEmployee = (employee: any) =>
  API.post("/employees", employee);

export const updateEmployee = (id: number, employee: any) =>
  API.put(`/employees/${id}`, employee);

export const deleteEmployee = (id: number) =>
  API.delete(`/employees/${id}`);


// ==================== Departments ====================

export const getDepartments = () =>
  API.get("/departments");

export const addDepartment = (department: any) =>
  API.post("/departments", department);

export const updateDepartment = (
  id: number,
  department: any
) =>
  API.put(`/departments/${id}`, department);

export const deleteDepartment = (id: number) =>
  API.delete(`/departments/${id}`);


// ==================== Leaves ====================

export const getLeaves = () =>
  API.get("/leaves");

export const approveLeave = (id: number) =>
  API.put(`/leaves/${id}/approve`);

export const rejectLeave = (id: number) =>
  API.put(`/leaves/${id}/reject`);

export const deleteLeave = (id: number) =>
  API.delete(`/leaves/${id}`);


// ==================== Attendance ====================

export const getAttendance = () =>
  API.get("/attendance");

export const addAttendance = (attendance: any) =>
  API.post("/attendance", attendance);

export const deleteAttendance = (id: number) =>
  API.delete(`/attendance/${id}`);

  // ==================== Authentication ====================

  export const registerUser = (user: any) =>
    API.post("/auth/register", user);

  export const loginUser = (user: any) =>
    API.post("/auth/login", user);

export default API;