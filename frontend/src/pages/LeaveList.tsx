import { useEffect, useState } from "react";

import {
  getLeaves,
  approveLeave,
  rejectLeave,
  deleteLeave
} from "../api";

function LeaveList() {

  const [leaves, setLeaves] = useState<any[]>([]);

  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = async () => {
    try {

      const response = await getLeaves();
      setLeaves(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleApprove = async (id: number) => {

    await approveLeave(id);

    alert("Leave Approved");

    loadLeaves();
  };

  const handleReject = async (id: number) => {

    await rejectLeave(id);

    alert("Leave Rejected");

    loadLeaves();
  };

  const handleDelete = async (id: number) => {

    if (!window.confirm("Delete Leave Request?")) {
      return;
    }

    await deleteLeave(id);

    alert("Leave Deleted");

    loadLeaves();
  };

  return (
    <div className="container">

      <h1>Leave Requests</h1>

      <table border={1} width="100%">

        <thead>

          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {leaves.map((leave) => (

            <tr key={leave.id}>

              <td>{leave.id}</td>

              <td>
                {leave.employee?.fullName}
              </td>

              <td>{leave.startDate}</td>

              <td>{leave.endDate}</td>

              <td>{leave.reason}</td>

              <td>{leave.status}</td>

              <td>

                <button
                  onClick={() => handleApprove(leave.id)}
                >
                  Approve
                </button>

                <button
                  onClick={() => handleReject(leave.id)}
                >
                  Reject
                </button>

                <button
                  onClick={() => handleDelete(leave.id)}
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

export default LeaveList;