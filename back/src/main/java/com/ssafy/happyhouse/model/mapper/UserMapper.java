package com.ssafy.happyhouse.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.happyhouse.dto.InterestInfo;
import com.ssafy.happyhouse.dto.User;

@Mapper
public interface UserMapper {
	
	/**
	 * 웹페이지 로그인
	 * @param user: 사용자 id, pass 정보
	 * @return 로그인한 사용자 id, pass, name 정보
	 * @throws SQLException
	 */
	User login(User user) throws SQLException;
	
	/**
	 * 회원가입
	 * @param user: 회원 가입 대상 id, pass, name 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	int registUser(User user) throws SQLException;
	
	/**
	 * 회원 정보 수정
	 * @param user: 수정될 사용자 id, name, email, contact 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	int modifyUser(User user) throws SQLException;
	
	/**
	 * 로그인한 사용자 비밀번호 조회
	 * @param id: 로그인한 사용자 id
	 * @return 로그인한 사용자 비밀번호
	 * @throws SQLException
	 */
	String selectUserPassword(User user) throws SQLException;
	
	/**
	 * 로그인한 사용자 비밀번호 변경
	 * @param user: 로그인한 사용자 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	int modifyUserPassword(User user) throws SQLException;
	
	/**
	 * 회원 탈퇴
	 * @param id: 탈퇴할 회원 id
	 * @return 성공: success, 실패: fail 
	 * @throws Exception
	 */
	int deleteUser(String id) throws SQLException;
	
	/**
	 * 회원 목록 조회
	 * @return 전체 회원 목록
	 * @throws Exception
	 */
	List<User> userList() throws SQLException;


	/**
	 * 로그인한 사용자의 관심지역 목록 조회
	 * @param userId 로그인한 사용자 id
	 * @return 관심지역 목록 리스트
	 * @throws SQLException
	 */
	List<Integer> selectInterest(String userId) throws SQLException;
	
	/**
	 * 관심 지역 제거
	 * @param interest: 관심 지역 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	int deleteInterest(InterestInfo interest) throws SQLException;
	
	/**
	 * 관심 지역 등록
	 * @param interest: 관심 지역 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	int insertInterest(InterestInfo interest) throws SQLException;
	
}
