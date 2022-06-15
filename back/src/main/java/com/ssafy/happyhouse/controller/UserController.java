package com.ssafy.happyhouse.controller;

import java.sql.SQLException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.happyhouse.dto.InterestInfo;
import com.ssafy.happyhouse.dto.User;
import com.ssafy.happyhouse.model.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	private static final String SALT = "ssafySecret";
	private static final int EXPIRE_MINUTES = 60;

	@Autowired
	private UserService userService;

	/**
	 * 웹페이지 로그인
	 * 
	 * @param user: 사용자 id, pass 정보
	 * @return 로그인한 사용자 id, pass, name 정보
	 * @throws SQLException
	 */
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user, HttpSession session) throws Exception {
		User loginUserInfo = userService.login(user);
		if (loginUserInfo != null) {
			//jwt 토큰 만들기
			String jwt = Jwts.builder().setHeaderParam("typ", "JWT")
					.setHeaderParam("regDate", System.currentTimeMillis())
					.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * EXPIRE_MINUTES))
					.setSubject("access-token")
					.claim("id", loginUserInfo.getId())
					.claim("name", loginUserInfo.getName())
					.claim("email", loginUserInfo.getEmail())
					.claim("contact", loginUserInfo.getContact())
					.claim("interest", loginUserInfo.getInterest())
					.signWith(SignatureAlgorithm.HS256, SALT.getBytes("UTF-8")).compact();
			
			Map<String, Object> result = new HashMap<>();
			result.put("access-token",jwt);
			
			//성공 결과 반환
			return new ResponseEntity<Map<String, Object>>(result, HttpStatus.OK);
		} else {
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * 회원가입
	 * @param user: 회원 가입 대상 id, pass, name 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	@PostMapping("/regist")
	public ResponseEntity<String> regist(@RequestBody User user) throws SQLException {
		if (userService.registUser(user)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * 회원 정보 수정
	 * @param user: 수정될 사용자 id, name, email, contact 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	@PutMapping("/modify")
	public ResponseEntity<String> modify(@RequestBody User user) throws SQLException {
		if (userService.modifyUser(user)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * 로그인한 사용자 비밀번호 조회
	 * @param id: 로그인한 사용자 id
	 * @return 비밀번호가 일치하면 id 리턴 
	 * @throws SQLException
	 */
	@PatchMapping("/passwordcheck")
	public ResponseEntity<String> selectUserPassword(@RequestBody User user) throws Exception {
		String id = userService.selectUserPassword(user);
		return new ResponseEntity<String>(id, HttpStatus.OK);
	}
	
	/**
	 * 로그인한 사용자 비밀번호 변경
	 * @param user: 로그인한 사용자 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	@PutMapping("/modify/password")
	public ResponseEntity<String> modifyUserPassword(@RequestBody User user) throws SQLException {
		if (userService.modifyUserPassword(user)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * 회원 탈퇴
	 * @param id: 탈퇴할 회원 id
	 * @return 성공: success, 실패: fail 
	 * @throws Exception
	 */
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable String id) throws SQLException {
		if (userService.deleteUser(id)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	/**
	 * 로그인한 사용자의 관심지역 목록 조회
	 * @param userId 로그인한 사용자 id
	 * @return 관심지역 목록 리스트
	 * @throws SQLException
	 */
	@GetMapping("/interest/list/{userId}")
	@ResponseBody
	public ResponseEntity<List<Integer>> getInterest(@PathVariable("userId") String userId) throws Exception {
		List<Integer> interestList = userService.selectInterest(userId);
		return new ResponseEntity<List<Integer>>(interestList, HttpStatus.OK);
	}
	
	/**
	 * 관심 지역 제거
	 * @param interest: 관심 지역 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	@PatchMapping("/interest/delete")
	public ResponseEntity<String> deleteInterest(@RequestBody InterestInfo interest) throws SQLException {
		if (userService.deleteInterest(interest)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * 관심 지역 등록
	 * @param interest: 관심 지역 정보
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	@PostMapping("/interest/insert")
	public ResponseEntity<String> insertInterest(@RequestBody InterestInfo interest) throws SQLException {
		if (userService.insertInterest(interest)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
