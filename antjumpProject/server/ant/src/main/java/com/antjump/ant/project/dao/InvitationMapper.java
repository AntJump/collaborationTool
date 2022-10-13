package com.antjump.ant.project.dao;

import com.antjump.ant.project.dto.InvitationDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <pre>
 * Class : InvitationMapper
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-10       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see 참고할 class 또는 외부 url
 */

@Mapper
public interface InvitationMapper {
    int invitationConfirmation(InvitationDto invitationDto);

    int registInvitationInfo(InvitationDto invitationDto);
    
    int checkIsRegisteredByInvitation(InvitationDto invitationDto);

    List<InvitationDto> selectInvitationList(int projectId);

    int deleteInvitationInfoById(int invitationId);
}
