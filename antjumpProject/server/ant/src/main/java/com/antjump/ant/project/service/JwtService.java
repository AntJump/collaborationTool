package com.antjump.ant.project.service;

import com.antjump.ant.exception.TokenException;
import com.antjump.ant.project.dto.InvitationDto;
import io.jsonwebtoken.*;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.antjump.ant.project.utils.DateUtil.*;

/**
 * <pre>
 * Class : TokenUtil
 * Comment: jwt 토큰 생성 및
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-10       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 */

@Service
public class JwtService {
    private final String SCRIPT = "antCollaborationToolInvitationTokenKey";
    private final Long EXPIRED_TIME = 1000 * 60L * 60L * 24L; // 토큰 유효 시간 - 하루(24시간)

    private final byte[] key;

    public JwtService() {
        System.out.println("[JwtService] constructor ==========================");

        // 비밀키 생성
        byte[] key = null;

        try {
            key = SCRIPT.getBytes("UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        System.out.println("secret key: "+key);
        this.key = key;
    }

    // 초대 프로젝트 id와 초대자 이메일 정보를 담은 JWT 토큰 생성
    public String generateInvitationToken(InvitationDto invitationDto){

        // header 정보 map 생성
//        Map<String, Object> headers = new HashMap<>();
//        headers.put("typ", "JWT");   // 토큰 타입
//        headers.put("alg", "HS256"); // jwt 암호화 방식

        // payload에 들어갈 claim 생성
        Claims claims = Jwts.claims();
        claims.put("p", invitationDto.getFkProjectsProjectId());
        claims.put("e", invitationDto.getInvitationEmail());

        Long currentTime = getCurrentTime();
        Date currentDate = getCurrentDateByTime(currentTime);
        Date expiredDate = getPredictionDateWithIncrement(currentTime,EXPIRED_TIME);

        return Jwts.builder()
//                .setHeader(headers)             // 헤더
                .setClaims(claims)            // 페이로드
                .setIssuedAt(currentDate)       // 토큰 발급 시간
                .setExpiration(expiredDate)     // 토큰 만료 시간
                .signWith(SignatureAlgorithm.HS256, this.key) // 서명
                .compact(); // 토큰 생성
    }

    public boolean verifyInvitationToken(String token){
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(this.key) // 비밀 키 입력
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            System.out.println("[verifyInvitationToken] 잘못된 JWT 서명입니다.");
            throw new TokenException("잘못된 JWT 서명입니다.");
        } catch (ExpiredJwtException e) {
            System.out.println("[verifyInvitationToken] 만료된 JWT 토큰입니다.");
            throw new TokenException("만료된 JWT 토큰입니다.");
        } catch (UnsupportedJwtException e) {
            System.out.println("[verifyInvitationToken] 지원되지 않는 JWT 토큰입니다.");
            throw new TokenException("지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
            System.out.println("[verifyInvitationToken] JWT 토큰이 잘못되었습니다.");
            throw new TokenException("JWT 토큰이 잘못되었습니다.");
        }
    }

    public InvitationDto getInvitationDtoFromToken(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(this.key) // 비밀 키 입력
                .build()
                .parseClaimsJws(token)
                .getBody();
        return new InvitationDto(0, (String) claims.get("e"), 'N',(int)claims.get("p"));
    }
}
