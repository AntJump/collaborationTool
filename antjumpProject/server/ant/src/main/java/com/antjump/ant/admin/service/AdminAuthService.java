package com.antjump.ant.admin.service;

import com.antjump.ant.admin.dao.AdminMapper;
import com.antjump.ant.admin.dto.AdminDto;
import com.antjump.ant.admin.dto.AdminTokenDto;
import com.antjump.ant.exception.DuplicatedUsernameException;
import com.antjump.ant.exception.LoginFailedException;
import com.antjump.ant.jwt.TokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class AdminAuthService {

    private static final Logger log = LoggerFactory.getLogger(com.antjump.ant.member.service.AuthService.class);

    private final AdminMapper adminMapper;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;

    public AdminAuthService(AdminMapper adminMapper, PasswordEncoder passwordEncoder, TokenProvider tokenProvider) {
        this.adminMapper = adminMapper;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @Transactional
    public AdminTokenDto adminLogin(AdminDto adminDto) {
        log.info("[AdminAuthService] Admin Login Start ===================================");
        log.info("[AdminAuthService] {}",adminDto);

        // 1. 아이디 조회
        AdminDto admin = adminMapper.findByAdminEmail(adminDto.getAdminEmail())
                .orElseThrow(() -> new LoginFailedException("잘못된 아이디 또는 비밀번호입니다"));

        // 2. 비밀번호 매칭
        if (!passwordEncoder.matches(adminDto.getAdminPwd(), admin.getAdminPwd())) {
            log.info("[AuthService] Password Match Fail!!!!!!!!!!!!");
            throw new LoginFailedException("잘못된 아이디 또는 비밀번호입니다");
        }

        // 3. 토큰 발급
        AdminTokenDto adminTokenDto = tokenProvider.generateAdminTokenDto(admin);
        log.info("[AuthService] tokenDto {}", adminTokenDto);

        log.info("[AuthService] Login End ===================================");

        return adminTokenDto;
    }

    public AdminDto adminSignup(AdminDto adminDto) {
        log.info("[AuthService] Signup Start ===================================");
        log.info("[AuthService] MemberRequestDto {}", adminDto);

        if(adminMapper.selectByEmail(adminDto.getAdminEmail()) != null) {
            log.info("[AuthService] 이메일이 중복됩니다.");
            throw new DuplicatedUsernameException("이메일이 중복됩니다.");
        }

        log.info("[AuthService] Member Signup Start ==============================");
        adminDto.setAdminPwd(passwordEncoder.encode(adminDto.getAdminPwd()));
        log.info("[AuthService] Member {}", adminDto);
        int result = adminMapper.insertAdmin(adminDto);
        log.info("[AuthService] Member Insert Result {}", result > 0 ? "회원 가입 성공" : "회원 가입 실패");

        log.info("[AuthService] Signup End ==============================");

        return adminDto;
    }
}
