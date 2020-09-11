package br.com.promocaodiaria.integrador.fire.model;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ProdutoClienteWrapper {

	private String idIdentificador;
	private double qtAtual;
	private String codBarra; 
	private String codNcm; 
	private String nome;
	private String descricao;
	private double valor;
	private LocalDateTime dtInicio;
	private LocalDateTime dtFim;
	private double vlPromocao;
	private String uniMedida;
	private boolean ativo;
}
