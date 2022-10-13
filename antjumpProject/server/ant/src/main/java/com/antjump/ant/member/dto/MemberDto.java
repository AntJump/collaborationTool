package com.antjump.ant.member.dto;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Date;

public class MemberDto implements UserDetails {

    private Integer memberId; // 회원번호
    @Email(message = "유효한 이메일을 입력해주세요")
    private String memberEmail; // 이메일

    @NotBlank(message = "이름을 입력헤주세요")
    private String memberName; // 회원이름
    @NotBlank(message = "전화번호를 입력헤주세요")
    private String memberPhone; // 전화번호
    @NotBlank(message = "비밀번호를 입력헤주세요")
    @Pattern(regexp = "^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$")
    private String memberPwd; // 비밀번호
    private Timestamp memberRegistTime; // 가입일시
    private String memberType; // 등급유형
    private String memberDeleteYn; // 탈퇴여부
    private Date memberDeleteDate; // 탈퇴일시
    private String refreshToken; // 리프레쉬 토큰
    
    private String resetPasswordToken; // 비밀번호 재발급 토큰

    // 기본생성자
    public MemberDto() {
    }

    // 전체 내용이 파라미터로 들어가는 생성자
    public MemberDto(Integer memberId, String memberEmail, String memberName, String memberPhone, String memberPwd, Timestamp memberRegistTime, String memberType, String memberDeleteYn, Date memberDeleteDate, String refreshToken, Collection<? extends GrantedAuthority> authorities) {
        this.memberId = memberId;
        this.memberEmail = memberEmail;
        this.memberName = memberName;
        this.memberPhone = memberPhone;
        this.memberPwd = memberPwd;
        this.memberRegistTime = memberRegistTime;
        this.memberType = memberType;
        this.memberDeleteYn = memberDeleteYn;
        this.memberDeleteDate = memberDeleteDate;
        this.refreshToken = refreshToken;
        this.authorities = authorities;
    }

    // 여기는 게터 세터
    public Integer getMemberId() {
        return memberId;
    }

    public void setMemberId(Integer memberId) {
        this.memberId = memberId;
    }

    public String getMemberEmail() {
        return memberEmail;
    }

    public void setMemberEmail(String memberEmail) {
        this.memberEmail = memberEmail;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getMemberPhone() {
        return memberPhone;
    }

    public void setMemberPhone(String memberPhone) {
        this.memberPhone = memberPhone;
    }

    public String getMemberPwd() {
        return memberPwd;
    }

    public void setMemberPwd(String memberPwd) {
        this.memberPwd = memberPwd;
    }

    public Date getMemberRegistTime() {
        return memberRegistTime;
    }

    public void setMemberRegistTime(Timestamp memberRegistTime) {
        this.memberRegistTime = memberRegistTime;
    }

    public String getMemberType() {
        return memberType;
    }

    public void setMemberType(String memberType) {
        this.memberType = memberType;
    }

    public String getMemberDeleteYn() {
        return memberDeleteYn;
    }

    public void setMemberDeleteYn(String memberDeleteYn) {
        this.memberDeleteYn = memberDeleteYn;
    }

    public Date getMemberDeleteDate() {
        return memberDeleteDate;
    }

    public void setMemberDeleteDate(Date memberDeleteDate) {
        this.memberDeleteDate = memberDeleteDate;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
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
        return this.memberPwd;
    }

    @Override
    public String getUsername() {
        return this.memberName;
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
        return "MemberDto{" +
                "memberId=" + memberId +
                ", memberEmail='" + memberEmail + '\'' +
                ", memberName='" + memberName + '\'' +
                ", memberPhone='" + memberPhone + '\'' +
                ", memberPwd='" + memberPwd + '\'' +
                ", memberRegistTime=" + memberRegistTime +
                ", memberType='" + memberType + '\'' +
                ", memberDeleteYn='" + memberDeleteYn + '\'' +
                ", memberDeleteDate=" + memberDeleteDate +
                ", refreshToken='" + refreshToken + '\'' +
                ", authorities=" + authorities +
                '}';
    }
}
