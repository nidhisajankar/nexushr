import { useEffect, useState } from "react";

import {
  getAttendance,
  deleteAttendance
} from "../api";

function AttendanceList() {

  const [attendance, setAttendance] = useState<any[]>([]);

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    try {

      const response = await getAttendance();
      setAttendance(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {

    if (!window.confirm("Delete Attendance Record?")) {
      return;
    }

    try {

      await deleteAttendance(id);

      alert("Attendance Deleted");

      loadAttendance();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">

      <h1>Attendance Records</h1>

      <table border={1} width="100%">

        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {attendance.map((att) => (

            <tr key={att.id}>

              <td>{att.id}</td>

              <td>
                {att.employee?.fullName}
              </td>

              <td>{att.date}</td>

              <td>{att.checkInTime}</td>

              <td>{att.checkOutTime}</td>

              <td>{att.status}</td>

              <td>

                <button
                  onClick={() => handleDelete(att.id)}
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

export default AttendanceList;