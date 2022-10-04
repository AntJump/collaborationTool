package com.antjump.ant.qna.service;

import com.antjump.ant.common.paging.SelectCriteria;
import com.antjump.ant.qna.dao.QNAMapper;
import com.antjump.ant.qna.dto.QNAListDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <pre>
 * Class : QNAService
 * Comment:  연결을 열거나 닫고, 비지니스 로직 수행하거나 트랜잭션 제어
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-03       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
@Service
public class QNAService {

    private static final Logger log = LoggerFactory.getLogger(QNAService.class);
    private final QNAMapper qnaMapper;

    public QNAService(QNAMapper qnaMapper) {
        this.qnaMapper = qnaMapper;
    }

    public int selectQNATotal() {

        log.info("[QNAService] selectQNATotal Start ===============");
        int result = qnaMapper.selectQNATotal();

        log.info("[QNAService] selectQNATotal End ===============");
        return result;

    }

    public Object selectQNAListWithPaging(SelectCriteria selectCriteria) {

        log.info("[QNAService] selectQNAListWithPaging Start ===============");
        List<QNAListDTO> qnaList = qnaMapper.selectQNAListWithPaging(selectCriteria);

//        for (int i = 0; i < qnaList.size(); i++) {
//            qnaList.get(i).setQnaFileUrl(IMAGE_URL + qnaList.get(i).getQnaFileUrl());
//        }

        log.info("[QNAService] selectQNAListWithPaging End ===============");
        return qnaList;
    }
}
