package com.antjump.ant.admin.dao;

import com.antjump.ant.admin.dto.AdminDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface AdminMapper {
    Optional<AdminDto> findByAdminEmail(String adminEmail);

    AdminDto selectByEmail(String adminEmail);

    int insertAdmin(AdminDto adminDto);
}
