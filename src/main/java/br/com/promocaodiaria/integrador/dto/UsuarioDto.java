package br.com.promocaodiaria.integrador.dto;

import lombok.Data;

@Data
public class UsuarioDto {

	private long idConfig;
	private String username;
	private String password;
	private String newPassword;
}
