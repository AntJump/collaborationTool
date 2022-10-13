package com.antjump.ant.member.dao;

import com.antjump.ant.member.dto.MemberDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;


@Mapper
public interface MemberMapper {


    int insertMember(MemberDto member);

//    MemberDto selectByMemberId(String memberId);

    Optional<MemberDto> findByMemberEmail(String memberEmail);

    MemberDto selectByEmail(String memberEmail);

    MemberDto selectByMemberId(String memberId);

    int updateMember(MemberDto memberDto);

    void deleteMember(String memberId);

    List<MemberDto> selectMemberList();
}
