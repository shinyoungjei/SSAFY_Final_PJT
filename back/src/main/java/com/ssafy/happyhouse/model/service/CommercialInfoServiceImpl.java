package com.ssafy.happyhouse.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.happyhouse.dto.CommercialInfo;
import com.ssafy.happyhouse.model.mapper.CommercialInfoMapper;

@Service
public class CommercialInfoServiceImpl implements CommercialInfoService {

	@Autowired
	CommercialInfoMapper commercialInfoMapper;
	
	/**
	 * 주변 편의점 좌표 조회
	 * @return 주변 편의점 좌표 리스트
	 * @throws SQLException
	 */
	@Override
	public List<CommercialInfo> selectConvenienceStorePositions(String dongCode) throws SQLException {
		return commercialInfoMapper.selectConvenienceStorePositions(dongCode);
	}

}
