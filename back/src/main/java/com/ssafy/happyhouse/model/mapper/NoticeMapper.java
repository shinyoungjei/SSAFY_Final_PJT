package com.ssafy.happyhouse.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.happyhouse.dto.Notice;


@Mapper
public interface NoticeMapper {
	
	// 공지사항 전체 조회
	List<Notice> selectAllNotice() throws SQLException;
	
	// 공지사항 상세 조회
	Notice selectDetailNotice(int noticeNo) throws SQLException;

	// 공지사항 수정
	int updateNotice(Notice notice) throws SQLException;
	
	// 공지사항 삭제
	int deleteNotice(int noticeNo) throws SQLException;
	
	// 공지사항 등록
	int insertNotice(Notice notice) throws SQLException;
	
	// 검색(제목) -> 게시글 조회
	List<Notice> selectNoticeBySubject(String subject) throws SQLException;
	
}
