package com.ssafy.happyhouse.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.happyhouse.dto.AptCode;
import com.ssafy.happyhouse.dto.AptDealInfo;
import com.ssafy.happyhouse.dto.AptInfo;
import com.ssafy.happyhouse.model.mapper.AptMapper;

@Service
public class AptServiceImpl implements AptService {

	@Autowired
	AptMapper aptMapper;
	
	/**
	 * sidocode 전체 조회
	 * @return sidocode 목록
	 * @throws SQLException
	 */
	@Override
	public List<AptCode> selectSido() throws SQLException {
		return aptMapper.selectSido();
	}

	/**
	 * 특정 sidocode가 포함된 guguncode 전체 조회
	 * @param sido: sidocode
	 * @return 특정 sidocode가 포함된 guguncode 목록
	 * @throws SQLException
	 */
	@Override
	public List<AptCode> selectGugunInSido(String sido) throws SQLException {
		return aptMapper.selectGugunInSido(sido);
	}

	/**
	 * 특정 guguncode가 포함된 dongcode 전체 조회
	 * @param gugun: guguncode
	 * @return 특정 guguncode가 포함된 dongcode 목록
	 * @throws SQLException
	 */
	@Override
	public List<AptInfo> selectDongInGugun(String gugun) throws SQLException {
		return aptMapper.selectDongInGugun(gugun);
	}

	/**
	 * 특정 dongcode가 포함된 house 전체 조회
	 * @param dong: dongcode
	 * @return 특정 dongcode가 포함된 아파트 목록
	 * @throws SQLException
	 */
	@Override
	public List<AptInfo> selectAptInDong(String dong) throws SQLException {
		return aptMapper.selectAptInDong(dong);
	}

	/**
	 * 특정 키워드(aptName)이 포함된 house 전체 조회
	 * @param aptName: 키워드
	 * @return 특정 키워드가 포함된 아파트 목록
	 * @throws SQLException
	 */
	@Override
	public List<AptInfo> selectAptByAptName(String aptName) throws SQLException {
		return aptMapper.selectAptByAptName(aptName);
	}

	/**
	 * 특정 아파트 상세 조회
	 * @param aptCode: 아파트 고유 번호
	 * @return 특정 아파트 객체
	 * @throws SQLException
	 */
	@Override
	public AptInfo selectAptDetailInfo(String aptCode) throws SQLException {
		return aptMapper.selectAptDetailInfo(aptCode);
	}

	/**
	 * 아파트 최신 거래 내역 조회
	 * @return 아파트 최신 거래 내역 목록
	 * @throws SQLException
	 */
	@Override
	public List<AptDealInfo> selectRecentlyAptDealInfo(String aptCode) throws SQLException {
		return aptMapper.selectRecentlyAptDealInfo(aptCode);
	}
	
	/**
	 * 상세 검색한 매물 조회수 증가
	 * @param aptCode: 상세 검색한 매물의 고유코드
	 * @return 성공: success, 실패: fail
	 * @throws SQLException
	 */
	@Override
	public boolean updateAptHit(String aptCode) throws SQLException {
		return aptMapper.updateAptHit(aptCode) == 1;
	}
	
	/**
	 * 조회수가 높은 아파트 n개 조회
	 * @return 조회수가 높은 아파트 리스트
	 * @throws SQLException
	 */
	public List<AptInfo> selectHighestHitApt() throws SQLException {
		return aptMapper.selectHighestHitApt();
	}

}
