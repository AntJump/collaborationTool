package com.antjump.ant.admin.dto;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
public class AdminDto implements UserDetails {

    private Integer adminId; // 관리자번호
    private String adminEmail; // 관리자아이디
    private String adminPwd; // 관리자비밀번호
    private String adminRole; // 관리자 권한

    public AdminDto() {
    }

    public AdminDto(Integer adminId, String adminEmail, String adminPwd, String adminRole, Collection<? extends GrantedAuthority> authorities) {
        this.adminId = adminId;
        this.adminEmail = adminEmail;
        this.adminPwd = adminPwd;
        this.adminRole = adminRole;
        this.authorities = authorities;
    }

    public Integer getAdminId() {
        return adminId;
    }

    public void setAdminId(Integer adminId) {
        this.adminId = adminId;
    }

    public String getAdminEmail() {
        return adminEmail;
    }

    public void setAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
    }

    public String getAdminPwd() {
        return adminPwd;
    }

    public void setAdminPwd(String adminPwd) {
        this.adminPwd = adminPwd;
    }

    public String getAdminRole() {
        return adminRole;
    }

    public void setAdminRole(String adminRole) {
        this.adminRole = adminRole;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    // 이하 코드는 security 를 위한 용도
    private Collection<? extends GrantedAuthority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getPassword() {
        return this.adminPwd;
    }

    @Override
    public String getUsername() {
        return this.adminEmail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    // 휴면계정 설정할때 사용
    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String toString() {
        return "AdminDto{" +
                "adminId=" + adminId +
                ", adminEmail='" + adminEmail + '\'' +
                ", adminPwd='" + adminPwd + '\'' +
                ", adminRole='" + adminRole + '\'' +
                ", authorities=" + authorities +
                '}';
    }
}