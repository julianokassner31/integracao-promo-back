package br.com.promocaodiaria.integrador.service;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;

import br.com.promocaodiaria.integrador.pg.model.Config;
import br.com.promocaodiaria.integrador.pg.model.ProdutoPromoDiaria;
import br.com.promocaodiaria.integrador.pg.repository.ConfigRepository;

@Service
public class IntegracaoPromocaoDiariaServiceImpl implements IntegracaoPromocaoDiariaService {
	
	@Autowired
	ConfigRepository configRepository;
	
	@Autowired
	RestTemplateService restTemplateService;

	@Override
	public Response adicionarProduto(ProdutoPromoDiaria produtoPromoDiaria) {
		
		JSONObject json = converteToJson(produtoPromoDiaria);
		
		return execute("/adicionarProduto", json);
	}
	
	@Override
	public Response editarProduto(ProdutoPromoDiaria produtoPromoDiaria) {
		
		JSONObject json = converteToJson(produtoPromoDiaria);
		
		return execute("/editarProduto", json);
	}
	
	private Response execute(String uri, JSONObject json) {
		
		Config config = configRepository.findAll().get(0);
		
		String url = config.getUrlIntegracao().concat(uri);
		
		json.put("codigo_empresa", config.getToken());
		
		HttpHeaders httpHeaders = new HttpHeaders();
		
		httpHeaders.add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
		
		HttpEntity<String> httpEntity = new HttpEntity<String>(json.toString(), httpHeaders);
		
		return restTemplateService.post(url, httpEntity, Response.class);
	}

	@Override
	public boolean adicionarListaProdutos() {
		
		return false;
	}
	
	private JSONObject converteToJson(ProdutoPromoDiaria produtoPromoDiaria) {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("nome", produtoPromoDiaria.getNome());
		jsonObject.put("data_inicio_promocao", produtoPromoDiaria.getDtInicio());
		jsonObject.put("data_termino_promocao", produtoPromoDiaria.getDtFim());
		jsonObject.put("marca", "Marca");
		jsonObject.put("gtin", produtoPromoDiaria.getCodBarra());
		jsonObject.put("unidade_medida", produtoPromoDiaria.getUniMedida());
		jsonObject.put("setor", produtoPromoDiaria.getSetor());
		jsonObject.put("ncm", produtoPromoDiaria.getCodNcm());
		jsonObject.put("descricao", produtoPromoDiaria.getDescricao());
		jsonObject.put("estoque", produtoPromoDiaria.getQtAtual());
		jsonObject.put("valor", produtoPromoDiaria.getValor());
		jsonObject.put("valor_promocao", produtoPromoDiaria.getVlPromocao());
		jsonObject.put("referencia_produto", produtoPromoDiaria.getIdIdentificador());
		jsonObject.put("status", produtoPromoDiaria.isAtivo());
		
		return jsonObject;
	}

	@Override
	public Response baixaEstoque(ProdutoPromoDiaria produtoPromoDiaria) {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("referencia_produto", produtoPromoDiaria.getCodNcm());
		jsonObject.put("quantidade", produtoPromoDiaria.getQtAtual());
		
		return execute("/baixaEstoque", jsonObject);
	}
}
