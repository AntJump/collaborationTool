package com.antjump.ant.project.date;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * <pre>
 * Class : DateGenerator
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-07       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see 참고할 class 또는 외부 url
 */
public class DateOperation {

    public static String getCurrentDateWithFormating(String pattern){
        SimpleDateFormat format = new SimpleDateFormat(pattern);
        Date now = new Date();
        return format.format(now);
    }

}
