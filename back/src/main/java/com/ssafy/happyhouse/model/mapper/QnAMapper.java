package com.ssafy.happyhouse.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.happyhouse.dto.QnA;

@Mapper
public interface QnAMapper {

	/**
	 * Q&A 게시글 전체 조회
	 * @return Q&A 전체 게시글 리스트
	 * @throws SQLException
	 */
	List<QnA> selectAllQnA() throws SQLException;
	
	/**
	 * Q&A 게시글 상세 조회
	 * @param qnaNo: 상세 조회 게시물의 글 번호
	 * @return 글 번호에 해당하는 게시글 객체
	 * @throws SQLException
	 */
	QnA selectDetailQnA(int qnaNo) throws SQLException;
	
	/**
	 * Q&A 게시글 수정
	 * @param qna: 수정할 게시글 객체
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	int updateQnA(QnA qna) throws SQLException;
	
	/**
	 * Q&A 게시글 삭제
	 * @param qnaNo: 삭제할 게시물의 글 번호
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	int deleteQnA(int qnaNo) throws SQLException;
	
	/**
	 * Q&A 게시글 등록
	 * @param qna: 등록할 게시글 객체
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	int insertQnA(QnA qna) throws SQLException;
	
	/**
	 * 검색어(제목)로 Q&A 게시글 조회
	 * @param subject: 검색할 제목 키워드
	 * @return subject(키워드)가 제목에 포함된 게시글 리스트
	 * @throws SQLException
	 */
	List<QnA> selectQnaBySubject(String subject) throws SQLException;
	
	/**
	 * Q&A 게시글 답변 조회
	 * @param qnaNo: Q&A 게시글 번호
	 * @return Q&A 답변 리스트
	 * @throws SQLException
	 */
	List<QnA> selectAllQnAAnswer(int qnaNo) throws SQLException;
	
	/**
	 * Q&A 답변 수정
	 * @param qna: 수정할 답변 객체
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	int updateQnAAnswer(QnA qna) throws SQLException;
	
	/**
	 * Q&A 답변 삭제
	 * @param qna: 삭제할 답변 객체
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	int deleteQnAAnswer(QnA qna) throws SQLException;
	
	/**
	 * Q&A 답변 등록
	 * @param qna: 등록할 답변 객체
	 * @return true: 성공, false: 실패
	 * @throws SQLException
	 */
	int insertQnAAnswer(QnA qna) throws SQLException;
}
