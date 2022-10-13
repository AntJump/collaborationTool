package com.antjump.ant.admin.controller;

import com.antjump.ant.admin.dto.AdminDto;
import com.antjump.ant.admin.service.AdminAuthService;
import com.antjump.ant.common.ResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminAuthService adminAuthService;

    public AdminController(AdminAuthService adminAuthService) {
        this.adminAuthService = adminAuthService;
    }

    @PostMapping ("/login")
    public ResponseEntity<ResponseDto> login(@RequestBody AdminDto adminDto) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "로그인 성공", adminAuthService.adminLogin(adminDto)));
    }


    @PostMapping("/signup")
    public ResponseEntity<ResponseDto> signup(@RequestBody AdminDto adminDto) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.CREATED, "회원가입 성공", adminAuthService.adminSignup(adminDto)));
    }
}