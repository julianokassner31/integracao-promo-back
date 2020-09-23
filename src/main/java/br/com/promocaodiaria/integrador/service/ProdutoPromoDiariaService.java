package br.com.promocaodiaria.integrador.service;

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

			ProdutoClienteWrapper produtoCliente = estoqueRepository
					.findProdutoClienteById(produtoDto.getIdIdentificador());

			ProdutoPromoDiaria produto = new ProdutoPromoDiaria();

			parserProduto(produto, produtoCliente);

			produto.setSetor(produtoDto.getSetor());

			Response response = integracaoPromocaoDiariaService.adicionarProduto(produto);

			verifyResponse(response, produto);

			produtoPromoDiariaRepository.save(produto);
		});
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

			produto.setSync(false);
			produto.setLog(e.getMessage());

		}

		return produtoPromoDiariaRepository.saveAndFlush(produto);
	}

	public void sincronizar(ProdutoPromoDiaria produto) {

		try {

			log.info("Produto a ser atualizado {}", produto.toString());

			ProdutoClienteWrapper produtoCliente = estoqueRepository.getProdutoAlterado(produto);

			boolean stockHadUpdate = stockHadUpdate(produto, produtoCliente);
			boolean produtoHadUpdate = produtoHadUpdate(produto, produtoCliente);

			if (produtoCliente != null && (produtoHadUpdate || stockHadUpdate)) {

				boolean updateOnlyStock = !produtoHadUpdate && stockHadUpdate;

				ProdutoPromoDiaria atualizado = update(produto, produtoCliente, updateOnlyStock);

				log.info("Produto Atulizado com sucesso produto {}", atualizado.toString());
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

			produto.setSync(true);
			produto.setLog(null);

		} else {
			produto.setSync(false);
			produto.setLog(response.getMensagem());
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
}
