package com.ssafy.happyhouse.dto;

import lombok.Data;

@Data
public class QnA {
	private int no;
	private int qnaNo;
	private String userId;
	private String subject;
	private String content;
	private int hit;
	private String regtime;
}