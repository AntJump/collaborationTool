package com.antjump.ant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

/**
 * <pre>
 * Class : AntApplication
 * Comment:  메인 어플리케이션 실행
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-02       문지현           최초 생성
 * 2022-10-06       부시연           yml 추가
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
@SpringBootApplication
public class AntApplication {

    public static final String APPLICATION_LOCATIONS = "spring.config.location="
            + "classpath:application.yml,"
            + "classpath:application-s3.yml";
    public static void main(String[] args) {
        new SpringApplicationBuilder(AntApplication.class)
                .properties(APPLICATION_LOCATIONS)
                .run(args);
    }
}
