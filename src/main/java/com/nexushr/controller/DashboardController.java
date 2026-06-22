package com.nexushr.controller;

import com.nexushr.dto.DashboardResponse;
import com.nexushr.service.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/dashboard")
    public DashboardResponse getDashboardStats() {
        return dashboardService.getDashboardStats();
    }
}
