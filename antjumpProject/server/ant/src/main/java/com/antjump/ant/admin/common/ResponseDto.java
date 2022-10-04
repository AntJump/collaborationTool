package com.antjump.ant.admin.common;

import org.springframework.http.HttpStatus;

/**
 * <pre>
 * Class : ResponseDto
 * Comment: 메시지 내용
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-09-17       문지현           최초 생성
 * </pre>
 *
 * @author 문지현(최초 작성자)
 * @version 1(클래스 버전)
 * @see
 */
public class ResponseDto {
    private int status;
    private String message;
    private Object data;

    public ResponseDto(HttpStatus status, String message, Object data){
        this.status = status.value();
        this.message = message;
        this.data = data;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "ResponseDto{" +
                "status=" + status +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }
}
