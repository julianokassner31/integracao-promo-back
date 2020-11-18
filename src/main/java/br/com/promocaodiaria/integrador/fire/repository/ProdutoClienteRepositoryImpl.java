package br.com.promocaodiaria.integrador.fire.repository;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import br.com.promocaodiaria.integrador.fire.model.ProdutoClienteWrapper;
import br.com.promocaodiaria.integrador.pg.model.ProdutoPromoDiaria;
import br.com.promocaodiaria.integrador.pg.repository.ProdutoPromoDiariaRepository;
import br.com.promocaodiaria.integrador.rowmapper.ProdutoClienteWrapperRowMapper;
import br.com.promocaodiaria.integrador.service.strategy.QueryStrategy;


@Repository
public class ProdutoClienteRepositoryImpl implements ProdutoClienteRepositoryCustom {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Autowired
	QueryStrategy queryStrategy;
	
	@Autowired
	ProdutoPromoDiariaRepository produtoPromoDiariaRepository;
	
	public Map<String, Object> findProdutoClienteByDescricao(String query, int offset) {
		
		Map<String,Object> params = new HashMap<String,Object>();
	    params.put("query", query);
	    params.put("offset", offset);

	    List<String> idsNotIn = produtoPromoDiariaRepository.findAll().stream().map(ProdutoPromoDiaria::getIdIdentificador).collect(Collectors.toList());
	    params.put("idsNotIn", idsNotIn.isEmpty() ? Arrays.asList("-1") : idsNotIn);

	    NamedParameterJdbcTemplate npjt = new NamedParameterJdbcTemplate(jdbcTemplate.getDataSource());

		List<ProdutoClienteWrapper> produtos = npjt.query(queryStrategy.selectProdutosPorDescricao(), params, new ProdutoClienteWrapperRowMapper());
		Long count = npjt.queryForObject(queryStrategy.count(), params, Long.class);

		HashMap<String, Object> map = new HashMap<>();
		map.put("count", count);
		map.put("produtos", produtos);

		return map;
	}
	
	public ProdutoClienteWrapper findProdutoClienteById(String id) {
		
		Map<String,Object> params = new HashMap<String,Object>();
	    params.put("idIdentificador", id);
		params.put("offset", 0);

	    NamedParameterJdbcTemplate npjt = new NamedParameterJdbcTemplate(jdbcTemplate.getDataSource());
	    
	    return npjt.queryForObject(queryStrategy.selectProdutosPorId(), params, new ProdutoClienteWrapperRowMapper());
	}
}
