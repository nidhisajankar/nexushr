package com.nexushr.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DashboardResponse {

    private long totalEmployees;
    private long totalDepartments;
    private long totalAttendance;
    private long totalLeaves;

    private long pendingLeaves;
    private long approvedLeaves;
    private long rejectedLeaves;
}