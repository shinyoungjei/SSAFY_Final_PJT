package com.ssafy.happyhouse.config;

import java.util.Arrays;
import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ssafy.happyhouse.interceptor.ConfirmInterceptor;

@Configuration
//@EnableAspectJAutoProxy
@MapperScan(basePackages = {"com.ssafy.happyhouse.model.mapper"})
public class WebMvcConfiguration implements WebMvcConfigurer {

	@Autowired
	ConfirmInterceptor confirm;
	
	private final List<String> patterns = Arrays.asList("/apt/**", "/aptList/**", "/admin/**");

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		//해당 요청 인터셉트
		//registry.addInterceptor(confirm).addPathPatterns(patterns);
		//해당 요청을 제외한 나머지 요청들 인터셉트
		//registry.addInterceptor(confirm).excludePathPatterns("/user/**");
	}
	
	//access-token헤더를 추가하여 발생하는 CORS를 처리
	@Override
	public void addCorsMappings(CorsRegistry registry) {
//		default 설정.
//		Allow all origins.
//		Allow "simple" methods GET, HEAD and POST.
//		Allow all headers.
//		Set max age to 1800 seconds (30 minutes).
		registry.addMapping("/**")
			.allowedOrigins("*")
			.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
			.allowedHeaders("*")
			.maxAge(6000);
	}

}
