package br.com.promocaodiaria.integrador;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@EnableScheduling
@Controller
public class IntegradorApplication implements ErrorController {
	
	public static void main(String[] args) {
//		System.setProperty("javax.net.debug","all");
		SpringApplication.run(IntegradorApplication.class, args);
		
	}

	private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        return "forward:/index.html";
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }
    
}
