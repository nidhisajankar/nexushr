package com.nexushr.dto;

import com.nexushr.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {

    private String fullName;
    private String email;
    private String password;
    private Role role;
}