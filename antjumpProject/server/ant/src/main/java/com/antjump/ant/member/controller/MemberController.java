package com.antjump.ant.member.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.member.dto.MemberDto;
import com.antjump.ant.member.service.AuthService;
import com.antjump.ant.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
    @RequestMapping("/")
    public class MemberController {

        private final AuthService authService;

        public MemberController(AuthService authService, MemberService memberService) {
            this.authService = authService;
//        this.memberService = memberService;
        }

        @PostMapping("/signup")
        public ResponseEntity<ResponseDto> signup(@RequestBody MemberDto memberDto) {

            return ResponseEntity.ok().body(new ResponseDto(HttpStatus.CREATED, "회원가입 성공", authService.signup(memberDto)));
        }


        @PostMapping("/login")
        public ResponseEntity<ResponseDto> login(@RequestBody MemberDto memberDto) {

            return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "로그인 성공", authService.login(memberDto)));
    }
//    private final MemberService memberService;

//    @GetMapping("/members/{memberId}")
//    public ResponseEntity<ResponseDto> selectMyMemberInfo(@PathVariable String memberId) {
//
//        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "조회 성공", memberService.selectMyInfo(memberId)));
//    }
}