package com.antjump.ant.jwt;

import com.antjump.ant.admin.dto.AdminDto;
import com.antjump.ant.admin.dto.AdminTokenDto;
import com.antjump.ant.exception.TokenException;
import com.antjump.ant.member.dto.MemberDto;
import com.antjump.ant.member.dto.TokenDto;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.*;
import java.util.stream.Collectors;

@Component
public class TokenProvider {

    private static final Logger log = LoggerFactory.getLogger(TokenProvider.class);
    private static final String AUTHORITIES_KEY = "auth";
    private static final String BEARER_TYPE = "bearer";
    private static final long ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 30;            // 30분

    private final UserDetailsService userDetailsService;

    private final Key key;

    public TokenProvider(@Value("${jwt.secret}") String secretKey, @Lazy UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public TokenDto generateTokenDto(MemberDto member) {
        log.info("[TokenProvider] generateTokenDto Start ===================================");

        Claims claims = Jwts
                .claims()
                .setSubject(String.valueOf(member.getMemberId()));

        long now = (new Date()).getTime();

        // Access Token 생성
        Date accessTokenExpiresIn = new Date(now + ACCESS_TOKEN_EXPIRE_TIME);
        String accessToken = Jwts.builder()
                .setClaims(claims)
                //.claim(AUTHORITIES_KEY, roles)
                .setExpiration(accessTokenExpiresIn)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

        return new TokenDto(BEARER_TYPE, member.getMemberName(), accessToken, accessTokenExpiresIn.getTime());
    }

    public AdminTokenDto generateAdminTokenDto(AdminDto admin) {
        log.info("[AdminTokenProvider] generateTokenDto Start ===================================");

        Claims claims = Jwts
                .claims()
                .setSubject(String.valueOf(admin.getAdminEmail()));

        long now = (new Date()).getTime();

        // Access Token 생성
        Date accessTokenExpiresIn = new Date(now + ACCESS_TOKEN_EXPIRE_TIME);
        String accessToken = Jwts.builder()
                .setClaims(claims)
                .setExpiration(accessTokenExpiresIn)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

        return new AdminTokenDto(BEARER_TYPE, admin.getAdminEmail(), accessToken, accessTokenExpiresIn.getTime());
    }

    public String getUserId(String accessToken) {
        return Jwts
                .parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(accessToken)
                .getBody()
                .getSubject();
    }
        public Authentication getAuthentication(String accessToken) {
            // 토큰 복호화
            Claims claims = parseClaims(accessToken);

            if (claims.get(AUTHORITIES_KEY) == null) {
                throw new RuntimeException("권한 정보가 없는 토큰입니다.");
            }

            // 클레임에서 권한 정보 가져오기
            Collection<? extends GrantedAuthority> authorities =
                    Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                            .map(SimpleGrantedAuthority::new)
                            .collect(Collectors.toList());
            log.info("[TokenProvider] authorities : {}", authorities);
            // UserDetails 객체를 만들어서 Authentication 리턴
            UserDetails userDetails = userDetailsService.loadUserByUsername(this.getUserId(accessToken));

            return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
        }

        public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            log.info("[TokenProvider] 잘못된 JWT 서명입니다.");
            throw new TokenException("잘못된 JWT 서명입니다.");
        } catch (ExpiredJwtException e) {
            log.info("[TokenProvider] 만료된 JWT 토큰입니다.");
            throw new TokenException("만료된 JWT 토큰입니다.");
        } catch (UnsupportedJwtException e) {
            log.info("[TokenProvider] 지원되지 않는 JWT 토큰입니다.");
            throw new TokenException("지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
            log.info("[TokenProvider] JWT 토큰이 잘못되었습니다.");
            throw new TokenException("JWT 토큰이 잘못되었습니다.");
        }

    }

    private Claims parseClaims(String accessToken) {
        try {
            return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(accessToken).getBody();
        } catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }
}
