package com.ssafy.happyhouse.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.happyhouse.dto.AptInfo;
import com.ssafy.happyhouse.dto.CommercialInfo;
import com.ssafy.happyhouse.model.service.CommercialInfoService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api("CommercialinfoController V1")
@RestController
@RequestMapping("/commercialinfo")
@CrossOrigin("*")
public class CommercialInfoController {
	
	@Autowired
	private CommercialInfoService commercialInfoService;
	
	/**
	 * 주변 편의점 좌표 조회
	 * @return 주변 편의점 좌표 리스트
	 * @throws SQLException
	 */
	@ApiOperation(value = "편의점 좌표 조회", notes = "모든 편의점의 위도, 경도를 반환한다.", response = List.class)
	@GetMapping("/conveniencestore/{dongCode}")
	public ResponseEntity<List<CommercialInfo>> getConvenienceStorePositions(@PathVariable("dongCode") String dongCode) throws SQLException {
		return new ResponseEntity<List<CommercialInfo>>(commercialInfoService.selectConvenienceStorePositions(dongCode), HttpStatus.OK);
	}
	
	@ApiOperation(value = "가장 가까운 편의점의 거리 조회", notes = "가장 가까운 편의점의 거리를 반환한다.", response = String.class)
	@PatchMapping("/conveniencestore/distance")
	public ResponseEntity<Integer> getConvenienceStoreDistance(@RequestBody AptInfo aptInfo) throws SQLException {
		List<CommercialInfo> convenienceList = commercialInfoService.selectConvenienceStorePositions(aptInfo.getDongCode());
		double aptLat = Double.parseDouble(aptInfo.getLat());
		double aptLng = Double.parseDouble(aptInfo.getLng());
		
		double min = Integer.MAX_VALUE;
		for(CommercialInfo commercialInfo : convenienceList) {
			double distance = getDistance(aptLat, aptLng, Double.parseDouble(commercialInfo.getLat()), Double.parseDouble(commercialInfo.getLng()));
			min = Math.min(min, distance);
		}
	
		return new ResponseEntity<Integer>((int)min, HttpStatus.OK);
	}
	
	public static double getDistance(double lat, double lng, double targetLat, double targetLng){
        double theta = lng - targetLng;
        double distance = Math.sin(transDegreeToRadian(lat))* Math.sin(transDegreeToRadian(targetLat)) + Math.cos(transDegreeToRadian(lat))*Math.cos(transDegreeToRadian(targetLat))*Math.cos(transDegreeToRadian(theta));
        distance = Math.acos(distance);
        distance = transRadianToDegree(distance);
        distance = distance * 60*1.1515*1609.344;

        return distance; //단위 meter
    }
    public static double transDegreeToRadian(double degree){
        return (degree * Math.PI/180.0);
    }
    public static double transRadianToDegree(double radian){
        return (radian * 180 / Math.PI);
    }
}
