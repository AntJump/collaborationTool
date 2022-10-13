package com.antjump.ant.member.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.member.dto.MemberDto;
import com.antjump.ant.member.service.AuthService;
import com.antjump.ant.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/")
    public class MemberController {
    private final AuthService authService;
    private final MemberService memberService;

    public MemberController(AuthService authService, MemberService memberService) {
        this.authService = authService;
        this.memberService = memberService;
    }

    @PostMapping("/auth/signup")
    public ResponseEntity<ResponseDto> signup(@RequestBody @Valid MemberDto memberDto) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.CREATED, "회원가입 성공", authService.signup(memberDto)));
    }


    @PostMapping("/auth/login")
    public ResponseEntity<ResponseDto> login(@RequestBody MemberDto memberDto) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "로그인 성공", authService.login(memberDto)));
    }

    @GetMapping("/member/{memberId}")
    public ResponseEntity<ResponseDto> selectMyMemberInfo(@PathVariable String memberId) {
        System.out.println("memberId = " + memberId);
        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "조회 성공", memberService.selectMyInfo(memberId)));
    }

    @PutMapping ("/member/update")
    public ResponseEntity<ResponseDto> updateMemberInfo(@RequestBody MemberDto memberDto) {
        System.out.println(memberDto);
        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회원정보 수정 성공", memberService.updateMyInfo(memberDto)));
    }

    @PutMapping("/member/delete/{memberId}")
    public ResponseEntity<ResponseDto> deleteMember(@PathVariable String memberId){
        System.out.println("memberId = " + memberId);
        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회원 탈퇴 완료", memberService.deleteMember(memberId)));
    }
}