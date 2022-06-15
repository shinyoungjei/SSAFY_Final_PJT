package com.ssafy.happyhouse.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.happyhouse.dto.AptCode;
import com.ssafy.happyhouse.dto.AptDealInfo;
import com.ssafy.happyhouse.dto.AptInfo;
import com.ssafy.happyhouse.dto.InterestInfo;
import com.ssafy.happyhouse.model.service.AptService;

import io.swagger.annotations.Api;

@Api("AptController V1")
@RestController
@RequestMapping("/apt")
@CrossOrigin("*")
public class AptController {

	@Autowired
	private AptService aptService;
	
	/**
	 * sidocode 전체 조회
	 * @return sidocode 목록
	 * @throws SQLException
	 */
	@GetMapping("/sido")
	public ResponseEntity<List<AptCode>> getSido() throws Exception {
		return new ResponseEntity<List<AptCode>>(aptService.selectSido(), HttpStatus.OK);
	}
	
	/**
	 * 특정 sidocode가 포함된 guguncode 전체 조회
	 * @param sido: sidocode
	 * @return 특정 sidocode가 포함된 guguncode 목록
	 * @throws SQLException
	 */
	@GetMapping("/gugun/{sidocode}")
	public ResponseEntity<List<AptCode>> getGugun(@PathVariable("sidocode") String sidocode) throws Exception {
		return new ResponseEntity<List<AptCode>>(aptService.selectGugunInSido(sidocode), HttpStatus.OK);
	}
	
	/**
	 * 특정 guguncode가 포함된 dongcode 전체 조회
	 * @param gugun: guguncode
	 * @return 특정 guguncode가 포함된 dongcode 목록
	 * @throws SQLException
	 */
	@GetMapping("/dong/{guguncode}")
	public ResponseEntity<List<AptInfo>> getDong(@PathVariable("guguncode") String guguncode) throws Exception {
		return new ResponseEntity<List<AptInfo>>(aptService.selectDongInGugun(guguncode), HttpStatus.OK);
	}
	
	/**
	 * 특정 dongcode가 포함된 house 전체 조회
	 * @param dong: dongcode
	 * @return 특정 dongcode가 포함된 아파트 목록
	 * @throws SQLException
	 */
	@GetMapping("/aptInfo/{dongcode}")
	public ResponseEntity<List<AptInfo>> getApt(@PathVariable("dongcode") String dongcode) throws Exception {
		return new ResponseEntity<List<AptInfo>>(aptService.selectAptInDong(dongcode), HttpStatus.OK);
	}
	
	/**
	 * 특정 키워드(aptName)이 포함된 house 전체 조회
	 * @param aptName: 키워드
	 * @return 특정 키워드가 포함된 아파트 목록
	 * @throws SQLException
	 */
	@GetMapping("/aptInfo/search/{aptName}")
	public ResponseEntity<List<AptInfo>> getAptByName(@PathVariable("aptName") String aptName) throws Exception {
		return new ResponseEntity<List<AptInfo>>(aptService.selectAptByAptName(aptName), HttpStatus.OK);
	}
	
	/**
	 * 특정 아파트 상세 조회
	 * @param aptCode: 아파트 고유 번호
	 * @return 특정 아파트 객체
	 * @throws SQLException
	 */
	@GetMapping("/aptInfo/detail/{aptCode}")
	public ResponseEntity<AptInfo> getAptDetailInfo(@PathVariable("aptCode") String aptCode) throws Exception {
		return new ResponseEntity<AptInfo>(aptService.selectAptDetailInfo(aptCode), HttpStatus.OK);
	}
	
	/**
	 * 아파트 최신 거래 내역 조회
	 * @return 아파트 최신 거래 내역 목록
	 * @throws SQLException
	 */
	@GetMapping("/recentlyAptDealInfo/{aptCode}")
	public ResponseEntity<List<AptDealInfo>> getRecentlyAptDealInfo(@PathVariable("aptCode") String aptCode) throws Exception {
		return new ResponseEntity<List<AptDealInfo>>(aptService.selectRecentlyAptDealInfo(aptCode), HttpStatus.OK);
	}
	
	@PutMapping("/hit/{aptCode}")
	public ResponseEntity<String> upAptHit(@PathVariable("aptCode") String aptCode) throws SQLException {
		if (aptService.updateAptHit(aptCode)) {
			return new ResponseEntity<String>("success", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * 조회수가 높은 아파트 n개 조회
	 * @return 조회수가 높은 아파트 리스트
	 * @throws SQLException
	 */
	@GetMapping("/aptInfo/HighestHitApt")
	public ResponseEntity<List<AptInfo>> getHighestHitApt() throws SQLException {
		return new ResponseEntity<List<AptInfo>>(aptService.selectHighestHitApt(), HttpStatus.OK);
	}
}
