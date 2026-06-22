package com.nexushr.service;

import com.nexushr.dto.DashboardResponse;
import com.nexushr.entity.LeaveStatus;
import com.nexushr.repository.AttendanceRepository;
import com.nexushr.repository.DepartmentRepository;
import com.nexushr.repository.EmployeeRepository;
import com.nexushr.repository.LeaveRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;
    private final AttendanceRepository attendanceRepository;
    private final LeaveRepository leaveRepository;

    public DashboardService(
            EmployeeRepository employeeRepository,
            DepartmentRepository departmentRepository,
            AttendanceRepository attendanceRepository,
            LeaveRepository leaveRepository) {

        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
        this.attendanceRepository = attendanceRepository;
        this.leaveRepository = leaveRepository;
    }

    public DashboardResponse getDashboardStats() {

        return DashboardResponse.builder()
                .totalEmployees(employeeRepository.count())
                .totalDepartments(departmentRepository.count())
                .totalAttendance(attendanceRepository.count())
                .totalLeaves(leaveRepository.count())
                .pendingLeaves(leaveRepository.countByStatus(LeaveStatus.PENDING))
                .approvedLeaves(leaveRepository.countByStatus(LeaveStatus.APPROVED))
                .rejectedLeaves(leaveRepository.countByStatus(LeaveStatus.REJECTED))
                .build();
    }
}