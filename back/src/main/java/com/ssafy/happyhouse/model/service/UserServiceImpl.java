package com.ssafy.happyhouse.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.happyhouse.dto.InterestInfo;
import com.ssafy.happyhouse.dto.User;
import com.ssafy.happyhouse.model.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserMapper userMapper;
	
	/**
	 * 웹페이지 로그인
	 * @param user: 사용자 id, pass 정보
	 * @return 로그인한 사용자 id, pass, name 정보
	 * @throws SQLException
	 */
	@Override
	public User login(User user) throws SQLException {
		return userMapper.login(user);
	}
	
	/**
	 * 회원가입
	 * @param user: 회원 가입 대상 id, pass, name 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	@Override
	public boolean registUser(User user) throws SQLException {
		return userMapper.registUser(user) == 1;
	}
	
	/**
	 * 회원 정보 수정
	 * @param user: 수정될 사용자 id, name, email, contact 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	@Override
	public boolean modifyUser(User user) throws SQLException {
		return userMapper.modifyUser(user) == 1;
	}
	
	/**
	 * 로그인한 사용자 비밀번호 조회
	 * @param id: 로그인한 사용자 id
	 * @return 로그인한 사용자 비밀번호
	 * @throws SQLException
	 */
	public String selectUserPassword(User user) throws SQLException {
		return userMapper.selectUserPassword(user);
	}
	
	/**
	 * 로그인한 사용자 비밀번호 변경
	 * @param user: 로그인한 사용자 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	public boolean modifyUserPassword(User user) throws SQLException {
		return userMapper.modifyUserPassword(user) == 1;
	}
	
	/**
	 * 회원 탈퇴
	 * @param id: 탈퇴할 회원 id
	 * @return 성공: success, 실패: fail 
	 * @throws Exception
	 */
	@Override
	public boolean deleteUser(String id) throws SQLException {
		return userMapper.deleteUser(id) == 1;
	}
	
	/**
	 * 회원 목록 조회
	 * @return 전체 회원 목록
	 * @throws Exception
	 */
	@Override
	public List<User> userList() throws SQLException {
		return userMapper.userList();
	}
	
	/**
	 * 로그인한 사용자의 관심지역 목록 조회
	 * @param userId 로그인한 사용자 id
	 * @return 관심지역 목록 리스트
	 * @throws SQLException
	 */
	@Override
	public List<Integer> selectInterest(String userId) throws SQLException {
		return userMapper.selectInterest(userId);
	}
	
	/**
	 * 관심 지역 제거
	 * @param interest: 관심 지역 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	public boolean deleteInterest(InterestInfo interest) throws SQLException {
		return userMapper.deleteInterest(interest) == 1;
	}
	
	/**
	 * 관심 지역 등록
	 * @param interest: 관심 지역 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	public boolean insertInterest(InterestInfo interest) throws SQLException {
		return userMapper.insertInterest(interest) == 1;
	}
}
