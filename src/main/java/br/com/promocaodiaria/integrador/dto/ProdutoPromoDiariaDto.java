package br.com.promocaodiaria.integrador.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class ProdutoPromoDiariaDto {

	private String idIdentificador;
	private String nome;
	private String descricao;
	private double valor;
	private double vlPromocao;
	private String codBarra;
	private String codNcm;
	private double qtAtual;
	private String uniMedida;
	private LocalDate dtFim;
	private LocalDate dtInicio;
	private boolean ativo;
	private boolean sync;
	private String setor;
}
