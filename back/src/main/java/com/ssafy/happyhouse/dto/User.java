package com.ssafy.happyhouse.dto;

import java.util.List;

import lombok.Data;

@Data
public class User {
	private String id;
	private String pass;
	private String name;
	private String email;
	private String contact;
	private List<InterestInfo> interest;
}
