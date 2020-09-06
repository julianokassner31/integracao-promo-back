package br.com.promocaodiaria.integrador.dto;

import br.com.promocaodiaria.integrador.pg.model.TipoSistemaEnum;
import lombok.Data;

@Data
public class ConfigDto {
	
	private Long id;
	private TipoSistemaEnum sistema;
	private Long tempoScan;
	private String token;
	private String urlIntegracao;

}
