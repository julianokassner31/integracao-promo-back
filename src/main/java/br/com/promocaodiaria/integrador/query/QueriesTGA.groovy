package br.com.promocaodiaria.integrador.query

class QueriesTGA {

	private static final String select_produtos = """
		SELECT  
			a.ID,
			a.CODPRD as id_identificador,
			a.SALDOGERALFISICO as qtd_atual,
        	a.CODBARRAS as cod_barra,
			f.CODCLAS as cod_ncm,
			a.NOMEFANTASIA as nome,
			a.APLICACAO as descricao,
			a.PRECO1 as valor,
			m.DTA_INICIO  || ' 00:00:00.000' as data_inicio_promocao,
			m.DTA_TERMINIO  || ' 00:00:00.000' as data_termino_promocao,
			iif (a.IDPROMOCAO <> '0', iif (i.tipo = 'P', SUM (a.PRECO1 - (a.PRECO1 * i.valor / 100)), i.VALOR), null) as valor_promocao,
			u.DESCRICAO as unidade_medida,
			iif( a.INATIVO = 'F','T','F') as ativo
		FROM TPRODUTO a
		LEFT JOIN TPROMOCAO m
			ON a.IDPROMOCAO = m.IDPROMOCAO
		LEFT JOIN TPROMITEM i
			ON a.CODPRD = i.CODPRD
		LEFT JOIN TUND u
			ON a.unidade = u.CODUND
		LEFT JOIN TCLASSFISCAL f
			ON f.CODCLAS = a.CODCLAS
		WHERE 
			%s
		GROUP BY 
			a.ID, 
			a.IDPROMOCAO,
			a.CODPRD, 
			a.NOMEFANTASIA, 
			a.APLICACAO, 
			a.UNIDADE, 
			a.CODBARRAS, 
			a.PRECO1, 
			a.SALDOGERALFISICO, 
			m.DTA_INICIO, 
			m.DTA_TERMINIO, 
			i.TIPO, 
			m.valor, 
			i.VALOR, 
			u.DESCRICAO, 
			f.CODCLAS,
			a.INATIVO,
			a.dtcadastramento
	"""

	public static final String select_produtos_por_id = String.format(select_produtos, " a.CODPRD = :idIdentificador");

	public static final String select_produtos_por_descricao = String.format(select_produtos, " a.NOMEFANTASIA LIKE UPPER('%'||:query||'%') AND a.CODPRD NOT IN (:idsNotIn) ");
}
