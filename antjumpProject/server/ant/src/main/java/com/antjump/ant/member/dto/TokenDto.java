package com.antjump.ant.member.dto;

/**
 * <pre>
 * Class : TokenDto
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-09-17       HP           최초 생성
 * </pre>
 *
 * @author 홍길동(최초 작성자)
 * @version 1(클래스 버전)
 * @see
 */
public class TokenDto {

    private String grantType;
    private String memberName;
    private String accessToken;
    private Long accessTokenExpiresIn;

    public TokenDto() {
    }

    public TokenDto(String grantType, String memberName, String accessToken, Long accessTokenExpiresIn) {
        this.grantType = grantType;
        this.memberName = memberName;
        this.accessToken = accessToken;
        this.accessTokenExpiresIn = accessTokenExpiresIn;
    }

    public String getGrantType() {
        return grantType;
    }

    public void setGrantType(String grantType) {
        this.grantType = grantType;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public Long getAccessTokenExpiresIn() {
        return accessTokenExpiresIn;
    }

    public void setAccessTokenExpiresIn(Long accessTokenExpiresIn) {
        this.accessTokenExpiresIn = accessTokenExpiresIn;
    }

    @Override
    public String toString() {
        return "TokenDto{" +
                "grantType='" + grantType + '\'' +
                ", memberName='" + memberName + '\'' +
                ", accessToken='" + accessToken + '\'' +
                ", accessTokenExpiresIn=" + accessTokenExpiresIn +
                '}';
    }
}
