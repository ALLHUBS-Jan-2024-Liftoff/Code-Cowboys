package org.launchcode.ranchsupply;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class RanchsupplyBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(RanchsupplyBackendApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {

				registry.addMapping("/**").allowedOrigins("http://localhost:5173").allowedMethods("GET","POST","DELETE","PUT").allowCredentials(true);

			}
		};
	} 
	@Bean
	public ModelMapper getModelMapper() {
		return new ModelMapper();
	}
}
