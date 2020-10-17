package br.com.promocaodiaria.integrador.pg.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NonNull;

@Entity
@Table(name="prod_promo_diaria")
@Data
public class ProdutoPromoDiaria {
	
	public ProdutoPromoDiaria() {}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NonNull
	@Column(name="nome")
	private String nome;
	
	@Column(name="descricao")
	private String descricao;
	
	@NonNull
	@Column(name="id_identificador")
	private String idIdentificador;
	
	@Column(name="dt_inicio")
	private LocalDateTime dtInicio;
	
	@Column(name="dt_fim")
	private LocalDateTime dtFim;
	
	@Column(name="valor")
	private double valor;
	
	@Column(name="vl_promocao")
	private double vlPromocao;
	
	@Column(name="qt_atual")
	private double qtAtual;
	
	@Column(name="cod_barra")
	private String codBarra; 
	
	@Column(name="cod_ncm")
	private String codNcm;
	
	@Column(name="uni_medida")
	private String uniMedida;
	
	@Column(name="sync")
	private boolean sync = false;
	
	@Column(name="ativo")
	private boolean ativo = false;
	
	@Column(name="log")
	private String log;
	
	@Column(name="setor")
	private String setor;
	
	@Column(name="dt_insercao_api")
	private LocalDateTime dtInsercaoApi;
}
