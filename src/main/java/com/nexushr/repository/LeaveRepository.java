package com.nexushr.repository;

import com.nexushr.entity.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRepository extends JpaRepository<LeaveRequest, Long> {
    long countByStatus(com.nexushr.entity.LeaveStatus status);
}
