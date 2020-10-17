ALTER TABLE prod_promo_diaria 
ADD dt_insercao_api date;

update 
	prod_promo_diaria 
set dt_insercao_api = (
		select 
			cast('NOW' as timestamp) 
		from 
			rdb$database
	) 
where 
	id in (
		select 
			id 
		from 
			prod_promo_diaria 
		where 
			sync = 'Y'
	);