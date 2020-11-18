package br.com.promocaodiaria.integrador.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.info.BuildProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.promocaodiaria.integrador.dto.ProdutoPromoDiariaDto;
import br.com.promocaodiaria.integrador.fire.model.ProdutoClienteWrapper;
import br.com.promocaodiaria.integrador.fire.repository.ProdutoClienteRepository;
import br.com.promocaodiaria.integrador.pg.model.ProdutoPromoDiaria;
import br.com.promocaodiaria.integrador.pg.repository.ProdutoPromoDiariaRepository;
import br.com.promocaodiaria.integrador.service.ProdutoPromoDiariaService;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

	@Autowired
	ProdutoClienteRepository estoqueRepository;

	@Autowired
	BuildProperties buildProperties;
	
	@Autowired
	ProdutoPromoDiariaService produtoPromoDiariaService;
	
	@Autowired
	ProdutoPromoDiariaRepository produtoPromoDiariaRepository;
	
	@GetMapping
	public Map<String, Object> findEstoqueByName(@RequestParam String query, @RequestParam int offset) {

		return estoqueRepository.findProdutoClienteByDescricao(query, offset);
	}
	
	@GetMapping("promocoes")
	public ResponseEntity<?> produtosPromocao() {
		
		return ResponseEntity.ok(produtoPromoDiariaRepository.findAll());
	}

	@PostMapping
	public ResponseEntity<?> salvar(@RequestBody List<ProdutoPromoDiariaDto> produtos) {
		
		produtoPromoDiariaService.save(produtos);
		
		return ResponseEntity.noContent().build();
	}

	@GetMapping("version")
	public Map<String, String> version() {
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("versao", buildProperties.get("versao.projeto"));
		
		return map;
	}
	
	@PostMapping("sincronizar/{id}")
	public ResponseEntity<?> sincronizar(@PathVariable("id") Long id) {
		
		
		Optional<ProdutoPromoDiaria> produto = produtoPromoDiariaRepository.findById(id);
		
		
		if(produto.isPresent()) {
		
			new Thread(new Runnable() {
				
				@Override
				public void run() {
					produtoPromoDiariaService.sincronizar(produto.get());
				}
			}).start();
			
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.badRequest().build();
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Long id) {
		
		
		Optional<ProdutoPromoDiaria> produto = produtoPromoDiariaRepository.findById(id);
		
		if(produto.isPresent()) {
			produtoPromoDiariaService.delete(produto.get());
		}
		
		return ResponseEntity.noContent().build();
	}
}
