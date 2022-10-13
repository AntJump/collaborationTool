package com.antjump.ant.configuration;


import com.antjump.ant.jwt.JwtAccessDeniedHandler;
import com.antjump.ant.jwt.JwtAuthenticationEntryPoint;
import com.antjump.ant.jwt.TokenProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
/**
 * <pre>
 * Class : SecurityConfig
 * Comment:  스프링 시큐리티 설정
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-03       문지현           최초 생성
 * 2022-10-11       부시연           버그 수정
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final TokenProvider tokenProvider;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    public SecurityConfig(TokenProvider tokenProvider, JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint
            , JwtAccessDeniedHandler jwtAccessDeniedHandler){
        this.tokenProvider = tokenProvider;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                // CSRF 설정 Disable
                .csrf().disable()
                // exception handling
                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)

                // 시큐리티는 기본적으로 세션을 사용하지만 API 서버에선 세션을 사용하지 않기 때문에 세션 설정을 Stateless 로 설정
                .and()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                    // 로그인, 회원가입 API 는 토큰이 없는 상태에서 요청이 들어오기 때문에 permitAll 설정
                    .and()
                    .authorizeRequests()
                    .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
//                    .antMatchers("/admin/**").hasAnyRole("ADMIN")
                    .anyRequest().permitAll()
                .and()
                .cors()
                .and()
                // JwtFilter 를 addFilterBefore 로 등록했던 JwtSecurityConfig 클래스를 적용
                .apply(new JwtSecurityConfig(tokenProvider));
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        // 로컬 React에서 오는 요청은 CORS 허용해준다.
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:3001" ));

        configuration.setAllowedMethods(Arrays.asList("GET", "PUT", "POST", "DELETE", "PATCH"));

        configuration.setAllowedHeaders(Arrays.asList("Access-Control-Allow-Origin", "Content-Type", "Access-Control-Allow-Headers", "Authorization", "X-Requested-With"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}