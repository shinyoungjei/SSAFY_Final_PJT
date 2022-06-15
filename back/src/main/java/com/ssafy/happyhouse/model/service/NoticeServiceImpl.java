package com.ssafy.happyhouse.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.happyhouse.dto.Notice;
import com.ssafy.happyhouse.model.mapper.NoticeMapper;

@Service
public class NoticeServiceImpl implements NoticeService {
	
	@Autowired
	private NoticeMapper noticeMapper;

	// 전체 목록 조회
	@Override
	public List<Notice> selectAllNotice() throws SQLException {
		// TODO Auto-generated method stub
		return noticeMapper.selectAllNotice();
	}

	// 상세 조회
	@Override
	public Notice selectDetailNotice(int noticeNo) throws SQLException {
		return noticeMapper.selectDetailNotice(noticeNo);
	}

	// 공지사항 수정.
	@Override
	public boolean updateNotice(Notice notice) throws SQLException {
		return noticeMapper.updateNotice(notice)==1;
	}

	// 공지사항 삭제.
	@Override
	public boolean deleteNotice(int noticeNo) throws SQLException {
		return noticeMapper.deleteNotice(noticeNo)==1;
	}

	// 공지사항 등록.
	@Override
	public boolean insertNotice(Notice notice) throws SQLException {
		return noticeMapper.insertNotice(notice)==1;
	}

	// 검색 조회
	@Override
	public List<Notice> selectNoticeBySubject(String subject) throws SQLException {
		return noticeMapper.selectNoticeBySubject(subject);
	}

}
