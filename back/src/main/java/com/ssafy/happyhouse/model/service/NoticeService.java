package com.ssafy.happyhouse.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.happyhouse.dto.Notice;

public interface NoticeService {
	
	// 공지사항 전체 조회
	List<Notice> selectAllNotice() throws SQLException;
	
	// 상세조회
	Notice selectDetailNotice(int noticeNo) throws SQLException;
	
	// 공지사항 수정
	boolean updateNotice(Notice notice) throws SQLException;
	
	// 공지사항 삭제
	boolean deleteNotice(int noticeNo) throws SQLException;
	
	// 공지사항 등록
	boolean insertNotice(Notice notice) throws SQLException;
	
	// 검색(제목) -> 게시글 조회
	List<Notice> selectNoticeBySubject(String subject) throws SQLException;
}
