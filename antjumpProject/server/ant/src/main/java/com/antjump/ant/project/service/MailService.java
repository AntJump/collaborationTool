package com.antjump.ant.project.service;

import org.apache.commons.codec.CharEncoding;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

/**
 * <pre>
 * Class : MailService
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-11       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see 참고할 class 또는 외부 url
 */

@Service
public class MailService {

    private JavaMailSender javaMailSender;
    public MailService(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }

    public void sendMail(String senderEmail,  String targetEmail, String title, String contents) throws MessagingException {

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, CharEncoding.UTF_8);

        try{
            messageHelper.setFrom(senderEmail);
            messageHelper.setTo(targetEmail); // 수신자
            messageHelper.setSubject(title);  // 제목
            messageHelper.setText(contents, true);  // 내용
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }

        /* 메일 전송 */
        javaMailSender.send(message);

    }
}
