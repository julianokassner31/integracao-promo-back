package br.com.promocaodiaria.integrador.pg.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Entity
@Table(name="config")
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Config implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="tempo_scan")
	private Long tempoScan;
	
	@Column(name="url_integracao")
	private String urlIntegracao;
	
	@Column(name="token")
	private String token;
	
	@Column(name="sistema")
	@Enumerated(EnumType.STRING)
	private TipoSistemaEnum sistema;
	
	@Column(name="username")
	private String username;
	
	@JsonIgnore
	@Column(name="password")
	private String password;

	@JsonIgnore
	@Column(name="enabled")
	private boolean enabled;
}

