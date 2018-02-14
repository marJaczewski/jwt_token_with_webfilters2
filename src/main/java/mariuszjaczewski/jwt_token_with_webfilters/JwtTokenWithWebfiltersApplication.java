package mariuszjaczewski.jwt_token_with_webfilters;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class JwtTokenWithWebfiltersApplication {

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder(){
		return new BCryptPasswordEncoder();
	}



	public static void main(String[] args) {
		SpringApplication.run(JwtTokenWithWebfiltersApplication.class, args);
	}
}
