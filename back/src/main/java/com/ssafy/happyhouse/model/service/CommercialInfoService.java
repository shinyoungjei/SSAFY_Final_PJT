package com.ssafy.happyhouse.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.happyhouse.dto.CommercialInfo;

public interface CommercialInfoService {

	/**
	 * 주변 편의점 좌표 조회
	 * @return 주변 편의점 좌표 리스트
	 * @throws SQLException
	 */
	List<CommercialInfo> selectConvenienceStorePositions(String dongCode) throws SQLException;
	
}
