

package br.com.promocaodiaria.integrador.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.stereotype.Service;

import br.com.promocaodiaria.integrador.dto.ProdutoPromoDiariaDto;
import br.com.promocaodiaria.integrador.fire.model.ProdutoClienteWrapper;
import br.com.promocaodiaria.integrador.fire.repository.ProdutoClienteRepository;
import br.com.promocaodiaria.integrador.pg.model.ProdutoPromoDiaria;
import br.com.promocaodiaria.integrador.pg.repository.ProdutoPromoDiariaRepository;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class ProdutoPromoDiariaService {

	@Autowired
	ProdutoPromoDiariaRepository produtoPromoDiariaRepository;

	@Autowired
	ProdutoClienteRepository estoqueRepository;

	@Autowired
	IntegracaoPromocaoDiariaService integracaoPromocaoDiariaService;

	public void save(List<ProdutoPromoDiariaDto> produtos) {

		produtos.forEach(produtoDto -> {

			ProdutoPromoDiaria produto = new ProdutoPromoDiaria();
			produto.setIdIdentificador(produtoDto.getIdIdentificador());
			produto.setSetor(produtoDto.getSetor());

			log.info("Tentando cadastrar novo produto {}", produto.toString());
			
			save(produto);

		});
	}
	
	public void save(ProdutoPromoDiaria produto) {

			ProdutoClienteWrapper produtoCliente = estoqueRepository
					.findProdutoClienteById(produto.getIdIdentificador());

			parserProduto(produto, produtoCliente);

			Response response = integracaoPromocaoDiariaService.adicionarProduto(produto);

			verifyResponse(response, produto);

			
			if (produto.isSync()) {
				
				produto.setDtInsercaoApi(LocalDateTime.now());

				produtoPromoDiariaRepository.save(produto);
				
			} else if (produtoJaCadastrado(produto)) {
			
				produto.setDtInsercaoApi(LocalDateTime.now());
				
				sincronizar(produto);
			
			} else {
				
				log.info("Produto nao adicionado na api, ocorreu um erro na tentativa de cadastro do produto {}", produto.toString());
				
				produtoPromoDiariaRepository.save(produto);
			}
	}
	
	
	private boolean produtoJaCadastrado(ProdutoPromoDiaria produto) {
		
		boolean contains = produto.getLog().contains("Já existe um produto");
		
		if (contains) {
			log.info("{} produto: {}", produto.getLog(), produto.toString());
		}
		
		return contains;
	}
	
	public void delete(ProdutoPromoDiaria produto) {
		
		if (produto.getDtInsercaoApi() == null) {
			log.info("Produto a ser deletado nunca subiu para api, deletando... {}", produto.toString());
			produtoPromoDiariaRepository.delete(produto);
			
			return;
		}
		
		log.info("Produto a ser deletado {}", produto.toString());
		
		boolean isAtivo = produto.isAtivo();
		
		try {

			produto.setAtivo(false);
			
			Response response = integracaoPromocaoDiariaService.editarProduto(produto);

			verifyResponse(response, produto);
			
			if(produto.isSync()) {
				
				produtoPromoDiariaRepository.delete(produto);
				
				log.info("Produto deletado com sucesso!");
			
			} else {
				log.info("Ocorreu um erro ao tentar deletar produto");
				
				produto.setAtivo(isAtivo);
				
				produtoPromoDiariaRepository.saveAndFlush(produto);
			}

		} catch (Exception e) {
			log.info("Ocorreu um erro ao tentar deletar produto ex: {}", e);
			
			setLogAndSync(produto, e.getMessage(), false);
			
			produto.setAtivo(isAtivo);
			
			produtoPromoDiariaRepository.saveAndFlush(produto);
		}
	}

	public ProdutoPromoDiaria update(ProdutoPromoDiaria produto, ProdutoClienteWrapper produtoCliente,
			boolean updateOnlyStock) {
		try {

			Response response = null;

			if (updateOnlyStock) {

				produto.setQtAtual(produtoCliente.getQtAtual());
				response = integracaoPromocaoDiariaService.baixaEstoque(produto);

			} else {
				parserProduto(produto, produtoCliente);
				response = integracaoPromocaoDiariaService.editarProduto(produto);
			}

			verifyResponse(response, produto);

		} catch (Exception e) {
			
			setLogAndSync(produto, e.getMessage(), false);

		}

		return produtoPromoDiariaRepository.saveAndFlush(produto);
	}

	public void sincronizar(ProdutoPromoDiaria produto) {

		try {

			if(produto.getDtInsercaoApi() == null) {
				
				log.info("Produto ainda nao foi cadastrado na api fazendo uma nova tentativa {}", produto.toString());
				save(produto);
				
			} else {
			
				log.info("Produto a ser atualizado {}", produto.toString());
	
				ProdutoClienteWrapper produtoCliente = estoqueRepository.findProdutoClienteById(produto.getIdIdentificador());
	
				if (produtoCliente != null) {
					
					boolean stockHadUpdate = stockHadUpdate(produto, produtoCliente);
					boolean produtoHadUpdate = produtoHadUpdate(produto, produtoCliente);
					
					if (produtoHadUpdate || stockHadUpdate) {
						
						boolean updateOnlyStock = !produtoHadUpdate && stockHadUpdate;
						
						ProdutoPromoDiaria atualizado = update(produto, produtoCliente, updateOnlyStock);
		
						log.info("Produto Atualizado com sucesso produto {}", atualizado.toString());
					
					} else {
						
						log.info("Produto ja existe na api, nao sofreu nenhum atualizacao local, entao continua sincronizado {}", produto.toString());
						
						setLogAndSync(produto, null, true);
						
						produtoPromoDiariaRepository.saveAndFlush(produto);
					}
				
				} else {
					
					log.info("Produto do cliente nao existe");
					
					setLogAndSync(produto, "Produto excluído do sistema ou inexistente", false);
					
					produtoPromoDiariaRepository.saveAndFlush(produto);
				}
			}

		} catch (EmptyResultDataAccessException e) {
			log.info("Este produto nao teve alteracao recente id={} desc={}", produto.getIdIdentificador(),
					produto.getDescricao());

		} catch (IncorrectResultSizeDataAccessException e) {
			log.info("Encontrou mais de um produto com este id={} desc={}", produto.getIdIdentificador(),
					produto.getDescricao());
		}

	}

	private boolean stockHadUpdate(ProdutoPromoDiaria produto, ProdutoClienteWrapper produtoCliente) {

		return produto.getQtAtual() != produtoCliente.getQtAtual();

	}

	private boolean produtoHadUpdate(ProdutoPromoDiaria produto, ProdutoClienteWrapper produtoCliente) {
		return !(isEquals(produto.getCodBarra(), produtoCliente.getCodBarra())
				&& isEquals(produto.getCodNcm(), produtoCliente.getCodNcm())
				&& isEquals(produto.getNome(), produtoCliente.getNome())
				&& isEquals(produto.getDescricao(), produtoCliente.getDescricao())
				&& isEquals(produto.getUniMedida(), produtoCliente.getUniMedida())
				&& produto.getValor() == produtoCliente.getValor()
				&& produto.getVlPromocao() == produtoCliente.getVlPromocao()
				&& isEquals(produto.getDtInicio(), produtoCliente.getDtInicio())
				&& isEquals(produto.getDtFim(), produtoCliente.getDtFim())
				&& isEquals(produto.isAtivo(), produtoCliente.isAtivo()));
	}

	private boolean isEquals(Object obj1, Object obj2) {
		boolean bothNulls = Objects.isNull(obj1) && Objects.isNull(obj2);

		if (!bothNulls) {

			if (Objects.isNull(obj1) || Objects.isNull(obj2)) {
				return false;
			}

			if (obj1.equals(obj2)) {
				return true;
			}
		}

		return bothNulls;
	}

	private void verifyResponse(Response response, ProdutoPromoDiaria produto) {

		if ("OK".equalsIgnoreCase(response.getStatus())) {

			setLogAndSync(produto, null, true);

		} else {
			
			setLogAndSync(produto, response.getMensagem(), false);
		}
	}

	private void parserProduto(ProdutoPromoDiaria produtoPromoDiaria, ProdutoClienteWrapper produtoCliente) {

		produtoPromoDiaria.setIdIdentificador(produtoCliente.getIdIdentificador());
		produtoPromoDiaria.setNome(produtoCliente.getNome());
		produtoPromoDiaria.setDescricao(produtoCliente.getDescricao());
		produtoPromoDiaria.setQtAtual(produtoCliente.getQtAtual());
		produtoPromoDiaria.setCodBarra(produtoCliente.getCodBarra());
		produtoPromoDiaria.setCodNcm(produtoCliente.getCodNcm());
		produtoPromoDiaria.setValor(produtoCliente.getValor());
		produtoPromoDiaria.setDtInicio(produtoCliente.getDtInicio());
		produtoPromoDiaria.setDtFim(produtoCliente.getDtFim());
		produtoPromoDiaria.setVlPromocao(produtoCliente.getVlPromocao());
		produtoPromoDiaria.setUniMedida(produtoCliente.getUniMedida());
		produtoPromoDiaria.setAtivo(produtoCliente.isAtivo());

	}
	
	private void setLogAndSync(ProdutoPromoDiaria produto, String log, boolean sync) {
		produto.setSync(sync);
		produto.setLog(log);
	}
}
