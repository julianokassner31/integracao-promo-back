package br.com.promocaodiaria.integrador.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.promocaodiaria.integrador.dto.ConfigDto;
import br.com.promocaodiaria.integrador.dto.UsuarioDto;
import br.com.promocaodiaria.integrador.pg.model.Config;
import br.com.promocaodiaria.integrador.pg.model.TipoSistemaEnum;
import br.com.promocaodiaria.integrador.pg.repository.ConfigRepository;

@RestController
@RequestMapping("/config")
public class ConfigController {
	
	@Autowired
	ConfigRepository configRepository;

	@GetMapping
	public ResponseEntity<?> getConfig(){
		
		Config config = configRepository.findAll().get(0);
		
		Long minutes = config.getTempoScan() / 1000 / 60;
		
		config.setTempoScan(minutes);
		
		return ResponseEntity.ok(config);
	}
	
	@PostMapping
	public ResponseEntity<?> saveConfig(@RequestBody ConfigDto configDto) {
		
		Optional<Config> configOpt = configRepository.findById(configDto.getId());
		
		if(configOpt.isPresent()) {
			
			Config config = configOpt.get();
			
			config.setTempoScan(configDto.getTempoScan() * 60 * 1000);
			config.setSistema(configDto.getSistema());
			config.setToken(configDto.getToken());
			config.setUrlIntegracao(configDto.getUrlIntegracao());
			
			Config saveAndFlush = configRepository.saveAndFlush(config);
			
			Long minutes = saveAndFlush.getTempoScan() / 1000 / 60;
			
			config.setTempoScan(minutes);
			
			return ResponseEntity.ok(config);
		}
		
		return ResponseEntity.badRequest().build();
	}
	
	@PostMapping("save-usuario")
	public ResponseEntity<?> saveUsuario(@RequestBody UsuarioDto usuarioDto) {
		
		Optional<Config> configOpt = configRepository.findById(usuarioDto.getIdConfig());
		
		if(configOpt.isPresent()) {
			
			Config config = configOpt.get();
			
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			
			if (bCryptPasswordEncoder.matches(usuarioDto.getPassword(), config.getPassword())) {
				
				config.setPassword(bCryptPasswordEncoder.encode(usuarioDto.getNewPassword()));
				config.setUsername(usuarioDto.getUsername());
				
				configRepository.saveAndFlush(config);
				
				return ResponseEntity.ok(config);
			
			} else {
				
				return ResponseEntity.notFound().build();
			}
		}
		
		return ResponseEntity.badRequest().build();
	}
	
	@GetMapping("sistemas")
	public ResponseEntity<?> getSistemas() {
	
		
		return ResponseEntity.ok(TipoSistemaEnum.values());
	}
}
