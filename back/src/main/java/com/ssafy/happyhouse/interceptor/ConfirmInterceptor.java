package com.ssafy.happyhouse.interceptor;

import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.Slf4j;


@Component
@Slf4j
public class ConfirmInterceptor implements HandlerInterceptor {

	private static final String SALT = "ssafySecret";
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
//		HttpSession session = request.getSession();
//		User userInfo = (User) session.getAttribute("userInfo");
//		if(userInfo == null) {
//			response.sendRedirect(request.getContextPath() + "/user/login");
//			return false;
//		}
//		return true;
		
		log.debug("preHandle() 메소드 실행");
		Enumeration<String> headerNames = request.getHeaderNames();

		while(headerNames.hasMoreElements()) {
			String name = headerNames.nextElement();
			System.out.println(name);
		}
		
		final String token = request.getHeader("access-token");
		log.debug("토큰 정보 : {}",token);
		//토큰이 유효한 경우 정상적으로 요청 넘김
		try {
			Jws<Claims> claims = Jwts.parser().setSigningKey(SALT.getBytes("UTF-8")).parseClaimsJws(token);
			return true;
		} catch (Exception e) {
			log.error(e.getMessage());
			//response.sendRedirect("http://localhost:8080/happyhouse/user/login");
			//return false;
			throw new Exception();
		}
	}
	
}
