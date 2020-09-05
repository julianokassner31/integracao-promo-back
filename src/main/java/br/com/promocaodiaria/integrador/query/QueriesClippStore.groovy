package br.com.promocaodiaria.integrador.query

class QueriesClippStore {
	
	private static final String select_produtos = """
		SELECT 
			a.ID_IDENTIFICADOR as id_identificador,
			a.QTD_ATUAL as qtd_atual,
			a.COD_BARRA as cod_barra,
			a.COD_NCM as cod_ncm,
			b.DESCRICAO as nome,
			b.OBSERVACAO as descricao,
			b.PRC_VENDA as valor,
			c.DT_INICIO as data_inicio_promocao,
			c.DT_FIM as data_termino_promocao,
			c.PRC_VENDA as valor_promocao,
			u.DESCRICAO as unidade_medida,
			iif( b.STATUS = 'A','T','F') as ativo
		FROM TB_EST_PRODUTO a INNER JOIN TB_ESTOQUE b
			ON b.ID_ESTOQUE = a.ID_IDENTIFICADOR
		left JOIN TB_ESTOQUE_PRECOS c
			ON a.ID_IDENTIFICADOR = c.ID_IDENTIFICADOR
		LEFT JOIN TB_UNI_MEDIDA u
			ON u.UNIDADE = b.UNI_MEDIDA 
		WHERE
	"""
	
	public static final String select_produtos_por_id = select_produtos.concat(" a.ID_IDENTIFICADOR = :idIdentificador")

	public static final String select_produtos_por_descricao = select_produtos
		.concat(" a.ID_IDENTIFICADOR NOT IN (SELECT tep.ID_IDENTIFICADOR FROM TB_EST_PRODUTO tep WHERE tep.ID_IDENTIFICADOR IN (:idsNotIn))")
		.concat(" AND b.DESCRICAO LIKE '%'||:query||'%'")
}
