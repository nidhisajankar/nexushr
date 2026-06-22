package com.nexushr.service;

import com.nexushr.entity.Department;
import com.nexushr.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    private final DepartmentRepository departmentRepository;

    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    public Department addDepartment(Department department) {
        return departmentRepository.save(department);
    }

    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public Department getDepartmentById(Long id) {
        return departmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Department Not Found"));
    }

    public Department updateDepartment(Long id, Department updatedDepartment) {

        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Department Not Found"));

        department.setDepartmentName(updatedDepartment.getDepartmentName());
        department.setDepartmentCode(updatedDepartment.getDepartmentCode());

        return departmentRepository.save(department);
    }

    public void deleteDepartment(Long id) {

        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Department Not Found"));

        departmentRepository.delete(department);
    }
}