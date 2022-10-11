package com.antjump.ant.admin.dto;

public class AdminTokenDto {

    private String grantType;
    private String adminEmail;
    private String accessToken;
    private Long accessTokenExpiresIn;

    public AdminTokenDto() {
    }

    public AdminTokenDto(String grantType, String adminEmail, String accessToken, Long accessTokenExpiresIn) {
        this.grantType = grantType;
        this.adminEmail = adminEmail;
        this.accessToken = accessToken;
        this.accessTokenExpiresIn = accessTokenExpiresIn;
    }

    public String getGrantType() {
        return grantType;
    }

    public void setGrantType(String grantType) {
        this.grantType = grantType;
    }

    public String getAdminEmail() {
        return adminEmail;
    }

    public void setAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
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
        return "AdminTokenDto{" +
                "grantType='" + grantType + '\'' +
                ", adminEmail='" + adminEmail + '\'' +
                ", accessToken='" + accessToken + '\'' +
                ", accessTokenExpiresIn=" + accessTokenExpiresIn +
                '}';
    }
}