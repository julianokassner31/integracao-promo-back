-- Para Firebird
CREATE TABLE prod_promo_diaria (
	id integer not null PRIMARY KEY,
	nome varchar(100),
	descricao BLOB SUB_TYPE TEXT,
	id_identificador varchar(255),
	dt_inicio date,
	dt_fim date,
	valor float,
	vl_promocao float,
	qt_atual float,
	cod_barra varchar(15),
	cod_ncm varchar(20),
	uni_medida varchar(30),
	setor varchar(50)
	sync char(1),
	ativo char(1),
	log BLOB SUB_TYPE TEXT,
	CONSTRAINT id_identificador_uk UNIQUE (id_identificador)
);

-- codigo para auto incrementar o id da tabela prod_promo_diaria
CREATE GENERATOR sq_prod_promo_diaria;

CREATE TRIGGER tr_prod_promo_diaria for prod_promo_diaria
BEFORE INSERT position 0
AS
BEGIN
new.id = gen_id(sq_prod_promo_diaria,1);
END;

-- para firebird
CREATE TABLE config (
	id integer,
	tempo_scan integer,
	url_integracao varchar(255),
	token varchar(255),
	sistema VARCHAR(100),
	CONSTRAINT config_pk PRIMARY KEY (id)
);

-- tempo scan = 5 minutos
INSERT INTO config (id, tempo_scan, url_integracao, token, sistema) 
VALUES (1, 300000, 'https://promocaodiaria.com/wshomologacao', '7c8bb07ff4b9bf1bbb6215f95c1b04d2', 'CLIPP');

ALTER TABLE PROD_PROMO_DIARIA 
DROP DT_INICIO;

ALTER TABLE PROD_PROMO_DIARIA 
DROP DT_FIM;

ALTER TABLE PROD_PROMO_DIARIA 
ADD DT_INICIO timestamp;

ALTER TABLE PROD_PROMO_DIARIA 
ADD DT_FIM timestamp;