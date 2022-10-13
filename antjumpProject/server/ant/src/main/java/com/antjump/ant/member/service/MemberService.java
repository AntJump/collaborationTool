package com.antjump.ant.member.service;

import com.antjump.ant.exception.DuplicatedUsernameException;
import com.antjump.ant.member.dao.MemberMapper;
import com.antjump.ant.member.dto.MemberDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@Service
public class MemberService {
    private static final Logger log = LoggerFactory.getLogger(MemberService.class);
    private final MemberMapper memberMapper;

    public MemberService(MemberMapper memberMapper) {
        this.memberMapper = memberMapper;
    }

    @GetMapping
    public MemberDto selectMyInfo(@PathVariable String memberId) {
        log.info("[MemberService] getMyInfo Start ==============================");

        MemberDto member = memberMapper.selectByMemberId(memberId);
        log.info("[MemberService] {}", member);
        log.info("[MemberService] getMyInfo End ==============================");

        return member;
    }

    @Transactional
    public MemberDto updateMyInfo(MemberDto memberDto) {
        int result = memberMapper.updateMember(memberDto);
        log.info("[MemberService] updateMyInfo ==============================");
        return memberDto;
    }


    @Transactional
    public boolean deleteMember(@PathVariable String memberId) {
        memberMapper.deleteMember(memberId);
        log.info("[MemberService] delete ==============================");
        return true;
    }
}
