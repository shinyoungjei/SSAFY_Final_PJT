package com.ssafy.happyhouse.dto;

import lombok.Data;

@Data
public class Notice {
	private int noticeNo;
	private String userId;
	private String subject;
	private String content;
	private int hit;
	private String regtime;
}
