package com.ssafy.happyhouse.model.mapper;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.happyhouse.dto.AptCode;
import com.ssafy.happyhouse.dto.AptDealInfo;
import com.ssafy.happyhouse.dto.AptInfo;

public interface AptMapper {

	/**
	 * sidocode 전체 조회
	 * @return sidocode 목록
	 * @throws SQLException
	 */
	List<AptCode> selectSido() throws SQLException;
	
	/**
	 * 특정 sidocode가 포함된 guguncode 전체 조회
	 * @param sido: sidocode
	 * @return 특정 sidocode가 포함된 guguncode 목록
	 * @throws SQLException
	 */
	List<AptCode> selectGugunInSido(String sido) throws SQLException;
	
	/**
	 * 특정 guguncode가 포함된 dongcode 전체 조회
	 * @param gugun: guguncode
	 * @return 특정 guguncode가 포함된 dongcode 목록
	 * @throws SQLException
	 */
	List<AptInfo> selectDongInGugun(String gugun) throws SQLException;
	
	/**
	 * 특정 dongcode가 포함된 house 전체 조회
	 * @param dong: dongcode
	 * @return 특정 dongcode가 포함된 아파트 목록
	 * @throws SQLException
	 */
	List<AptInfo> selectAptInDong(String dong) throws SQLException;
	
	/**
	 * 특정 키워드(aptName)이 포함된 house 전체 조회
	 * @param aptName: 키워드
	 * @return 특정 키워드가 포함된 아파트 목록
	 * @throws SQLException
	 */
	List<AptInfo> selectAptByAptName(String aptName) throws SQLException;
	
	/**
	 * 특정 아파트 상세 조회
	 * @param aptCode: 아파트 고유 번호
	 * @return 특정 아파트 객체
	 * @throws SQLException
	 */
	AptInfo selectAptDetailInfo(String aptCode) throws SQLException;
	
	/**
	 * 아파트 최신 거래 내역 조회
	 * @return 아파트 최신 거래 내역 목록
	 * @throws SQLException
	 */
	List<AptDealInfo> selectRecentlyAptDealInfo(String aptCode) throws SQLException;
	
	/**
	 * 상세 검색한 매물 조회수 증가
	 * @param aptCode: 상세 검색한 매물의 고유코드
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	int updateAptHit(String aptCode) throws SQLException;
	
	/**
	 * 조회수가 높은 아파트 n개 조회
	 * @return 조회수가 높은 아파트 리스트
	 * @throws SQLException
	 */
	List<AptInfo> selectHighestHitApt() throws SQLException;
	
}
