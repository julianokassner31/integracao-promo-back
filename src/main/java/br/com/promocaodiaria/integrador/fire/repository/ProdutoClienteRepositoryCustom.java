package br.com.promocaodiaria.integrador.fire.repository;

import br.com.promocaodiaria.integrador.fire.model.ProdutoClienteWrapper;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public interface ProdutoClienteRepositoryCustom {

	public Map<String, Object> findProdutoClienteByDescricao(String query, int offset);
	public ProdutoClienteWrapper findProdutoClienteById(String id);
}
