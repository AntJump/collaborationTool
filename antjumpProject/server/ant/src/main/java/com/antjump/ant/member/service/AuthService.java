package com.antjump.ant.member.service;

import com.antjump.ant.exception.DuplicatedUsernameException;
import com.antjump.ant.exception.LoginFailedException;
import com.antjump.ant.jwt.TokenProvider;
import com.antjump.ant.member.dao.MemberMapper;
import com.antjump.ant.member.dto.MemberDto;
import com.antjump.ant.member.dto.TokenDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class AuthService {

    private static final Logger log = LoggerFactory.getLogger(AuthService.class);
    private final MemberMapper memberMapper;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;

    public AuthService(MemberMapper memberMapper, PasswordEncoder passwordEncoder, TokenProvider tokenProvider) {
        this.memberMapper = memberMapper;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @Transactional
    public MemberDto signup(MemberDto memberDto) {
        log.info("[AuthService] Signup Start ===================================");
        log.info("[AuthService] MemberRequestDto {}", memberDto);

        if(memberMapper.selectByEmail(memberDto.getMemberEmail()) != null) {
            log.info("[AuthService] 이메일이 중복됩니다.");
            throw new DuplicatedUsernameException("이메일이 중복됩니다.");
        }

        log.info("[AuthService] Member Signup Start ==============================");
        memberDto.setMemberPwd(passwordEncoder.encode(memberDto.getMemberPwd()));
        log.info("[AuthService] Member {}", memberDto);
        int result = memberMapper.insertMember(memberDto);
        log.info("[AuthService] Member Insert Result {}", result > 0 ? "회원 가입 성공" : "회원 가입 실패");

        log.info("[AuthService] Signup End ==============================");

        return memberDto;
    }


    @Transactional
    public TokenDto login(MemberDto memberDto) {
        log.info("[AuthService] Login Start ===================================");
        log.info("[AuthService] {}", memberDto);

        // 1. 아이디 조회
        MemberDto member = memberMapper.findByMemberEmail(memberDto.getMemberEmail())
                .orElseThrow(() -> new LoginFailedException("잘못된 아이디 또는 비밀번호입니다"));

        // 2. 비밀번호 매칭
        if (!passwordEncoder.matches(memberDto.getMemberPwd(), member.getMemberPwd())) {
            log.info("[AuthService] Password Match Fail!!!!!!!!!!!!");
            throw new LoginFailedException("잘못된 아이디 또는 비밀번호입니다");
        }

        // 3. 토큰 발급
        TokenDto tokenDto = tokenProvider.generateTokenDto(member);
        log.info("[AuthService] tokenDto {}", tokenDto);

        log.info("[AuthService] Login End ===================================");

        return tokenDto;
    }
}
