package br.com.promocaodiaria.integrador.service.strategy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.promocaodiaria.integrador.pg.model.Config;
import br.com.promocaodiaria.integrador.pg.repository.ConfigRepository;
import br.com.promocaodiaria.integrador.query.QueriesClippStore;
import br.com.promocaodiaria.integrador.query.QueriesTGA;

@Service
public class QueryStrategy {

	@Autowired
	ConfigRepository configRepository;

	public String selectProdutosPorDescricao() {

		Config config = configRepository.findAll().get(0);

		switch (config.getSistema()) {

			case TGA:

				return QueriesTGA.select_produtos_por_descricao;

			case CLIPP:

				return QueriesClippStore.select_produtos_por_descricao;
		}

		return null;
	}

	public String count() {

		Config config = configRepository.findAll().get(0);

		switch (config.getSistema()) {

			case TGA:
				return QueriesTGA.count;

			case CLIPP:
				return QueriesClippStore.count;
		}

		return null;
	}
	
	public String selectProdutosPorId() {

		Config config = configRepository.findAll().get(0);
		
		switch (config.getSistema()) {
		
		case TGA:
			
			return QueriesTGA.select_produtos_por_id;

		case CLIPP:
			
			return QueriesClippStore.select_produtos_por_id;
		}
		
		return null;
	}
}
