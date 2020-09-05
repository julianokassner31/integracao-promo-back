package br.com.promocaodiaria.integrador.fire.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ProdutoClienteWrapper {

	private String idIdentificador;
	private BigDecimal qtAtual;
	private String codBarra; 
	private String codNcm; 
	private String nome;
	private String descricao;
	private BigDecimal valor;
	private LocalDateTime dtInicio;
	private LocalDateTime dtFim;
	private BigDecimal vlPromocao;
	private String uniMedida;
	private boolean ativo;
}
