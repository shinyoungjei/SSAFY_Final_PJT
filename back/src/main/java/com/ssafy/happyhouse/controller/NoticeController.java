package com.ssafy.happyhouse.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.happyhouse.dto.Notice;
import com.ssafy.happyhouse.dto.QnA;
import com.ssafy.happyhouse.model.service.NoticeService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api("NoticeController V1")
@RestController
@RequestMapping("/notice")
@CrossOrigin("*")
public class NoticeController {
	
	@Autowired
	private NoticeService noticeService;	
	
	// 공지사항 전체 조회
	@ApiOperation(value = "공지사항 게시글 목록", notes = "모든 공지사항 게시글의 정보를 반환한다.", response = List.class)
	@GetMapping
	public ResponseEntity<List<Notice>> getAllNotice() throws SQLException{
		return new ResponseEntity<List<Notice>>(noticeService.selectAllNotice(),HttpStatus.OK);
	}
	
	// 상세조회 
	@ApiOperation(value = "공지사항 게시글 상세 조회", notes = "공지사항 게시글의 정보를 반환한다.", response = QnA.class)
	@GetMapping("/{noticeNo}")
	public ResponseEntity<Notice> getDetailNotice(@PathVariable("noticeNo") int noticeNo) throws SQLException{
		return new ResponseEntity<Notice>(noticeService.selectDetailNotice(noticeNo), HttpStatus.OK);
	}
	
	// 공지사항 수정.
	@ApiOperation(value = "공지사항 게시글 수정", notes = "특정 공지사항 게시글의 정보를 수정한다.", response = String.class)
	@PutMapping("/modify/{noticeNo}")
	public ResponseEntity<String> modifyNotice(@RequestBody Notice notice) throws SQLException {
		if(noticeService.updateNotice(notice)) {
	 		return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// 공지사항 삭제
	@ApiOperation(value = "공지사항게시글 삭제", notes = "공지사항 게시글을 삭제한다.", response = String.class)
	@DeleteMapping("/delete/{noticeNo}")
	public ResponseEntity<String> removeNotice(@PathVariable("noticeNo") int noticeNo) throws SQLException {
		if(noticeService.deleteNotice(noticeNo)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// 공지사항 등록
	@ApiOperation(value = "공지사항 게시글 등록", notes = "공지사항 게시글을 등록한다.", response = String.class)
	@PostMapping("/regist")
	public ResponseEntity<String> addNotice(@RequestBody Notice notice) throws SQLException {
		if(noticeService.insertNotice(notice)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//검색어 조회
	@ApiOperation(value = "공지사항 게시글 검색", notes = "제목에 검색어가 포함된 공지사항 게시글의 정보를 반환한다.", response = List.class)
	@GetMapping("/search/{subject}")
	public ResponseEntity<List<Notice>> getNoticeBySubject(@PathVariable("subject") String subject) throws SQLException {
		return new ResponseEntity<List<Notice>>(noticeService.selectNoticeBySubject(subject), HttpStatus.OK);
	}

}










