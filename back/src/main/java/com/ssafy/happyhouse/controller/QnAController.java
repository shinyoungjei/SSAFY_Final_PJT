package com.ssafy.happyhouse.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.happyhouse.dto.QnA;
import com.ssafy.happyhouse.model.service.QnAService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api("Q&AController V1")
@RestController
@RequestMapping("/qna")
@CrossOrigin("*")
public class QnAController {
	
	@Autowired
	private QnAService qnaService;
	
	/**
	 * Q&A 게시글 전체 조회
	 * @return Q&A 전체 게시글 리스트
	 * @throws SQLException
	 */
	@ApiOperation(value = "Q&A 게시글 목록", notes = "모든 Q&A 게시글의 정보를 반환한다.", response = List.class)
	@GetMapping()
	public ResponseEntity<List<QnA>> getAllQnA() throws SQLException {
		return new ResponseEntity<List<QnA>>(qnaService.selectAllQnA(), HttpStatus.OK);
	}
	
	/**
	 * Q&A 게시글 상세 조회
	 * @param qnaNo: 상세 조회 게시물의 글 번호
	 * @return 글 번호에 해당하는 게시글 객체
	 * @throws SQLException
	 */
	@ApiOperation(value = "Q&A 게시글 상세 조회", notes = "특정 Q&A 게시글의 정보를 반환한다.", response = QnA.class)
	@GetMapping("/{qnaNo}")
	public ResponseEntity<QnA> getDetailQnA(@PathVariable("qnaNo") int qnaNo) throws SQLException {
		return new ResponseEntity<QnA>(qnaService.selectDetailQnA(qnaNo), HttpStatus.OK);
	}
	
	/**
	 * Q&A 게시글 수정
	 * @param qna: 수정할 게시글 객체
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	@ApiOperation(value = "Q&A 게시글 수정", notes = "특정 Q&A 게시글의 정보를 수정한다.", response = String.class)
	@PutMapping("/modify/{qnaNo}")
	public ResponseEntity<String> modifyQnA(@RequestBody QnA qna) throws SQLException {
		if(qnaService.updateQnA(qna)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Q&A 게시글 삭제
	 * @param qnaNo: 삭제할 게시물의 글 번호
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	@ApiOperation(value = "Q&A 게시글 삭제", notes = "특정 Q&A 게시글을 삭제한다.", response = String.class)
	@DeleteMapping("/delete/{qnaNo}")
	public ResponseEntity<String> removeQnA(@PathVariable("qnaNo") int qnaNo) throws SQLException {
		if(qnaService.deleteQnA(qnaNo)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Q&A 게시글 등록
	 * @param qna: 등록할 게시글 객체
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	@ApiOperation(value = "Q&A 게시글 등록", notes = "Q&A 게시글을 등록한다.", response = String.class)
	@PostMapping("/regist")
	public ResponseEntity<String> addQnA(@RequestBody QnA qna) throws SQLException {
		if(qnaService.insertQnA(qna)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * 검색어(제목)로 Q&A 게시글 조회
	 * @param subject: 검색할 제목 키워드
	 * @return subject(키워드)가 제목에 포함된 게시글 리스트
	 * @throws SQLException
	 */
	@ApiOperation(value = "Q&A 게시글 검색", notes = "제목에 검색어가 포함된 Q&A 게시글의 정보를 반환한다.", response = List.class)
	@GetMapping("/search/{subject}")
	public ResponseEntity<List<QnA>> getQnaBySubject(@PathVariable("subject") String subject) throws SQLException {
		return new ResponseEntity<List<QnA>>(qnaService.selectQnaBySubject(subject), HttpStatus.OK);
	}
	
	/**
	 * Q&A 게시글 답변 조회
	 * @param qnaNo: Q&A 게시글 번호
	 * @return Q&A 답변 리스트
	 * @throws SQLException
	 */
	@ApiOperation(value = "Q&A 게시글 답변 목록", notes = "Q&A 게시글의 답변을 반환한다.", response = List.class)
	@GetMapping("/answer/{qnaNo}")
	public ResponseEntity<List<QnA>> getAllQnAAnswerList(@PathVariable("qnaNo") int qnaNo) throws SQLException {
		return new ResponseEntity<List<QnA>>(qnaService.selectAllQnAAnswer(qnaNo), HttpStatus.OK);
	}
	
	/**
	 * Q&A 답변 등록
	 * @param qna: 등록할 답변 객체
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	@ApiOperation(value = "Q&A 게시글 답변 등록", notes = "Q&A 게시글 답변을 등록한다.", response = String.class)
	@PostMapping("/answer/regist")
	public ResponseEntity<String> addQnAAnswer(@RequestBody QnA qna) throws SQLException {
		if(qnaService.insertQnAAnswer(qna)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Q&A 답변 삭제
	 * @param qna: 삭제할 답변 객체
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	@ApiOperation(value = "Q&A 게시글 답변 삭제", notes = "특정 Q&A 게시글 답변을 삭제한다.", response = String.class)
	@PatchMapping("/answer/delete")
	public ResponseEntity<String> removeQnAAnswer(@RequestBody QnA qna) throws SQLException {
		if(qnaService.deleteQnAAnswer(qna)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Q&A 답변 수정
	 * @param qna: 수정할 답변 객체
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	@ApiOperation(value = "Q&A 게시글 수정", notes = "특정 Q&A 게시글의 정보를 수정한다.", response = String.class)
	@PutMapping("/answer/modify")
	public ResponseEntity<String> modifyQnAAnswer(@RequestBody QnA qna) throws SQLException {
		if(qnaService.updateQnAAnswer(qna)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
