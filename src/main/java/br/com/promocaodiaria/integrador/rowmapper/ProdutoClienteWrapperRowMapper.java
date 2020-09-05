package br.com.promocaodiaria.integrador.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters.LocalDateTimeConverter;
import org.springframework.jdbc.core.RowMapper;

import br.com.promocaodiaria.integrador.fire.model.ProdutoClienteWrapper;

public class ProdutoClienteWrapperRowMapper implements RowMapper<ProdutoClienteWrapper>{

	@Override
	public ProdutoClienteWrapper mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		ProdutoClienteWrapper wrapper = new ProdutoClienteWrapper();
		
		wrapper.setIdIdentificador(rs.getString("id_identificador"));
		wrapper.setQtAtual(rs.getBigDecimal("qtd_atual"));
		wrapper.setCodBarra(rs.getString("cod_barra"));
		wrapper.setCodNcm(rs.getString("cod_ncm"));
		wrapper.setNome(rs.getString("nome"));
		wrapper.setDescricao(rs.getString("descricao"));
		wrapper.setValor(rs.getBigDecimal("valor"));
		wrapper.setDtInicio(new LocalDateTimeConverter().convertToEntityAttribute(rs.getDate("data_inicio_promocao")));
		wrapper.setDtFim(new LocalDateTimeConverter().convertToEntityAttribute(rs.getDate("data_termino_promocao")));
		wrapper.setVlPromocao(rs.getBigDecimal("valor_promocao"));
		wrapper.setUniMedida(rs.getString("unidade_medida"));
		wrapper.setAtivo(rs.getBoolean("ativo"));
		
		return wrapper;
	}

}
