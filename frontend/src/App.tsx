import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";

import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EmployeeList from "./pages/EmployeeList";

import Departments from "./pages/Departments";
import AddDepartment from "./pages/AddDepartment";
import DepartmentList from "./pages/DepartmentList";

import Attendance from "./pages/Attendance";
import AttendanceList from "./pages/AttendanceList";

import LeaveList from "./pages/LeaveList";

import Payroll from "./pages/Payroll";
import Reports from "./pages/Reports";

import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

function App() {

  const isLoggedIn = localStorage.getItem("user");

  return (
    <BrowserRouter>

      {/* Login/Register par Sidebar hide */}
      <Sidebar />

      <Routes>

        {/* Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Dashboard */}

        <Route
          path="/"
          element={
            isLoggedIn ? <Dashboard /> : <Login />
          }
        />

        {/* Employee */}

        <Route
          path="/employees"
          element={
            isLoggedIn ? <Employees /> : <Login />
          }
        />

        <Route
          path="/employees/add"
          element={
            isLoggedIn ? <AddEmployee /> : <Login />
          }
        />

        <Route
          path="/employees/list"
          element={
            isLoggedIn ? <EmployeeList /> : <Login />
          }
        />

        {/* Department */}

        <Route
          path="/departments"
          element={
            isLoggedIn ? <Departments /> : <Login />
          }
        />

        <Route
          path="/departments/add"
          element={
            isLoggedIn ? <AddDepartment /> : <Login />
          }
        />

        <Route
          path="/departments/list"
          element={
            isLoggedIn ? <DepartmentList /> : <Login />
          }
        />

        {/* Attendance */}

        <Route
          path="/attendance"
          element={
            isLoggedIn ? <Attendance /> : <Login />
          }
        />

        <Route
          path="/attendance/list"
          element={
            isLoggedIn ? <AttendanceList /> : <Login />
          }
        />

        {/* Leaves */}

        <Route
          path="/leaves"
          element={
            isLoggedIn ? <LeaveList /> : <Login />
          }
        />

        {/* Payroll */}

        <Route
          path="/payroll"
          element={
            isLoggedIn ? <Payroll /> : <Login />
          }
        />

        {/* Reports */}

        <Route
          path="/reports"
          element={
            isLoggedIn ? <Reports /> : <Login />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;